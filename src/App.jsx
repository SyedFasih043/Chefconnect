
import { Routes, Route } from "react-router-dom";
import React, {Suspense, useState} from "react";

export default function App()
{
  const Login = React.lazy(() => import('./Pages/Authentication/Login'));
  const Signup = React.lazy(() => import("./Pages/Authentication/Signup"));
  const pages = [
    { name: "Login", path: "/login", element: <Login /> },
    { name: "Register", path: "/signup", element: <Signup /> },

  ];

  return (
      <div className="h-screen w-full">
            <div>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            {pages &&
                                pages.map((page, key) => (
                                    <Route key={key} path={page.path} element={page.element}></Route>
                                ))}
                        </Routes>
                    </Suspense>
                </div>
      </div>

  )
}
