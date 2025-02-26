"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSignIn } from "@clerk/nextjs";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useTheme } from "next-themes";

type OAuthProvider = "oauth_google" | "oauth_github";

function SignInCard() {
  const { signIn, isLoaded } = useSignIn();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { theme } = useTheme();

  if (!isLoaded)
    return (
      <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl w-full max-w-3xl border border-gray-200 dark:border-gray-700">
        <Skeleton className="h-10 w-3/4 mb-4" />
        <Skeleton className="h-8 w-full mb-4" />
        <Skeleton className="h-10 w-full" />
      </div>
    );

  const handleOAuthSignIn = (provider: OAuthProvider) => {
    signIn.authenticateWithRedirect({
      strategy: provider,
      redirectUrl: "/verify",
      redirectUrlComplete: "/dashboard",
    });
  };

  const handleEmailSignIn = async () => {
    try {
      const signInAttempt = await signIn.create({ identifier: email });
      const emailFactor = signInAttempt.supportedFirstFactors?.find(
        (factor) => factor.strategy === "email_code"
      );
      if (!emailFactor?.emailAddressId) {
        throw new Error("Email verification method not found.");
      }
      await signInAttempt.prepareFirstFactor({
        strategy: "email_code",
        emailAddressId: emailFactor.emailAddressId,
      });
      router.push("/");
    } catch (err: any) {
      setError(err.errors?.[0]?.longMessage || err.message || "Something went wrong.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl w-full max-w-3xl border border-gray-200 dark:border-gray-700"
      >
        <h1 className="text-2xl font-semibold text-center text-gray-900 dark:text-white mb-6">
          Sign in to Agentube
        </h1>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-6">
          Welcome back! Please sign in to continue analyzing videos.
        </p>

        <div className="space-y-3">
          <Button
            onClick={() => handleOAuthSignIn("oauth_google")}
            variant="outline"
            className="w-full flex items-center gap-2 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600"
          >
            <FcGoogle size={20} /> Continue with Google
          </Button>
          <Button
            onClick={() => handleOAuthSignIn("oauth_github")}
            variant="outline"
            className="w-full flex items-center gap-2 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600"
          >
            <FaGithub size={20} /> Continue with GitHub
          </Button>
        </div>

        <div className="relative my-6 flex items-center">
          <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
          <span className="mx-4 text-gray-400 dark:text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
        </div>

        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border rounded-lg border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
        />
        <Button
          onClick={handleEmailSignIn}
          className="w-full bg-blue-600 text-white mt-4 hover:bg-blue-700 py-3 rounded-lg"
        >
          Continue with Email
        </Button>

        {error && <p className="text-red-500 text-sm mt-3 text-center">{error}</p>}

        <p className="text-center text-gray-500 dark:text-gray-400 mt-6">
          Don't have an account? <a href="/signup" className="text-blue-600 hover:underline">Sign up</a>
        </p>
      </motion.div>
    </div>
  );
}

export default SignInCard;
