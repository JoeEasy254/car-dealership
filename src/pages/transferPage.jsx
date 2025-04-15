import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
export default function TransferVehicle() {
  const [selection, setSelection] = useState(
    JSON.parse(localStorage.getItem("vehicles")) || []
  );

  const [ownerName, setOwnerName] = useState("");
  const [age, setAge] = useState("");
  const [selected, setSelected] = useState("");
  const [contact, setContact] = useState("");
  const [vehicle, setVehicle] = useState("");

  const handleTransfer = (event) => {
    event.preventDefault();

    const transferData = {
      ownerName: ownerName,
      age: age,
      contact: contact,
      vehicle: selected,
    };

    const vehicleSold = JSON.parse(localStorage.getItem("sold"));

    if (Array.isArray(vehicleSold) && vehicleSold.length > 0) {
      vehicleSold.push(transferData);
      localStorage.setItem("sold", JSON.stringify(vehicleSold));

      toast.success("vehicle transferred successfully");

      const storedVehicles = JSON.parse(localStorage.getItem("vehicles"));

      if (Array.isArray(storedVehicles)) {
        const updatedVehicle = storedVehicles.filter(
          (vehicle) => vehicle.name !== selected
        );

        localStorage.setItem("vehicles", JSON.stringify(updatedVehicle));
        toast.success("vehicle sold from dealership");
      } else {
        toast.success("vehicles dont exist");
      }
    } else {
      const vehicles = [];
      vehicles.push(transferData);

      localStorage.setItem("sold", JSON.stringify(vehicles));
      toast.success("vehicle transferred successfully");

      const updatedVehicle = vehicles.filter(
        (vehicle) => vehicle.name !== selected
      );

      localStorage.setItem("vehicles", JSON.stringify(updatedVehicle));
      toast.success("vehicle sold from dealership");
    }
  };
  return (
    <div>
      <Toaster />
      <form onSubmit={handleTransfer}>
        <label htmlFor="">New Owner name</label>
        <input type="text" onChange={(e) => setOwnerName(e.target.value)} />

        <label htmlFor="">Age</label>
        <input type="text" onChange={(e) => setAge(e.target.value)} />

        <label htmlFor="">Contact</label>
        <input type="tel" onChange={(e) => setContact(e.target.value)} />

        <label htmlFor="pick vehicle">Pick vehicle</label>
        <select name="" id="" onChange={(e) => setSelected(e.target.value)}>
          {selection.map((selection) => (
            <>
              <option value=""></option>
              <option value={selection.name}>{selection.name}</option>
            </>
          ))}
        </select>

        <button>Transfer</button>
      </form>
    </div>
  );
}
