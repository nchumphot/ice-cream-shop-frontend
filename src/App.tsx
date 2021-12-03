import "./css/App.css";
import { useState, useEffect } from "react";
import { InventoryItem } from "./utils/InventoryItem";
import { fetchData } from "./utils/fetchData";

function App(): JSX.Element {
  const [inventoryData, setInventoryData] = useState<InventoryItem[]>([]);
  useEffect(() => {
    fetchData(setInventoryData);
  }, []);
  console.log(inventoryData);
  return (
    <>
      <h1>A simple hello world!</h1>
    </>
  );
}

export default App;
