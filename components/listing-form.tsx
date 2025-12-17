"use client";

import { useState } from "react";
import { createListing } from "@/app/list/actions";

export default function ListingForm() {
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(formData: FormData) {
    setError(null);
    setIsSubmitting(true);

    const result = await createListing(formData);

    if (result?.error) {
      setError(result.error);
      setIsSubmitting(false);
    }
    // If successful, the server action will redirect
  }

  return (
    <form action={handleSubmit} className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">List Your Gym Membership</h2>
        <p className="text-sm text-gray-600">
          Fill out the form below to list your gym membership for others to find.
        </p>
      </div>

      <div>
        <label htmlFor="gymName" className="block text-sm font-medium text-gray-700">
          Gym Name <span className="text-red-500">*</span>
        </label>
        <input
          id="gymName"
          name="gymName"
          type="text"
          required
          maxLength={100}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm"
          placeholder="e.g., Equinox, Planet Fitness, LA Fitness"
        />
      </div>

      <div>
        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
          Location <span className="text-red-500">*</span>
        </label>
        <input
          id="location"
          name="location"
          type="text"
          required
          maxLength={200}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm"
          placeholder="e.g., New York, NY or Los Angeles, CA"
        />
      </div>

      <div>
        <label htmlFor="monthlyPrice" className="block text-sm font-medium text-gray-700">
          Monthly Price ($) <span className="text-red-500">*</span>
        </label>
        <input
          id="monthlyPrice"
          name="monthlyPrice"
          type="number"
          step="0.01"
          min="0.01"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm"
          placeholder="e.g., 99.99"
        />
      </div>

      <div>
        <label htmlFor="contractEndDate" className="block text-sm font-medium text-gray-700">
          Contract End Date (Optional)
        </label>
        <input
          id="contractEndDate"
          name="contractEndDate"
          type="date"
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm"
        />
        <p className="mt-1 text-xs text-gray-500">
          When can this contract be canceled? Leave blank if not applicable.
        </p>
      </div>

      <div>
        <label htmlFor="details" className="block text-sm font-medium text-gray-700">
          Additional Details (Optional)
        </label>
        <textarea
          id="details"
          name="details"
          rows={4}
          maxLength={1000}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm"
          placeholder="Any additional information about the membership..."
        />
        <p className="mt-1 text-xs text-gray-500">Maximum 1000 characters</p>
      </div>

      <div className="rounded-md bg-yellow-50 border border-yellow-200 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <svg
              className="h-5 w-5 text-yellow-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3 flex-1">
            <h3 className="text-sm font-medium text-yellow-800">
              Offline Transfer Process
            </h3>
            <div className="mt-2 text-sm text-yellow-700">
              <p>
                The final membership transfer is an offline process subject to gym rules and approval.
                GymSwap.ai facilitates the connection between buyers and sellers, but the actual transfer
                must be completed directly with the gym according to their policies.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-start">
        <div className="flex h-5 items-center">
          <input
            id="offlineTransferAcknowledged"
            name="offlineTransferAcknowledged"
            type="checkbox"
            required
            className="h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="offlineTransferAcknowledged" className="font-medium text-gray-700">
            I acknowledge that the final membership transfer is an offline process subject to gym rules{" "}
            <span className="text-red-500">*</span>
          </label>
        </div>
      </div>

      <div className="rounded-md bg-slate-50 border border-slate-200 p-4">
        <div className="flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="transferabilityConfirmed"
              name="transferabilityConfirmed"
              type="checkbox"
              required
              className="h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="transferabilityConfirmed" className="font-medium text-gray-700">
              I confirm that I have reviewed my gym contract or spoken to gym management and believe
              this contract is transferable. I understand I am responsible for the final transfer
              process. <span className="text-red-500">*</span>
            </label>
          </div>
        </div>
      </div>

      {error && (
        <div className="rounded-md bg-red-50 p-4">
          <p className="text-sm text-red-800">{error}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isSubmitting ? "Creating Listing..." : "Create Listing"}
      </button>
    </form>
  );
}

