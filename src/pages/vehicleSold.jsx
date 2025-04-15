export default function VehicleSold() {
  const [vehicles, setVehicles] = useState(
    JSON.parse(localStorage.getItem("sold")) || []
  );
  return (
    <div className="list-vehicles">
      <h1>List of Vehicles</h1>

      <table>
        <thead>
          <tr>
            <th>Owner Name</th>
            <th>Age</th>
            <th>Contact</th>
            <th>vehicle</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle, index) => (
            <tr key={index}>
              <td>{vehicles.ownerName}</td>
              <td>{vehicles.age}</td>
              <td>{vehicle.contact}</td>
              <td>{vehicle.vehicle}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
