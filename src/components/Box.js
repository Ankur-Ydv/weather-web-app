import React from "react";

const Box = ({ title, value }) => {
  return (
    <>
      <div className="w-4/5 flex justify-between items-center">
        <span className="font-semibold">{title}</span>
        <span className="w-1/5">{value ? value : "-"}</span>
      </div>
    </>
  );
};

export default Box;
