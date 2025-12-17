import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Viewer Dashboard - GymSwap.ai",
  description: "View your unlocked gym memberships and seller contact information.",
};

export default async function ViewerDashboardPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/sign-in");
  }

  const transactions = await prisma.transaction.findMany({
    where: {
      buyerId: user.id,
      status: "PAID",
    },
    include: {
      listing: {
        include: {
          user: {
            select: {
              name: true,
              email: true,
            },
          },
        },
      },
    },
    orderBy: {
      paidAt: "desc",
    },
  });

  const nextSteps = [
    { id: 1, label: "Email Seller", completed: false },
    { id: 2, label: "Meet at Gym", completed: false },
    { id: 3, label: "Finalize Transfer", completed: false },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Viewer Dashboard</h1>
        <p className="mt-2 text-gray-600">Your unlocked gym memberships</p>
      </div>

      {transactions.length === 0 ? (
        <div className="rounded-lg border border-gray-200 bg-white p-12 text-center shadow-sm">
          <p className="text-gray-600">You haven't unlocked any memberships yet.</p>
          <p className="mt-2 text-sm text-gray-500">
            Browse listings and pay the contact fee to unlock seller information.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  {transaction.listing.gymName}
                </h2>
                <p className="text-sm text-gray-600">{transaction.listing.location}</p>
                <p className="mt-2 text-2xl font-bold text-gray-900">
                  ${transaction.listing.monthlyPrice.toFixed(2)}
                  <span className="text-sm font-normal text-gray-600">/month</span>
                </p>
              </div>

              {/* Seller Contact Info */}
              <div className="mb-6 rounded-md bg-indigo-50 border border-indigo-200 p-4">
                <h3 className="text-sm font-semibold text-indigo-900 mb-3">Seller Contact</h3>
                <div className="space-y-2">
                  <p className="text-sm text-gray-900">
                    <strong>Name:</strong> {transaction.listing.user.name || "Not provided"}
                  </p>
                  <p className="text-sm text-gray-900">
                    <strong>Email:</strong>{" "}
                    <a
                      href={`mailto:${transaction.listing.user.email}`}
                      className="text-indigo-600 hover:text-indigo-500 underline"
                    >
                      {transaction.listing.user.email}
                    </a>
                  </p>
                </div>
              </div>

              {/* Next Steps Checklist */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Next Steps</h3>
                <div className="space-y-3">
                  {nextSteps.map((step) => (
                    <div key={step.id} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`step-${transaction.id}-${step.id}`}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor={`step-${transaction.id}-${step.id}`}
                        className="ml-3 text-sm text-gray-700"
                      >
                        {step.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <Link
                  href={`/listing/${transaction.listing.id}`}
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  View Listing Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

