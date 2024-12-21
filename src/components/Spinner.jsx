import React from "react";

const styles = {
  small: {
    width: "20px",
    height: "20px",
    margin: "0px",
    innerWidth: "15px",
    innerHeight: "15px",
  },
  big: {
    width: "40px",
    height: "40px",
    margin: "20px",
    innerWidth: "32px",
    innerHeight: "32px",
  },
};

const Spinner = ({ type = "small" }) => {
  const { width, height, margin, innerWidth, innerHeight } = styles[type];

  // console.log(margin);
  // console.log(width);
  // console.log(height);
  return (
    <div className={`flex justify-center items-center`} style={{ margin }}>
      <div
        className={`relative`}
        style={{
          width, // Inline styles for width
          height, // Inline styles for height
        }}
      >
        {/* Outer Ring */}
        <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-300 border-t-gray-800 rounded-full animate-spin"></div>
        {/* Inner Circle */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 rounded-full"
          style={{
            width: innerWidth, // Inline styles for width
            height: innerHeight, // Inline styles for height
          }}
        ></div>
      </div>
    </div>
  );
};

export default Spinner;
