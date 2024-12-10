import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Loading from "./Loading";
import ButtonBack from "./ButtonBack";
import { useCityDetailsHook } from "./Hooks/useCityDetails";
import { AppContext } from "../Contexts/ContextProvider";

export default function CityDetails() {
  const { id } = useParams();
  const { DeleteCity, BaseUrl } = useContext(AppContext);
  const { CityDetails, isLoading } = useCityDetailsHook(id, BaseUrl);

  const navigate = useNavigate();

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="bg-gray-800 hover:bg-gray-700 transition-colors duration-300 ease-in-out rounded-md cursor-pointer flex flex-col sm:flex-row justify-between p-4 text-white shadow-lg">
            {/* Flag Section */}
            <div className="flex items-center justify-center sm:justify-start mb-3 sm:mb-0">
              <span className="text-4xl sm:text-5xl">{CityDetails?.flag}</span>
            </div>

            <div className="flex-1 sm:pl-4 text-center sm:text-left">
              <h2 className="text-2xl font-bold mb-1">{CityDetails?.name}</h2>
              <p className="text-sm text-gray-400">
                Cities: {CityDetails?.Cities}
              </p>
              <p className="text-sm text-gray-400">
                Last Updated: {CityDetails?.date}
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="my-3">
              <ButtonBack />
            </div>
            <div className="my-3">
              <button
                onClick={() => {
                  DeleteCity(id);
                  navigate(-1);
                }}
                className="py-2 px-4 bg-gray-800 hover:bg-red-700 transition-colors duration-300 ease-in-out rounded-md cursor-pointer flex justify-between text-white"
              >
                Delete
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
