

import React from "react";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import SignInCard from "./_components/SignInCard";

import { Skeleton } from "@/components/ui/skeleton";

const Page: React.FC = async () => {
  const { userId } = await auth();
  const redirectTo: string = "/dashboard";

  if (userId) {
    redirect(redirectTo);
  }

  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-400 min-h-screen flex items-center justify-center">
      <div className="lg:grid lg:grid-cols-12 w-full max-w-6xl p-6">
        <section className="relative hidden lg:flex lg:col-span-5 xl:col-span-6 items-center justify-center">
          <img
            alt="Sign-in background"
            src="/sign.jpg"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />
          <div className="relative text-center p-12">
            <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Welcome to Agentube
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Analyze videos, generate thumbnails, extract scripts, and more.
            </p>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 xl:col-span-6">
          <div className="w-full max-w-xl">
            <React.Suspense fallback={<Skeleton className="h-96 w-full rounded-lg" />}>
              <SignInCard />
            </React.Suspense>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Page;
