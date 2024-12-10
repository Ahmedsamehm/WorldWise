import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

export default function useUrlPosition() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const [showForm, setShowForm] = useState(false);
  return [lat, lng, setShowForm, searchParams, setSearchParams]; // Return lat, lng in the correct order
}
