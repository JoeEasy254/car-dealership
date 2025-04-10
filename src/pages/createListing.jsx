import { useState } from "react";
import { useNavigate } from "react-router";

export default function createListing() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");

  const onSubmitHandler = (event) => {
    // prevent the default form submission
    event.preventDefault();
    const listingData = {
      name,
      model,
      color,
      brand,
      price,
    };

    const storage = JSON.parse(localStorage.getItem("vehicles"));

    if (Array.isArray(storage)) {
      storage.push(listingData); // push the new vehicle to the vehicles array
      localStorage.setItem("vehicles", JSON.stringify(storage)); // set the vehicles to local storage
      navigate("/");
    } else {
      const vehicles = [];
      vehicles.push(listingData); // push the new vehicle to the vehicles array
      localStorage.setItem("vehicles", JSON.stringify(vehicles)); // set the vehicles to local storage
      navigate("/");
    }
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <h1>Create a Listing</h1>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="model">Model:</label>
        <input
          type="text"
          id="model"
          name="model"
          onChange={(e) => setModel(e.target.value)}
          required
        />

        <label htmlFor="color">Color:</label>
        <input
          type="text"
          onChange={(e) => setColor(e.target.value)}
          id="color"
          name="color"
          required
        />

        <label htmlFor="brand">Brand:</label>
        <input
          type="text"
          id="brand"
          name="brand"
          onChange={(e) => setBrand(e.target.value)}
          required
        />

        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <button type="submit">Create Listing</button>
      </form>
    </div>
  );
}
