import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useFetchingCities } from "../Components/Hooks/useFetchingCities";
import { useCityDetailsHook } from "../Components/Hooks/useCityDetails";

// ... existing code ...

// ... existing code ...
const BaseUrl = import.meta.env.VITE_ApiUrl;

// First, create a context and export it to be used in other components.
export const AppContext = createContext();

// Create a provider component and export it to wrap your app, giving all components access to shared data.
export default function AppContextProvider({ children }) {
  // Define the shared state you want to manage, like 'counter' in this example.

  const { Cities, setCities, isLoading, setIsLoading, AddNewCity, DeleteCity } =
    useFetchingCities(BaseUrl);

  useEffect(() => {
    useFetchingCities;
  }, []);

  return (
    // Use ContextDataProvider.Provider to wrap children, passing shared data (counter and setCounter) via the 'value' prop.
    <AppContext.Provider
      value={{
        Cities,
        setCities,
        isLoading,
        setIsLoading,
        AddNewCity,
        DeleteCity,
        BaseUrl,
      }}
    >
      {/* Always include 'children' to ensure the wrapped components have access to the context. */}
      {children}
    </AppContext.Provider>
  );
}
