import { useState } from "react";

export default function ListVehicles() {
  const [vehicles, setVehicles] = useState(
    JSON.parse(localStorage.getItem("vehicles")) || []
  );

  return (
    <div className="list-vehicles">
      <h1>List of Vehicles</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>model</th>
            <th>color</th>
            <th>brand</th>
            <th>price</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {vehicles.map((vehicle, index) => (
            <tr key={index}>
              <td>{vehicle.name}</td>
              <td>{vehicle.model} </td>
              <td>{vehicle.color}</td>
              <td>{vehicle.brand}</td>
              <td>{vehicle.price}</td>
              <td>
                <button>sell</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
