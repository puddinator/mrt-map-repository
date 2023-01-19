import axios from "axios";

function submitForm(station) {
  const url = "https://mrt-map-repository-backend.vercel.app/images";
  const form = document.getElementById("form");
  const payload = new FormData(form);
  payload.append("station", station.STN_NO);
  // console.log([...payload]);

  axios({
    method: "post",
    url,
    data: payload,
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then(function (response) {
      //handle success
      console.log(response);
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });
}

function ModalUploadContent({ station }) {
  // console.log(station);
  return (
    <div>
      <h1>Upload Image to Database</h1>
      <form
        style={{ display: "flex", flexDirection: "column", gap: 10 }}
        id="form"
      >
        <div>
          <label htmlFor="name">Helpful Image Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Image of Station Exits"
            style={{ boxSizing: "border-box", width: "100%" }}
          />
        </div>
        <div>
          <label htmlFor="imageDescription">Image Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Taken at Exit B"
            style={{ boxSizing: "border-box", width: "100%" }}
          />
        </div>
        <input type="file" name="image" />
        <input
          type="button"
          value="Submit"
          onClick={() => {
            submitForm(station);
          }}
        />
      </form>
    </div>
  );
}

export default ModalUploadContent;
