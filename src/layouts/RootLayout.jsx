import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#031335] w-full">
      <Navbar />
      <main className="flex-1 container mx-auto max-w-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
