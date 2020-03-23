import React from "react";

import "./custom-button.style.scss";

const CustomButton = ({ children, ...props }) => {
  return (
    <div className="custom-button" {...props}>
      <button>{children}</button>
    </div>
  );
};

export default CustomButton;