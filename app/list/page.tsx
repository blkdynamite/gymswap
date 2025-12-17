import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import ListingForm from "@/components/listing-form";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "List Your Gym Membership - GymSwap.ai",
  description: "List your gym membership for others to find. Connect with buyers looking to take over your contract.",
  keywords: ["list gym membership", "sell gym contract", "post gym membership", "gym membership listing"],
};

export default async function ListPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/dashboard/lister"
        className="text-sm text-gray-600 hover:text-gray-900 mb-6 inline-block flex items-center gap-1"
      >
        ← Back to Dashboard
      </Link>
      <ListingForm />
    </div>
  );
}

