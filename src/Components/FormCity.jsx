import React, { useContext, useEffect, useState } from "react";
import ButtonBack from "./ButtonBack";
import useUrlPosition from "./Hooks/useUrlPosition";
import axios from "axios";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { useFetchingCities } from "./Hooks/useFetchingCities";
import { AppContext } from "../Contexts/ContextProvider";
const MapUrl = "https://api.bigdatacloud.net/data/reverse-geocode-client";
export default function FormCity() {
  const [searchParams, setSearchParams] = useSearchParams(); // Correctly access setSearchParams
  const [lat, lng] = useUrlPosition(searchParams);
  const [cityName, setCityName] = useState("");
  const [countryName, setCountryName] = useState(""); // Consistent naming
  const [date, setDate] = useState(""); // Add state for date
  const [notes, setNotes] = useState("");
  const navigate = useNavigate();
  const { AddNewCity } = useContext(AppContext);
  if (!lat && !lat) {
    navigate("/AppLayOut/");
  }

  useEffect(() => {
    const fetchDetails = async () => {
      // Make FetchDetails an async function inside the useEffect
      try {
        const { data } = await axios.get(
          `${MapUrl}?latitude=${lat}&longitude=${lng}&localityLanguage=en`
        );
        setCityName(data?.city || data?.locality || ""); // Use locality if city is not available
        setCountryName(data?.countryName || "");
      } catch (error) {
        console.error("Error fetching details:", error);
      }
    };
    fetchDetails();
  }, [lat, lng]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!cityName || !date) return;

    const newCity = {
      name: cityName,
      country: countryName,
      date,
      position: {
        lat,
        lng,
      },
      notes,
    };

    AddNewCity(newCity);
    navigate("/AppLayOut/City");
  }

  return (
    <>
      <form className="max-w-lg mx-auto " onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-white dark:text-white">
            CityName
          </label>
          <input
            type="text"
            value={cityName}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-white dark:text-white">
            When did you go to this city?
          </label>
          <input
            type="text"
            value={date} // Bind the input value to the date state
            onChange={(e) => setDate(e.target.value)} // Update state on change
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-white dark:text-white">
            Note about your Trip to {cityName}
          </label>
          <input
            value={notes}
            onChange={(e) => {
              setNotes(e.target.value);
            }}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <div className="flex justify-between">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add
          </button>
          <button
            onClick={() => {
              setSearchParams({});
            }}
            className="py-2 px-4 bg-gray-800 hover:bg-gray-700 transition-colors duration-300 ease-in-out rounded-md cursor-pointer flex justify-between text-white"
          >
            Back
          </button>
        </div>
      </form>
    </>
  );
}
