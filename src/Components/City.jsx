import React, { useContext } from "react";
import CityList from "./CityList";
import { AppContext } from "../Contexts/ContextProvider";

import Loading from "./Loading";

export default function City() {
  const { Cities, isLoading } = useContext(AppContext);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 p-1">
          {Cities?.map((city, index) => (
            <CityList key={index} city={city} />
          ))}
        </div>
      )}
    </div>
  );
}
