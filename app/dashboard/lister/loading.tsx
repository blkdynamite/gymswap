export default function ListerDashboardLoading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8">
        <div className="h-9 w-64 bg-gray-200 rounded animate-pulse mb-2" />
        <div className="h-6 w-96 bg-gray-200 rounded animate-pulse" />
      </div>

      <div className="mb-8">
        <div className="h-10 w-48 bg-gray-200 rounded animate-pulse" />
      </div>

      <div className="mb-12">
        <div className="h-7 w-48 bg-gray-200 rounded animate-pulse mb-4" />
        <div className="space-y-4">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="h-6 w-1/3 bg-gray-200 rounded animate-pulse mb-2" />
              <div className="h-4 w-1/4 bg-gray-200 rounded animate-pulse mb-4" />
              <div className="h-6 w-1/5 bg-gray-200 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

