import React, { useState, useEffect } from "react";
import { Dialog } from "@reach/dialog";
import ModalUploadContent from "./ModalUploadContent";

async function getapi(url, setStationImages) {
  try {
    const response = await fetch(url, {
      method: "GET",
      // mode: "no-cors",
    });
    const data = await response.json();
    setStationImages(data);
  } catch (error) {
    console.log(error);
  }
}

function ModalContent({ station }) {
  const [stationImages, setStationImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const url = `https://mrt-map-repository-backend.herokuapp.com/images/${station.STN_NO}`;

  useEffect(() => {
    getapi(url, setStationImages);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ overflow: "scroll", display: "flex" }}>
      <div
        style={{ display: "flex", flexDirection: "column", marginRight: 20 }}
      >
        <h1>{station.STN_NAME}</h1>
        <h3 style={{ marginTop: -15 }}>{station.STN_NO}</h3>
        <button onClick={() => setShowModal(true)}>Upload an image</button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
        {stationImages.map((stationImage) => {
          // console.log(stationImages);
          const imageSource = `https://mrt-map-repository-backend.herokuapp.com/${stationImage.image}`;
          return (
            <img
              key={stationImage.name}
              src={imageSource}
              alt={stationImage.name}
              crossOrigin="anonymous"
              height="200"
              width="auto"
            />
          );
        })}
      </div>

      {/* Modal */}
      <Dialog
        isOpen={showModal}
        onDismiss={() => {
          setShowModal(false);
        }}
        aria-label="Upload an image"
        style={{ width: "30%" }}
      >
        <button
          className="close-button"
          onClick={() => {
            setShowModal(false);
          }}
        >
          <span aria-hidden>×</span>
        </button>
        <ModalUploadContent station={station} />
      </Dialog>
    </div>
  );
}

export default ModalContent;
