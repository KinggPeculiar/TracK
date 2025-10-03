import { StrictMode } from 'react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App';
import SignIn from './pages/SignInForm';
import SignUp from './pages/SignUpForm';
import Dashboard from './pages/Dashboard';
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Landing Page
  },
  {
    path: "/signin",
    element: <SignIn />, // SignIn Page
  },
    {
    path: "/signup",
    element: <SignUp />, // SignUp Page
  },
    {
    path: "/dashboard",
    element: <Dashboard />, // User Dashboard
  },
]);


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
