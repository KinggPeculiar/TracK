import React from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";


export default function SignUp() {
    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* LEFT SIDE */}
            <div className="w-full md:w-2/3 flex flex-col justify-center items-center bg-white px-6 py-10">
                <div className="w-full max-w-3xl">
                    {/* Logo + Heading */}
                    <div>
                        <Logo />
                        <p className="logo_text">
                            Create an account for your business
                        </p>
                    </div>

                    {/* Form */}
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* First Name */}
                        <div>
                            <label className="form_label">
                                <span className="text-red-600">*</span> First Name
                            </label>
                            <input
                              type="text"
                              placeholder="First Name"
                              className="form_input"
                              required
                            />
                        </div>

                        {/* Last Name */}
                        <div>
                            <label className="form_label">
                                <span className="text-red-600">*</span> Last Name
                            </label>
                            <input
                              type="text"
                              placeholder="Last Name"
                              className="form_input"
                              required
                            />
                        </div>



                        {/* Email Field */}
                        <div>
                            <label className="form_label">
                                <span className="text-red-600">*</span> Email
                            </label>
                            <input
                              type="text"
                              placeholder="Email"
                              className="form_input"
                              required
                            />
                        </div>

                        {/* Phone Number */}
                        <div>
                            <label className="form_label">
                                <span className="text-red-600">*</span> Phone Number
                            </label>
                            <input
                                type="number"
                            />
                        </div>                        

                        {/* Password Field */}
                        <div>
                            <label className="form_label">
                                <span className="text-red-600">*</span> First Name
                            </label>
                            <input/>
                        </div>




                    </form>

                    {/* Terms and Privacy */}
                    <div>

                    </div>

                    {/* Create Account Button */}
                    <button></button>

                    {/* Sign In Link */}
                    <div></div>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-full md:w-1/3 bg-[#25b764] hidden md:block"></div>
        </div>
    )
}