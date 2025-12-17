import { prisma } from "@/lib/prisma";
import ListingCard from "@/components/listing-card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Browse Gym Memberships - GymSwap.ai",
  description: "Find great deals on gym memberships in your area. Browse available contracts ready for transfer.",
  keywords: ["gym membership deals", "gym contracts", "gym membership listings", "find gym membership"],
};

export default async function SearchPage() {
  const listings = await prisma.listing.findMany({
    where: {
      isAvailable: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Browse Deals</h1>
        <p className="mt-2 text-gray-600">
          Find great deals on gym memberships in your area
        </p>
      </div>

      {listings.length === 0 ? (
        <div className="rounded-lg border border-gray-200 bg-white p-12 text-center">
          <p className="text-gray-600">No listings available at the moment.</p>
          <p className="mt-2 text-sm text-gray-500">
            Check back soon or list your own membership!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {listings.map((listing) => (
            <ListingCard
              key={listing.id}
              id={listing.id}
              gymName={listing.gymName}
              location={listing.location}
              monthlyPrice={listing.monthlyPrice}
            />
          ))}
        </div>
      )}
    </div>
  );
}


