import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/common/Logo";
import PrimaryButton from "../components/common/PrimaryButton";
import PhoneNumberField from "../components/PhoneInput";
import useSignupForm from "../hooks/useSignupForm";

export default function SignUp() {
    const [phone, setPhone] = useState("");
    const [isValidPhone, setIsValidPhone] = useState(false);
    const navigate = useNavigate();

    const {
        formData,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = useSignupForm({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const onSubmit = (data) => {
        if (!isValidPhone) {
            alert("Please enter a valid phone number");
            return;
        }
        const userData = { ...data, phone };
        localStorage.setItem("track_user", JSON.stringify(userData));
        alert("Account created successfully!");
        navigate("/signin");
    };


    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* LEFT SIDE */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white px-6 py-10">
                <div className="w-full max-w-2xl">
                    {/* Logo + Heading */}
                    <div>
                        <Logo />
                        <p className="logo_text">
                            Create an account for your business
                        </p>
                    </div>

                    {/* Form */}
                    <form 
                      onSubmit={(e) => handleSubmit (e, onSubmit)}
                      className="max-w-4xl mx-auto p-6 bg-white rounded-2xl"
                    >
                        <div className="">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                {/* First Name Field */}
                                <div className="flex flex-col">
                                    <label htmlFor="firstName" className="form_label">
                                        First Name
                                    </label>
                                    <input
                                      type="text"
                                      id="firstName"
                                      name="firstName"
                                      placeholder="First Name"
                                      className="form_input"
                                      required
                                    />
                                </div>

                                {/* Last Name Field */}
                                <div className="flex flex-col">
                                    <label htmlFor="LastName" className="form_label">
                                        Last Name
                                    </label>
                                    <input
                                      type="text"
                                      id="lastName"
                                     name="lastName"
                                      placeholder="Last Name"
                                      className="form_input"
                                      required
                                    />
                                    {/* <p className="mt-1 text-sm text-red-500">Please enter the last name</p> */}
                                </div>

                                {/* Email Field */}
                                <div className="flex flex-col">
                                    <label htmlFor="Email" className="form_label">
                                        Email
                                    </label>
                                    <input
                                      type="email"
                                      id="email"
                                      name="email"
                                      placeholder="Email"
                                      className="form_input"
                                    />
                                </div>
                                
                                {/* Phone Number Field */}
                                <div className="flex flex-col">
                                    <PhoneNumberField
                                      value={phone}
                                      onChange={setPhone}
                                      onValidChange={setIsValidPhone}
                                    />
                                </div>

                                {/* Password Field */}
                                <div className="flex flex-col">
                                    <label htmlFor="password" className="form_label">
                                        Set Password
                                    </label>
                                    <input
                                      type="password"
                                      id="password"
                                      name="password"
                                      placeholder="Enter Password"
                                      className="form_input"
                                    />
                                </div>

                                {/* Confirm Password Field */}
                                <div className="flex flex-col">
                                    <label htmlFor="password" className="form_label">
                                        Confirm Password
                                    </label>
                                    <input
                                      type="password"
                                      id="password"
                                      name="password"
                                      placeholder="Enter Password"
                                      className="form_input"
                                    />
                                </div>                            
                            </div>                            
                        </div>
                        
                        {/* Privacy Policy Field */}
                        <div className="max-w-3xl mx-auto m-5">
                            <div className="flex items-center justify-center space-x-3 before:content-['*'] before:text-red-500 before:mr-2">
                                {/* Checkbox */}
                                <input
                                  type="checkbox"
                                  id="agree"
                                  className="h-4 w-4 text-[#25b764] border-gray-300 rounded focus:ring-[#25b764]"
                                />

                                {/* Label and text */}
                                <label htmlFor="agree" className="text-sm text-gray-700 leading-6">
                                    I Confirm That I Have Read TracK&apos;s{" "}
                                    <a
                                      href="#"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="relative text-[#25b764] no-underline hover:text-[#25b764] transition-colors duration-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#25b764] before:transition-all before:duration-300 hover:before:w-full mx-1"
                                    >
                                        Privacy Policy
                                    </a>
                                    and{" "}
                                    <a
                                      href="#"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="relative text-[#25b764] no-underline hover:text-[#25b764] transition-colors duration-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#25b764] before:transition-all before:duration-300 hover:before:w-full mx-1"
                                    >
                                        Terms Of Use
                                    </a>
                                    . I Agree To The Use Of My Data In LineTherewith.
                                </label>
                            </div>
                        </div>

                        {/* Submit SignUp Form Button */}
                        <div>
                            <PrimaryButton
                              label="Sign Up"
                              type="submit"
                            />
                        </div>
                    </form>

                    {/* Sign In Link */}
                    <div className="flex justify-center items-center pl-10 pr-10">
                        <p className="text-center text-sm text-gray-600 mr-auto">
                            Already have an account?{" "}
                        </p>
                        <Link to="/signin" className="relative text-[#82e4c9] no-underline hover:text-[#25b764] transition-colors duration-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#25b764] before:transition-all before:duration-300 hover:before:w-full">
                            Sign in
                        </Link>                        
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-full md:w-1/2 bg-[#25b764] hidden md:block"></div>
        </div>
    )    
}
