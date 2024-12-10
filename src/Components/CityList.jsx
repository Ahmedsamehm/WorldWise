import React from "react";
import { Link } from "react-router-dom";

export default function CityList({ city, index }) {
  return (
    <Link
      to={`/AppLayOut/CityDetails/${city?.id}`}
    >
      <li
        key={index}
        className="py-2 px-4 bg-gray-800 hover:bg-gray-700 transition-colors duration-300 ease-in-out rounded-md cursor-pointer flex justify-between text-white"
      >
        <span> {city?.country}</span>
        <span> {city?.date}</span>
      </li>
    </Link>
  );
}
