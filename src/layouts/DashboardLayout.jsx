import React from "react";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "../components/Navbar/DashboardNavbar";
import Footer from "../components/Footer";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white w-full">
      <DashboardNavbar />
      <main className="flex-1 container mx-auto max-w-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
