import "./css/App.css";
import { useState, useEffect } from "react";
import { InventoryItem } from "./utils/InventoryItem";
import { fetchData } from "./utils/fetchData";
import { FlavourList } from "./components/FlavourList";
import { PageHeader } from "./components/PageHeader";

function App(): JSX.Element {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  useEffect(() => {
    fetchData(setInventory);
  }, []);
  console.log(inventory);
  return (
    <>
      <PageHeader />
      <FlavourList inventory={inventory} />
    </>
  );
}

export default App;
