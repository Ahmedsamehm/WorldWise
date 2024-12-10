import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

export default function Layout() {
  return (
    //   navbar
    <>
      <NavBar />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <div className="container mx-auto max-w-full w-full">
            <Outlet />
          </div>
        </main>
      </div>
    </>

    // footer
  );
}
