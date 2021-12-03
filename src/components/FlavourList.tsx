import { InventoryItem } from "../utils/InventoryItem";

export function FlavourList(props: {
  inventory: InventoryItem[];
}): JSX.Element {
  const FlavourListItem = (item: InventoryItem): JSX.Element => {
    return (
      <li key={item.id}>
        {item.name[0].toUpperCase() + item.name.slice(1)}
        {item.quantity === 0 && "(Out of stock)"}
      </li>
    );
  };

  return (
    <>
      <h2>Menu</h2>
      <ul>{props.inventory.map(FlavourListItem)}</ul>
    </>
  );
}
