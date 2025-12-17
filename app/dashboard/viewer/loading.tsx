export default function ViewerDashboardLoading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8">
        <div className="h-9 w-64 bg-gray-200 rounded animate-pulse mb-2" />
        <div className="h-6 w-96 bg-gray-200 rounded animate-pulse" />
      </div>

      <div className="space-y-6">
        {[...Array(2)].map((_, i) => (
          <div
            key={i}
            className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="mb-6">
              <div className="h-7 w-1/3 bg-gray-200 rounded animate-pulse mb-2" />
              <div className="h-4 w-1/4 bg-gray-200 rounded animate-pulse mb-4" />
              <div className="h-8 w-1/5 bg-gray-200 rounded animate-pulse" />
            </div>
            <div className="mb-6 rounded-md bg-indigo-50 border border-indigo-200 p-4">
              <div className="h-5 w-32 bg-gray-200 rounded animate-pulse mb-3" />
              <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse mb-2" />
              <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse" />
            </div>
            <div className="border-t border-gray-200 pt-6">
              <div className="h-5 w-24 bg-gray-200 rounded animate-pulse mb-4" />
              <div className="space-y-3">
                {[...Array(3)].map((_, j) => (
                  <div key={j} className="h-5 w-40 bg-gray-200 rounded animate-pulse" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

