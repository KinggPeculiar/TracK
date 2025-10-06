import React, { Suspense, lazy } from "react";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

// import App from './App';
// import SignIn from './pages/SignInForm';
// import SignUp from './pages/SignUpForm';
// import Dashboard from './pages/Dashboard';

import RootLayout from "./layouts/RootLayout";
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
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> }, // renders at "/"
      { path: "signin", element: <SignIn /> }, // "/signin"
      { path: "signup", element: <SignUp /> }, // "/signup"
      { 
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);
