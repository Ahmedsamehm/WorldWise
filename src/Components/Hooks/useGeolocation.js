import React, { useEffect, useState } from "react";
import { useMap } from "react-leaflet";

export function useGeolocation(defaultPosition = null) {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState(defaultPosition);
  const [error, setError] = useState(null);

  // ... existing code ...
  function getPosition() {
    if (!navigator.geolocation) {
      setError("Your browser does not support geolocation.");
      console.error("Geolocation not supported.");
      return;
    }

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const newPosition = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        };
        console.log("New Position:", newPosition);
        setPosition(newPosition);
        setError(null);
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        console.log(error);
        setIsLoading(false);
      }
    );
  }
  // ... existing code ...

  function FlyToLocation({ position }) {
    const map = useMap();
    useEffect(() => {
      if (position) {
        map.flyTo(position, 13); // Fly to new position with zoom level 13
      }
    }, [position, map]);
    return null;
  }

  return { isLoading, position, error, getPosition, FlyToLocation };
}
