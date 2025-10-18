import React, { useState } from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { isValidPhoneNumber } from "libphonenumber-js";

const PhoneNumberField = ({ value, onChange, onValidChange }) => {
  const [isValid, setIsValid] = useState(true);

  const handleChange = (phone, country) => {
    const valid = isValidPhoneNumber("+" + phone);
    setIsValid(valid);
    onChange(phone);
    onValidChange(valid);
  };

  return (
    <div className="flex flex-col space-y-1">
        <label className="form_label">
            Phone Number
        </label>
        <PhoneInput
          country={"ng"} // Default country (Nigeria)
          value={value}
          onChange={handleChange}
          inputClass={`!w-full !h-10 !border-none !bg-gray-100 !px-14 !py-3 !rounded-lg !outline-none !text-gray-800 !focus:ring-2 !focus:ring-[#25B764] ${
            isValid ? "" : "!border !border-red-500"
          }`}
          buttonClass="!absolute !left-4 !top-1/2 !-translate-y-1/2 !bg-transparent !border-none !outline-none"
          dropdownClass="!bg-white !border !border-gray-200 !rounded-lg !shadow-md !text-gray-700 !max-h-60 !overflow-y-auto"
        />
        {!isValid && (
            <span className="text-red-500 text-xs">Invalid phone number</span>
        )}
    </div>
  );
};

export default PhoneNumberField;
