import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
        <p className="mt-2 text-sm text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="prose prose-slate max-w-none">
        <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 mb-3">We collect the following information:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Account information: email address, name (optional)</li>
              <li>Listing information: gym name, location, price, contract details</li>
              <li>Transaction information: payment records for contact fees</li>
              <li>Usage data: how you interact with our platform</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>To facilitate connections between buyers and sellers</li>
              <li>To process payments for platform services</li>
              <li>To provide customer support</li>
              <li>To improve our platform and services</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Information Sharing</h2>
            <p className="text-gray-700 mb-3">
              We share your contact information (name and email) with buyers who have paid the $5
              contact fee for your listing. This is the core function of our lead-generation
              service.
            </p>
            <p className="text-gray-700">
              We do not sell your personal information to third parties. We may share information
              with service providers who help us operate our platform, subject to confidentiality
              agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
            <p className="text-gray-700">
              We implement appropriate technical and organizational measures to protect your personal
              information. However, no method of transmission over the internet is 100% secure, and
              we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Your Rights</h2>
            <p className="text-gray-700 mb-3">You have the right to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Delete your account and associated data</li>
              <li>Opt out of certain communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Contact</h2>
            <p className="text-gray-700">
              If you have questions about this privacy policy, please contact us through our
              platform.
            </p>
          </section>
        </div>
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

