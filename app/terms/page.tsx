import LegalNotice from "@/components/ui/legal-notice";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
        <p className="mt-2 text-sm text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="prose prose-slate max-w-none">
        <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Platform Services</h2>
            <p className="text-gray-700">
              GymSwap.ai is a lead-generation platform that connects buyers and sellers of gym
              memberships. We facilitate introductions between parties but do not participate in or
              guarantee the actual membership transfer process.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Fees and Payments</h2>
            <p className="text-gray-700 mb-3">
              Our platform charges the following fees for lead-generation services:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>
                <strong>$5 Contact Fee:</strong> Buyers pay $5 to unlock seller contact information
                for a specific listing. This fee is for the lead-generation service only.
              </li>
              <li>
                <strong>$2 Platform Fee:</strong> Sellers pay $2 when their listing receives a paid
                contact. This fee is for the platform lead-generation service.
              </li>
            </ul>
            <p className="text-gray-700 mt-4">
              <strong>Important:</strong> These fees are for platform services only. The actual
              membership transfer is an offline transaction between the buyer and seller, subject to
              the gym&apos;s policies and approval. GymSwap.ai does not participate in, facilitate, or
              guarantee the transfer process.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Membership Transfers</h2>
            <p className="text-gray-700">
              All membership transfers must be completed directly with the gym according to their
              policies and procedures. GymSwap.ai does not guarantee that any contract is
              transferable. The transferability of a membership is determined solely by the gym and
              their contract terms. Users are responsible for verifying transferability with their
              gym before listing or purchasing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. User Responsibilities</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Verify contract transferability with your gym before listing</li>
              <li>Complete all transfers directly with the gym</li>
              <li>Assume all risk associated with the transfer process</li>
              <li>Provide accurate information in listings</li>
              <li>Communicate honestly and professionally with other users</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Limitation of Liability</h2>
            <p className="text-gray-700">
              GymSwap.ai is a listing service only. We do not guarantee the transferability of any
              contract. All transfers are subject to the approval and terms of the specific gym and
              must be completed directly with the gym. You assume all risk associated with using our
              platform and participating in membership transfers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Contact</h2>
            <p className="text-gray-700">
              If you have questions about these terms, please contact us through our platform.
            </p>
          </section>
        </div>
      </div>

      <div className="mt-8">
        <LegalNotice />
      </div>

      <div className="mt-8">
        <Link
          href="/"
          className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

