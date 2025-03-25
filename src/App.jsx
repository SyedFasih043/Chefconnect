
import { Routes, Route } from "react-router-dom";
import React, {Suspense, useState} from "react";

import Sidebar from "../src/Components/Sidebar/Sidebar"
import MobileSidebar from "./Components/Sidebar/MobileSidebar"
export default function App()
{
  const Login = React.lazy(() => import('./Pages/Authentication/Login'));
  const Signup = React.lazy(() => import("./Pages/Authentication/Signup"));
  const Home = React.lazy(() => import("./Pages/Home/Home"));
  const Profile = React.lazy(() => import("./Pages/Profile/Profile"));

  const pages = [
    { name: "Login", path: "/login", element: <Login /> },
    { name: "Register", path: "/signup", element: <Signup /> },
    { name: "Home", path: "/", element: <Home /> },
    { name: "Home", path: "/profile", element: <Profile /> },


  ];

  return (
      <div className="h-screen w-full">
            <div>
                    <Suspense fallback={<div>Loading...</div>}>
                       <div className="flex flex-row w-screen h-screen">
                            {/* Desktop Sidebar */}
                            <div className="flex-col w-96 hidden lg:flex">
                                <Sidebar />
                            </div>
                        
                            {/* Main Content */}
                            <div className="flex flex-col w-full items-center overflow-y-scroll">
                            <Routes>
                        
                            {pages &&
                                pages.map((page, key) => (
                                    <Route key={key} path={page.path} element={page.element}></Route>
                                ))}
                            </Routes>
                            </div>
                            
                        
                            <div className="lg:hidden flex">
                                <MobileSidebar />
                            </div>        
                        </div>   
                   
                    </Suspense>
                </div>
      </div>

  )
}
