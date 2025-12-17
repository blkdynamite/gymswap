import Link from "next/link";
import LegalNotice from "./ui/legal-notice";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">GymSwap.ai</h3>
            <p className="text-sm text-gray-600">
              The easiest way to sell your unused gym membership or find a great deal on a new one.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/search"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Browse Listings
                </Link>
              </li>
              <li>
                <Link
                  href="/list"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  List Membership
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <LegalNotice />
        </div>

        <div className="mt-8 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} GymSwap.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

