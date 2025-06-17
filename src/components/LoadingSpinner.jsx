import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-transparent rounded-full animate-spin">
          <div className="absolute inset-0 border-4 border-t-violet-500 border-r-blue-500 border-b-green-500 border-l-yellow-500 rounded-full animate-spin"></div>
        </div>
        <div className="absolute inset-2 border-4 border-transparent rounded-full animate-spin">
          <div className="absolute inset-0 border-4 border-t-orange-500 border-r-red-500 border-b-violet-500 border-l-blue-500 rounded-full animate-spin" style={{animationDirection: 'reverse'}}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;