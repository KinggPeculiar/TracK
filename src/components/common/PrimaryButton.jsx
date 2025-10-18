import React from "react";

const PrimaryButton = ({ label, type = "button", onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full h-10 bg-[#82e4c9] text-white font-semibold rounded-lg hover:bg-[#25b764] transition duration-300"
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
