import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="mb-8">
        <h1 className="text-6xl mb-4">😵</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Oops! Something went wrong
        </h2>
        <p className="text-gray-600 mb-6">
          We're sorry, but something unexpected happened. Please try again.
        </p>
        {err?.status && (
          <p className="text-sm text-gray-500 mb-4">
            Error {err.status}: {err.statusText || "Unknown error"}
          </p>
        )}
      </div>
      <div className="flex gap-4">
        <Link
          to="/"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Go Home
        </Link>
        <button
          onClick={() => window.location.reload()}
          className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
        >
          Reload Page
        </button>
      </div>
    </div>
  );
};

export default Error;
