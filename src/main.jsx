import React, { Suspense, lazy } from "react";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import RootLayout from "./layouts/RootLayout";
import PlainLayout from "./layouts/PlainLayout";
import ErrorPage from "./pages/ErrorPage";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFoundPage from "./pages/NotFound";

// lazy-load pages
const Home = lazy(() => import("./App"));
const SignIn = lazy(() => import("./pages/SignInForm"));
const SignUp = lazy(() => import("./pages/SignUpForm"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const NotFound = lazy(() => import("./pages/NotFound"))

const router =createBrowserRouter([
  //Layout with Navbar and Footer
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> }, // renders at "/"
      { 
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
    ],
  },

  // Layout without Navbar and Footer
{
  element: <PlainLayout />,
  children: [
    { path: "signin", element: <SignIn /> }, // "/signin"
    { path: "signup", element: <SignUp /> }, // "/signup"    
  ]
},
  { path: "*", element: <NotFound /> },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);
