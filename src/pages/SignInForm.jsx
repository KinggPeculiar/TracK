import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../components/common/Logo";
import PrimaryButton from "../components/common/PrimaryButton";

export default function SignIn() {
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [password, setPassword] = useState("");
  
  return (    
    <div className="min-h-screen flex flex-col md:flex-row">

        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white px-6 py-10">
            <div>
                {/* Logo */}
                <div className="w-full">
                    <Logo />
                    <p className="text-gray-600 font-medium mb-6 md:text-left">
                        Welcomes you back!   
                    </p>               
                </div>

                {/* Form */}
                <form className="w-full max-w-sm space-y-5">
                    {/* Email Input */}
                    <label className="form_label">Email</label>
                    <input
                        type="email"
                        placeholder="Email"
                        className="form_input"
                        required
                    />

                    {/* Password Input */}
                    <label className="form_label">Password</label>
                    <div className="relative">
                        <input
                        type="password"
                        placeholder="Password"
                        className="form_input"
                        onFocus={() => setPasswordFocused(true)}
                        onBlur={() => setPasswordFocused(false)}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        pattern="(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}"
                        title="Must contain at least 8 characters, one uppercase, one lowercase, and one number"
                        />

                        {/* Password Validation Tips */}
                        {passwordFocused && (
                        <div className="absolute mt-2 bg-white border border-gray-200 shadow-md rounded-lg p-3 text-sm text-gray-700 w-full">
                            <p className={`${password.length >= 8 ? "text-green-600" : "text-red-500"}`}>
                            • At least 8 characters
                            </p>
                            <p className={`${/[A-Z]/.test(password) ? "text-green-600" : "text-red-500"}`}>
                            • At least one uppercase letter
                            </p>
                            <p className={`${/[a-z]/.test(password) ? "text-green-600" : "text-red-500"}`}>
                            • At least one lowercase letter
                            </p>
                            <p className={`${/[0-9]/.test(password) ? "text-green-600" : "text-red-500"}`}>
                            • At least one number
                            </p>
                        </div>
                        )}
                    </div>

                    {/* Remember + Forgot */}
                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center space-x-2 text-gray-600">
                        <input
                            type="checkbox"
                            className="form-checkbox text-[#25B764] rounded focus:ring-[#25B764]"
                        />
                        <span>Remember me</span>
                        </label>
                        <a href="#" className="text-gray-700 hover:text-[#25B764]">
                        Forgot your Password?
                        </a>
                    </div>

                    {/* Sign In Button */}
                    <PrimaryButton label="Sign In" type="submit" />

                    {/* Signup Link */}
                    <div className="flex justify-center items-center pl-2 pr-2">
                        <p className="text-center text-sm text-gray-600 mr-auto">
                            Don’t have an account?{" "}
                        </p>

                        <div>
                            <Link to="/signup" className="relative text-[#82e4c9] no-underline hover:text-[#25b764] transition-colors duration-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#25b764] before:transition-all before:duration-300 hover:before:w-full">
                                Sign up
                            </Link>                        
                        </div>                        
                    </div>
                </form>                
            </div>            
        </div>
        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2 bg-[#25B764] hidden md:block"></div>
    </div>
  );
}
