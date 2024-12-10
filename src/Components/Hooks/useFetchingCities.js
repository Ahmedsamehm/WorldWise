import axios from "axios";
import { useEffect, useReducer, useState } from "react";
// mother that hold all the children and export mother to context so we can use it inside it
export function useFetchingCities(BaseUrl) {
  // Function to fetch city data from the API
  const initializer = {
    Cities: [],

    isLoading: false,
  };
  //for testing useReducer hook
  function reducer(state, action) {
    switch (action.type) {
      case "city/Loading":
        return { ...state, isLoading: action.isLoading };
      case "city/saveCity":
        return { ...state, Cities: action.Cities };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initializer);

  async function GetApiData() {
    try {
      dispatch({ type: "city/Loading", isLoading: true });
      const { data } = await axios.get(BaseUrl);
      dispatch({ type: "city/saveCity", Cities: data });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: "city/Loading", isLoading: false });
    }
  }
  //

  async function AddNewCity(newCity) {
    const { data } = await axios.post(BaseUrl, newCity);
    dispatch({ type: "city/saveCity", Cities: [...state.Cities, data] });
  }
  async function DeleteCity(id) {
    await axios.delete(`${BaseUrl}/${id}`);
    dispatch({
      type: "city/saveCity",
      Cities: state.Cities.filter((city) => city.id !== id),
    });
  }

  // useEffect hook to trigger data fetching when the component mounts or when the BaseUrl changes
  useEffect(() => {
    GetApiData();
  }, [BaseUrl]);
  // Return the data and functions to allow sharing the state with the rest of the app
  return {
    Cities: state.Cities,
    isLoading: state.isLoading,

    AddNewCity,
    DeleteCity,
  };
}
