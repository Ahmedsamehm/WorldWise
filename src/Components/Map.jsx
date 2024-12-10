import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../Contexts/ContextProvider";
import { useGeolocation } from "./Hooks/useGeolocation";
import Loading from "./Loading";
import FormCity from "./FormCity";
import useUrlPosition from "./Hooks/useUrlPosition";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Map() {
  const { Cities } = useContext(AppContext);
  const [mapPosition, setMapPosition] = useState([50, 10]);
  const [searchParams, setSearchParams] = useSearchParams(); // Correctly access setSearchParams
  const navigate = useNavigate();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const bounds = [
    [90, -180],
    [-90, 180],
  ];
  const { isLoading, position, error, getPosition } = useGeolocation();

  // Use useEffect to update mapPosition when lat/lng changes in URL
  useEffect(() => {
    if (lat && lng) {
      setMapPosition([parseFloat(lat), parseFloat(lng)]);
    }
  }, [searchParams]);

  // Update map position when geolocation changes
  useEffect(() => {
    if (position) {
      setMapPosition([position.lat, position.lng]);
    }
  }, [position]);

  const HandleMapClick = () => {
    const map = useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        setSearchParams({ lat: lat, lng: lng });

        navigate(`FormCity/?lat=${lat}&lng=${lng}`);

        // Zoom in on click
        map.flyTo([lat, lng], 12); // Adjust zoom level (12 in this example) as needed
      },
    });
    return null;
  };

  return (
    <>
      <MapContainer
        center={mapPosition}
        zoom={5}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
        minZoom={3}
        maxZoom={20}
        maxBounds={bounds}
      >
        <TileLayer
          attribution='© <a href="https://www.maptiler.com/copyright/">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/topo-v2/256/{z}/{x}/{y}.png?key=8Ue8o67cfZHCPrAbRkUk"
          maxZoom={20}
          minZoom={1}
        />
        <HandleMapClick />

        {Cities?.map((city) =>
          city?.position?.lat && city?.position?.lng ? (
            <Marker
              key={city.id}
              position={[city.position.lat, city.position.lng]}
            >
              <Popup>
                {city.name}, {city.country}
              </Popup>
            </Marker>
          ) : null
        )}

        {position && ( // Show user marker based on geolocation position
          <Marker position={[position.lat, position.lng]}>
            <Popup>Your Location</Popup>
          </Marker>
        )}
      </MapContainer>

      <div className="flex justify-center">
        <button
          type="button"
          onClick={getPosition}
          className="capitalize bg-gray-800 hover:bg-gray-700 transition-colors duration-300 ease-in-out cursor-pointer absolute left-1/2 bottom-20 p-5 px-10 rounded-lg text-center text-xl z-[1000]"
        >
          {isLoading ? <Loading /> : "use my location"}
        </button>
      </div>
      {error && <p className="absolute bottom-10 text-red-500">{error}</p>}
    </>
  );
}
