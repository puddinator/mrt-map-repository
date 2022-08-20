import React, { useState } from "react";
import "./App.css";
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  // InfoWindows,
} from "@react-google-maps/api";
// import { formatRelative } from "date-fns";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";

import mrtData from "./resources/mrtsg.json";
import Header from "./Header";
import StationMarkers from "./StationMarkers";
import ModalContent from "./ModalContent";
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

function App() {
  const [userPositionLatitude, setUserPositionLatitude] = useState(0);
  const [userPositionLongitude, setUserPositionLongitude] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedStation, setSelectedStation] = useState(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (loadError) return "Error loading maps";
  if (isLoaded) {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        setUserPositionLatitude(position.coords.latitude);
        setUserPositionLongitude(position.coords.longitude);
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

        {mrtData.map((mrtStation) => (
          <StationMarkers
            mrtStation={mrtStation}
            key={mrtStation.STN_NO}
            setShowModal={setShowModal}
            setSelectedStation={setSelectedStation}
          />
        ))}
      </GoogleMap>

      {/* Modal */}
      <Dialog
        isOpen={showModal}
        onDismiss={() => {
          setShowModal(false);
        }}
        aria-label="Info about MRT Station"
      >
        <button
          className="close-button"
          onClick={() => {
            setShowModal(false);
          }}
        >
          <span aria-hidden>×</span>
        </button>
        <ModalContent station={selectedStation} />
      </Dialog>
    </div>
  );
}

export default App;
