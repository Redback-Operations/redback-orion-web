// App.jsx
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar } from "./components/Navbar"; 
import HomePage from "./components/HomePage";
import { MyData } from "./components/MyData";
import { SignUpPage } from "./components/SignUpPage"; // Updated import statement

const router = createBrowserRouter([
  {
    path: "/*",
    element: (
      <>
      
        <HomePage />
      </>
    ),
  },
  {
    path: "/home-page",
    element: (
      <>
       
        <HomePage />
      </>
    ),
  },
  {
    path: "/my-data",
    element: (
      <>
        
        <MyData />
      </>
    ),
  },
  {
    path: "/sign-up-page",
    element: (
      <>
       
        <SignUpPage />
      </>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
