export default function ListBuyers() {
  return (
    <div className="list-vehicles">
      <h1>List of Buyers</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>age</th>
            <th>nationality</th>
            <th>gender</th>
            <th>Bought</th>
            <th>vehicle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John doe</td>
            <td>22</td>
            <td>kenyan</td>
            <td>male</td>
            <td>2/4/2025</td>
            <td>
              <ul>
                <li>tesla</li>
                <li>Model S</li>
                <li>Red</li>
                <li>Tesla</li>
                <li>$80,000</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
