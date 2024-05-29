import React from "react";

const Container = ({ className, ...props }) => {
  return <div className={`px-1 sm:px-8 py-1 sm:py-4 ${className}`} {...props} />;
};

export default Container;
