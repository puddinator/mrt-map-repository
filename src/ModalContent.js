async function getapi(url) {
  try {
    const response = await fetch(url, {
      method: "GET",
      mode: "no-cors",
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

function ModalContent({ station }) {
  const url = `https://mrt-map-repository-backend.herokuapp.com/images/${station.STN_NO}`;
  getapi(url);

  return (
    <div>
      <h1>{station.STN_NAME}</h1>
      <p>{station.STN_NO}</p>
    </div>
  );
}

export default ModalContent;
