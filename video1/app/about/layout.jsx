import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <div className="w-full text-xl flex flex-wrap  gap-5 bg-red-600">
        <h5>sale is live</h5>
        <h5>sale is live</h5>
        <h5>sale is live</h5>
        <h5>sale is live</h5>
        <h5>sale is live</h5>
        <h5>sale is live</h5>
        <h5>sale is live</h5>
        <h5>sale is live</h5>
        <h5>sale is live</h5>
        <h5>sale is live</h5>
        <h5>sale is live</h5>
        <h5>sale is live</h5>
        <h5>sale is live</h5>
        <h5>sale is live</h5>
        <h5>sale is live</h5>
        <h5>sale is live</h5>
      </div>
      {children}
    </div>
  );
};

export default layout;
