import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - GymSwap.ai",
  description: "Access your lister and viewer dashboards to manage your gym membership listings and purchases.",
};

export default async function DashboardPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900">
        Welcome, {user.name || user.email}!
      </h1>
      <p className="mt-4 text-gray-600">
        Choose your dashboard view below.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Link
          href="/dashboard/lister"
          className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Lister Dashboard</h2>
          <p className="text-sm text-gray-600">
            Manage your gym membership listings, view prospects, and track drafts.
          </p>
        </Link>

        <Link
          href="/dashboard/viewer"
          className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Viewer Dashboard</h2>
          <p className="text-sm text-gray-600">
            View your unlocked memberships and seller contact information.
          </p>
        </Link>
      </div>
    </div>
  );
}

