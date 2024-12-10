import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import FormCity from "./FormCity";

export default function SideBar() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col  ">
      <div className="sticky top-0 z-10 bg-gray-900 p-4 md:px-8 lg:px-10 shadow-md">
        {/* Adjusted padding for larger screens */}
        <h1 className="text-2xl font-bold text-center mb-4">WorldWise</h1>
      </div>
      <main className="px-4 md:px-6 lg:px-8 flex-grow pb-4">
        {/* Reduced padding for medium and large screens */}
        <nav>
          <ul className="bg-gray-700 rounded-lg divide-y divide-gray-600">
            <li>
              <NavLink
                to="City"
                className="hover:bg-gray-600 px-4 py-2 rounded-md transition-all duration-300 ease-in-out block text-lg text-center w-full"
              >
                City
              </NavLink>
            </li>
            <li>
              <NavLink
                to="Countries"
                className="hover:bg-gray-600 px-4 py-2 rounded-md transition-all duration-300 ease-in-out block text-lg text-center w-full"
              >
                Countries
              </NavLink>
            </li>
          </ul>
        </nav>
        <section className="mt-8 text-center">
          <span className="capitalize text-xl font-bold ">
            hello user please select a country
          </span>
        </section>
        <div className="mt-5">
          <Outlet />
        </div>

      </main>
    </div>
  );
}
