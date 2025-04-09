export default function ListVehicles() {
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
          </tr>
        </thead>
        
        <tbody>
          <tr>
            <td>tesla</td>
            <td>Model S </td>
            <td>Red</td>
            <td>Tesla</td>
            <td>$80,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
