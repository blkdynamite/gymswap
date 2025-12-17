import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import LegalNotice from "@/components/ui/legal-notice";

interface ListingDetailPageProps {
  params: {
    id: string;
  };
}

export default async function ListingDetailPage({ params }: ListingDetailPageProps) {
  const listing = await prisma.listing.findUnique({
    where: {
      id: params.id,
    },
    include: {
      user: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  });

  if (!listing || !listing.isAvailable) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/search"
        className="text-sm text-gray-600 hover:text-gray-900 mb-6 inline-block"
      >
        ← Back to search
      </Link>

      <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-gray-900">{listing.gymName}</h1>
        <p className="mt-2 text-lg text-gray-600">{listing.location}</p>

        <div className="mt-6">
          <p className="text-4xl font-bold text-gray-900">
            ${listing.monthlyPrice.toFixed(2)}
            <span className="text-lg font-normal text-gray-600">/month</span>
          </p>
        </div>

        {listing.contractEndDate && (
          <div className="mt-6">
            <p className="text-sm font-medium text-gray-700">Contract End Date</p>
            <p className="text-sm text-gray-600">
              {new Date(listing.contractEndDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        )}

        {listing.details && (
          <div className="mt-6">
            <p className="text-sm font-medium text-gray-700">Details</p>
            <p className="mt-2 text-sm text-gray-600 whitespace-pre-wrap">{listing.details}</p>
          </div>
        )}

        <div className="mt-8 rounded-md bg-yellow-50 border border-yellow-200 p-4">
          <p className="text-sm text-yellow-800">
            <strong>Note:</strong> To contact the seller and proceed with the transfer, you will need
            to pay a $5 contact fee. The final membership transfer is an offline process subject to
            gym rules and approval.
          </p>
        </div>

        <div className="mt-8">
          <button
            disabled
            className="w-full rounded-md bg-gray-900 px-4 py-3 text-sm font-semibold text-white shadow-sm opacity-50 cursor-not-allowed"
          >
            Contact Seller ($5) - Coming Soon
          </button>
        </div>

        <div className="mt-8">
          <LegalNotice />
        </div>
      </div>
    </div>
  );
}

