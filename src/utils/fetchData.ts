import { InventoryItem } from "./InventoryItem";

export const fetchData = async (
  setState: React.Dispatch<React.SetStateAction<InventoryItem[]>>
) => {
  const response = await fetch(
    "https://vetas-ice-cream-shop.herokuapp.com/inventory/"
  );
  const jsonBody = await response.json();
  setState(jsonBody.data);
};
