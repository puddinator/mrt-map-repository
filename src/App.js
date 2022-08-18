import React, { useState } from "react";
import "./App.css";
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  InfoWindows,
} from "@react-google-maps/api";
import { formatRelative } from "date-fns";

import Header from "./Header";
import mapStyles from "./mapStyles";
import userIcon from "./resources/user.png";

const mapContainerStyle = {
  width: "100vw",
  height: "93vh",
};
const center = {
  lat: 1.345,
  lng: 103.81,
};
const options = {
  styles: mapStyles,
};

const onLoad = (marker) => {
  console.log("marker: ", marker);
};

function App() {
  const [userPositionLatitude, setUserPositionLatitude] = useState(0);
  const [userPositionLongitude, setUserPositionLongitude] = useState(0);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (loadError) return "Error loading maps";
  if (isLoaded) {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        setUserPositionLatitude(position.coords.latitude);
        setUserPositionLongitude(position.coords.longitude);
        console.log("Latitude is :", userPositionLatitude);
        console.log("Longitude is :", userPositionLongitude);
        console.log("Accuracy is:", position.coords.accuracy);
      });
    }
  } else return "Loading Maps";

  return (
    <div>
      <Header />
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
        options={options}
      >
        <MarkerF
          onLoad={onLoad}
          key={"userMarker"}
          position={{
            lat: userPositionLatitude,
            lng: userPositionLongitude,
          }}
          icon={{
            url: userIcon,
            scaledSize: {
              width: 40,
              height: 40,
            },
          }}
        />
      </GoogleMap>
    </div>
  );
}

export default App;
