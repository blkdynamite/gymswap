import Link from "next/link";

interface ListingCardProps {
  id: string;
  gymName: string;
  location: string;
  monthlyPrice: number;
}

export default function ListingCard({ id, gymName, location, monthlyPrice }: ListingCardProps) {
  return (
    <Link
      href={`/listing/${id}`}
      className="block rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      <h3 className="text-lg font-semibold text-gray-900">{gymName}</h3>
      <p className="mt-2 text-sm text-gray-600">{location}</p>
      <p className="mt-4 text-2xl font-bold text-gray-900">
        ${monthlyPrice.toFixed(2)}
        <span className="text-sm font-normal text-gray-600">/month</span>
      </p>
    </Link>
  );
}

