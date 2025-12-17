import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lister Dashboard - GymSwap.ai",
  description: "Manage your gym membership listings, view prospects, and track drafts.",
};

interface ListerDashboardPageProps {
  searchParams: Promise<{ success?: string }> | { success?: string };
}

export default async function ListerDashboardPage({ searchParams }: ListerDashboardPageProps) {
  // Handle both Promise and direct object cases for searchParams
  const params = searchParams instanceof Promise ? await searchParams : searchParams;
  const user = await getCurrentUser();

  if (!user) {
    redirect("/sign-in");
  }

  const listings = await prisma.listing.findMany({
    where: {
      userId: user.id,
    },
    include: {
      transactions: {
        where: {
          status: "PAID",
        },
        include: {
          buyer: {
            select: {
              name: true,
              email: true,
            },
          },
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  type ListingWithTransactions = typeof listings[0];
  
  const activeListings = listings.filter(
    (l): l is ListingWithTransactions => l.isPublished && l.isAvailable
  );
  const drafts = listings.filter(
    (l): l is ListingWithTransactions => !l.isPublished
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {params.success === "true" && (
        <div className="mb-6 rounded-md bg-green-50 border border-green-200 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-green-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-green-800">
                Listing created successfully! Complete payment to publish it.
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Lister Dashboard</h1>
        <p className="mt-2 text-gray-600">Manage your gym membership listings</p>
      </div>

      <div className="mb-8">
        <Link
          href="/list"
          className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Create New Listing
        </Link>
      </div>

      {/* Active Listings */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">My Active Listings</h2>
        {activeListings.length === 0 ? (
          <div className="rounded-lg border border-gray-200 bg-white p-8 text-center shadow-sm">
            <p className="text-gray-600">No active listings yet.</p>
            <p className="mt-2 text-sm text-gray-500">
              Create a listing and complete payment to publish it.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {activeListings.map((listing) => (
              <div
                key={listing.id}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{listing.gymName}</h3>
                    <p className="text-sm text-gray-600">{listing.location}</p>
                    <p className="mt-2 text-lg font-bold text-gray-900">
                      ${listing.monthlyPrice.toFixed(2)}/month
                    </p>
                  </div>
                  <Link
                    href={`/listing/${listing.id}`}
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    View →
                  </Link>
                </div>

                {/* Prospects Section */}
                {listing.transactions.length > 0 && (
                  <div className="mt-6 border-t border-gray-200 pt-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Prospects</h4>
                    <div className="space-y-2">
                      {listing.transactions.map((transaction) => (
                        <div
                          key={transaction.id}
                          className="flex items-center justify-between rounded-md bg-slate-50 p-3"
                        >
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {transaction.buyer.name || "Unknown"}
                            </p>
                            <p className="text-xs text-gray-600">{transaction.buyer.email}</p>
                          </div>
                          <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                            Paid
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Drafts */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Drafts (Unpaid)</h2>
        {drafts.length === 0 ? (
          <div className="rounded-lg border border-gray-200 bg-white p-8 text-center shadow-sm">
            <p className="text-gray-600">No draft listings.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {drafts.map((listing) => (
              <div
                key={listing.id}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{listing.gymName}</h3>
                    <p className="text-sm text-gray-600">{listing.location}</p>
                    <p className="mt-2 text-lg font-bold text-gray-900">
                      ${listing.monthlyPrice.toFixed(2)}/month
                    </p>
                    <p className="mt-2 text-sm text-amber-600">
                      Payment required to publish this listing
                    </p>
                  </div>
                  <Link
                    href={`/listing/${listing.id}`}
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    View →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

