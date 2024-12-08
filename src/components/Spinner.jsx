import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative w-16 h-16">
        {/* Outer Ring */}
        <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-300 border-t-blue-600 rounded-full animate-spin"></div>
        {/* Inner Circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-600 rounded-full"></div>
      </div>
    </div>
  );
};

export default Spinner;
