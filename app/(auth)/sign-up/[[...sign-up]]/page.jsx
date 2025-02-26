"use client"
import { SignIn } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";


import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSignIn } from "@clerk/nextjs";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function SignUpPage() {
  const { signIn, isLoaded } = useSignIn();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  if (!isLoaded) return <p className="text-center text-gray-500"><SignUpPage/></p>;

  const handleOAuthSignIn = (provider) => {
    signIn.authenticateWithRedirect({
      strategy: provider,
      redirectUrl: "/verify",
      redirectUrlComplete: "/dashboard",
    });
  };

  const handleEmailSignIn = async () => {
    try {
      const signInAttempt = await signIn.create({ identifier: email });
      if (!signInAttempt.supportedFirstFactors) {
        throw new Error("No authentication factors available for this email.");
      }
      const emailFactor = signInAttempt.supportedFirstFactors.find(
        (factor) => factor.strategy === "email_code"
      );
      if (!emailFactor || !emailFactor.emailAddressId) {
        throw new Error("Email verification method not found.");
      }
      await signInAttempt.prepareFirstFactor({
        strategy: "email_code",
        emailAddressId: emailFactor.emailAddressId,
      });
      router.push("/verify");
    } catch (err) {
      setError(err.errors?.[0]?.longMessage || err.message || "Something went wrong.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-3xl border border-gray-200"
      >
        <h1 className="text-2xl font-semibold text-center text-gray-900 mb-6">Sign in to Internee.pk</h1>
        <p className="text-center text-gray-500 mb-6">Welcome back! Please sign in to continue and boost your carrer</p>

        <div className="space-y-3">
          <Button onClick={() => handleOAuthSignIn("oauth_google")} variant="outline" className="w-full flex items-center gap-2 text-gray-700 border-gray-300">
            <FcGoogle size={20} /> Continue with Google
          </Button>

          <Button onClick={() => handleOAuthSignIn("oauth_github")} variant="outline" className="w-full flex items-center gap-2 text-gray-700 border-gray-300">
            <FaGithub size={20} /> Continue with GitHub
          </Button>
        </div>

        <div className="relative my-6 flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-400">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border rounded-lg border-gray-300 focus:ring-2 focus:ring-green-500"
        />
        <Button onClick={handleEmailSignIn} className="w-full bg-green-600 text-white mt-4 hover:bg-green-700 py-3 rounded-lg">
          Continue with Email
        </Button>

        {error && <p className="text-red-500 text-sm mt-3 text-center">{error}</p>}

        <p className="text-center text-gray-500 mt-6">
          Already have an account? <a href="/sign-in" className="text-green-600 hover:underline">Sign In</a>
        </p>
      </motion.div>
    </div>
  );
}


export default function Page() {
  



  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/internships"; // Default to dashboard if no redirect param

  useEffect(() => {
    // Ensure user data is loaded before checking authentication status
    if (isLoaded) {
      if (isSignedIn) {
        router.push(redirectTo);
      }
    }
  }, [isLoaded, isSignedIn, router, redirectTo]);

  // While user data is loading, you can render a loading state or nothing
  if (!isLoaded) {
    return null; // or a loading spinner, e.g., <LoadingSpinner />
  } // Default to dashboard if no redirect param
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="/sign.webp"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />

          <div className="hidden lg:relative lg:block lg:p-12 mb-14">
            <a className="block text-white" href="#">
              <span className="sr-only">Home</span>
            </a>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to Internee.pk 
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
            Kickstart your tech career with real-world experience
            </p>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-3 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="w-3/4">
            <div className="relative -mt-16 block lg:hidden">
              <a
                className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
                href="#"
              >
                <span className="sr-only">Home</span>
                <svg
                  className="h-8 sm:h-10"
                  viewBox="0 0 28 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Welcome to Internee.pk 
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
              Kickstart your tech career with real-world experience
              </p>
            </div>
            <div className="w-full">
            <SignUpPage/>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}