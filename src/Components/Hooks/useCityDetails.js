import axios from "axios";
import { useContext, useEffect, useState } from "react";

export function useCityDetailsHook(id, BaseUrl) {
  const [CityDetails, setCityDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  async function GetCityDetails() {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`${BaseUrl}/${id}`); // Use the url from the hook's arguments
      setCityDetails(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (id) {
      GetCityDetails();
    }
  }, [id]); // Include url in the dependency array

  return { CityDetails, isLoading };
}
