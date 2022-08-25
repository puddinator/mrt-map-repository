import React from "react";
import { MarkerF } from "@react-google-maps/api";

import blue from "./resources/stationIcons/blue.svg";
import brown from "./resources/stationIcons/brown.svg";
import green from "./resources/stationIcons/green.svg";
import purple from "./resources/stationIcons/purple.svg";
import red from "./resources/stationIcons/red.svg";
import yellow from "./resources/stationIcons/yellow.svg";
import grey from "./resources/stationIcons/grey.svg";

function StationMarkers({ mrtStation, setShowModal, setSelectedStation }) {
  if (mrtStation.COLOR === "blue") {
    return (
      <MarkerF
        // label={mrtStation.STN_NAME}
        key={mrtStation.STN_NO}
        position={{
          lat: parseFloat(mrtStation.Latitude),
          lng: parseFloat(mrtStation.Longitude),
        }}
        onClick={() => {
          setShowModal(true);
          setSelectedStation(mrtStation);
        }}
        icon={{
          url: blue,
          scaledSize: new window.google.maps.Size(12, 12),
        }}
      />
    );
  } else if (mrtStation.COLOR === "brown") {
    return (
      <MarkerF
        key={mrtStation.STN_NO}
        position={{
          lat: parseFloat(mrtStation.Latitude),
          lng: parseFloat(mrtStation.Longitude),
        }}
        onClick={() => {
          setShowModal(true);
          setSelectedStation(mrtStation);
        }}
        icon={{
          url: brown,
          scaledSize: {
            width: 12,
            height: 12,
          },
        }}
      />
    );
  } else if (mrtStation.COLOR === "green") {
    return (
      <MarkerF
        key={mrtStation.STN_NO}
        position={{
          lat: parseFloat(mrtStation.Latitude),
          lng: parseFloat(mrtStation.Longitude),
        }}
        onClick={() => {
          setShowModal(true);
          setSelectedStation(mrtStation);
        }}
        icon={{
          url: green,
          scaledSize: {
            width: 12,
            height: 12,
          },
        }}
      />
    );
  } else if (mrtStation.COLOR === "purple") {
    return (
      <MarkerF
        key={mrtStation.STN_NO}
        position={{
          lat: parseFloat(mrtStation.Latitude),
          lng: parseFloat(mrtStation.Longitude),
        }}
        onClick={() => {
          setShowModal(true);
          setSelectedStation(mrtStation);
        }}
        icon={{
          url: purple,
          scaledSize: {
            width: 12,
            height: 12,
          },
        }}
      />
    );
  } else if (mrtStation.COLOR === "red") {
    return (
      <MarkerF
        key={mrtStation.STN_NO}
        position={{
          lat: parseFloat(mrtStation.Latitude),
          lng: parseFloat(mrtStation.Longitude),
        }}
        onClick={() => {
          setShowModal(true);
          setSelectedStation(mrtStation);
        }}
        icon={{
          url: red,
          scaledSize: {
            width: 12,
            height: 12,
          },
        }}
      />
    );
  } else if (mrtStation.COLOR === "yellow") {
    return (
      <MarkerF
        key={mrtStation.STN_NO}
        position={{
          lat: parseFloat(mrtStation.Latitude),
          lng: parseFloat(mrtStation.Longitude),
        }}
        onClick={() => {
          setShowModal(true);
          setSelectedStation(mrtStation);
        }}
        icon={{
          url: yellow,
          scaledSize: {
            width: 12,
            height: 12,
          },
        }}
      />
    );
  } else if (mrtStation.COLOR === "grey") {
    return (
      <MarkerF
        key={mrtStation.STN_NO}
        position={{
          lat: parseFloat(mrtStation.Latitude),
          lng: parseFloat(mrtStation.Longitude),
        }}
        onClick={() => {
          setShowModal(true);
          setSelectedStation(mrtStation);
        }}
        icon={{
          url: grey,
          scaledSize: {
            width: 9,
            height: 9,
          },
        }}
      />
    );
  }
}

export default StationMarkers;
