"use client";


import Link from "next/link";
import React from "react";
import AgentPulse from "./Agentpuls";
import {
  SignedIn,
  SignedOut,

  UserButton,
} from "@clerk/nextjs";


import { ModeToggle } from "./MoodToggle";

function Header() {
  return (
    <header className="sticky top-0 z-50 left-0 px-0 lg:px-4 bg-white/2 dark:bg-gray-900/30 backdrop-blur-lg shadow-md">

      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <AgentPulse size="small" />{" "}
            <h1 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent ">
              AgentTube
            </h1>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <ModeToggle />
          {/* if user is not signe din */}
          <SignedOut>
            <Link
              href="/sign-in"
              className="border border-blue-500 dark:border-blue-100 bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text px-2 py-1 rounded-md dark:from-blue-400 dark:to-blue-100"
            >
              Sign In
            </Link>
          </SignedOut>

          {/* if user is signed din */}

          <SignedIn>
            {/* userinformation */}

            <Link
              href="/manageplan"
              className="border border-blue-500 dark:border-blue-100 bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text p-2  rounded-md dark:from-blue-400 dark:to-blue-100"
            >
              Manage Plan
            </Link>
            <div className="=-2 w-10 h-10 flex items-center justify-center rounded-full border bg-blue-100 border-blue-200">
              <UserButton />
            </div>
          </SignedIn>
        </div>
      </div>
    </header>
  );
}

export default Header;
