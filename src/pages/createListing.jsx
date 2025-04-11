import { useState } from "react";
import { useNavigate } from "react-router";

export default function CreateListing() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const listingData = {
      name,
      model,
      color,
      brand,
      price,
    };

    const storedVehicles = localStorage.getItem("vehicles");
    let vehicles = [];

    if (storedVehicles) {
      vehicles = JSON.parse(storedVehicles);
      if (!Array.isArray(vehicles)) {
        vehicles = [];
      }
    }

    vehicles.push(listingData);
    localStorage.setItem("vehicles", JSON.stringify(vehicles));
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <h1>Create a Listing</h1>

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="model">Model:</label>
        <input
          type="text"
          id="model"
          onChange={(e) => setModel(e.target.value)}
          required
        />

        <label htmlFor="color">Color:</label>
        <input
          type="text"
          id="color"
          onChange={(e) => setColor(e.target.value)}
          required
        />

        <label htmlFor="brand">Brand:</label>
        <input
          type="text"
          id="brand"
          onChange={(e) => setBrand(e.target.value)}
          required
        />

        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <button type="submit">Create Listing</button>
      </form>
    </div>
  );
}
