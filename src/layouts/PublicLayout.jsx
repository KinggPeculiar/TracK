import React from "react";
import { Outlet } from "react-router-dom";
import PublicNavbar from "../components/PublicNavbar";
import Footer from "../components/Footer";

export default function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white w-full">
      <PublicNavbar />
      <main className="flex-1 container mx-auto max-w-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
