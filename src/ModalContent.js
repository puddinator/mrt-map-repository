function ModalContent({ station }) {
  return (
    <div>
      <h1>{station.STN_NAME}</h1>
      <p>{station.STN_NO}</p>
    </div>
  );
}

export default ModalContent;
