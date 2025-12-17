"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import SignOutButton from "./sign-out-button";

export default function AuthNav() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <Link
        href="/sign-in"
        className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
      >
        Sign In
      </Link>
    );
  }

  if (session) {
    return (
      <div className="flex items-center gap-6">
        <Link
          href="/dashboard"
          className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
        >
          Dashboard
        </Link>
        <SignOutButton />
      </div>
    );
  }

  return (
    <Link
      href="/sign-in"
      className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
    >
      Sign In
    </Link>
  );
}

