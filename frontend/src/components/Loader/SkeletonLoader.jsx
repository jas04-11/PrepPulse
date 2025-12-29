import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-pulse">
      
      {/* Title */}
      <div className="h-6 w-2/3 bg-gray-200 rounded"></div>

      {/* Paragraph */}
      <div className="space-y-3">
        <div className="h-3 bg-gray-200 rounded w-full"></div>
        <div className="h-3 bg-gray-200 rounded w-full"></div>
        <div className="h-3 bg-gray-200 rounded w-11/12"></div>
        <div className="h-3 bg-gray-200 rounded w-10/12"></div>
      </div>

      {/* Highlighted content box */}
      <div className="bg-gray-100 rounded-lg p-5 space-y-3">
        <div className="h-3 bg-gray-300 rounded w-5/6"></div>
        <div className="h-3 bg-gray-300 rounded w-4/6"></div>
        <div className="h-3 bg-gray-300 rounded w-3/6"></div>
      </div>

      {/* Divider spacing */}
      <div className="h-4"></div>

      {/* More content */}
      <div className="space-y-3">
        <div className="h-3 bg-gray-200 rounded w-full"></div>
        <div className="h-3 bg-gray-200 rounded w-full"></div>
        <div className="h-3 bg-gray-200 rounded w-11/12"></div>
        <div className="h-3 bg-gray-200 rounded w-10/12"></div>
        <div className="h-3 bg-gray-200 rounded w-9/12"></div>
      </div>

      {/* Footer block */}
      <div className="bg-gray-100 rounded-lg p-5 space-y-3">
        <div className="h-3 bg-gray-300 rounded w-4/6"></div>
        <div className="h-3 bg-gray-300 rounded w-3/6"></div>
      </div>

    </div>
  );
};

export default SkeletonLoader;
