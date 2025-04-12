import { useState } from "react";

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
    } else {
      const vehicles = [];
      vehicles.push(transferData);

      localStorage.setItem("sold", JSON.stringify(vehicles));
    }
  };
  return (
    <div>
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
