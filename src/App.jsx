import { Link } from "react-router";
import ListVehicles from "./components/ListVehicles";

function App() {
  return (
    <>
      <Link to="/transfer">
        <button>Transfer</button>
      </Link>

      <Link to="/create">
        <button>Create</button>
      </Link>
      <ListVehicles />
    </>
  );
}

export default App;
