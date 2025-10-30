import React, { Suspense, lazy } from "react";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import PublicLayout from "./layouts/PublicLayout";
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import ErrorPage from "./pages/ErrorPage";
import NotFoundPage from "./pages/NotFound";

// lazy-load pages
const Home = lazy(() => import("./App"));
const SignIn = lazy(() => import("./pages/SignInForm"));
const SignUp = lazy(() => import("./pages/SignUpForm"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const NotFound = lazy(() => import("./pages/NotFound"))

const router = createBrowserRouter([
  //Layout with PublicNavbar and Footer
  {
    path: "/",
    element: <PublicLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> }, // renders at "/"
    ],
  },

  // Layout without PublicNavbar and Footer
  {
    element: <AuthLayout />,
    children: [
      { path: "signin", element: <SignIn /> }, // "/signin"
      { path: "signup", element: <SignUp /> }, // "/signup"   
    ]
  },

  // Layout with DashboardNavbar and Footer
  { 
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Dashboard /> },
    ]
  },  
  { 
    path: "*", element: <NotFound /> 
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);
