const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 pt-8">
      {[...Array(12)].map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="bg-gray-200 w-64 h-80 rounded-lg mb-4"></div>
          <div className="space-y-2">
            <div className="bg-gray-200 h-4 w-3/4 rounded"></div>
            <div className="bg-gray-200 h-4 w-1/2 rounded"></div>
            <div className="bg-gray-200 h-4 w-1/3 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
