import { InventoryItem } from "../utils/InventoryItem";

export function FlavourList(props: {
  inventory: InventoryItem[];
}): JSX.Element {
  // Setting up initial order with 0 for all flavours
  let initialOrder: InventoryItem[] = [];
  for (const item of props.inventory) {
    initialOrder.push({
      id: item.id,
      name: item.name,
      quantity: 0,
    });
  }
  //   console.log(initialOrder);

  // Create a table row for each flavour
  const FlavourListItem = (item: InventoryItem): JSX.Element => {
    const flavourOrder = initialOrder.filter((obj) => obj.id === item.id)[0];
    // console.log(flavourOrder);
    return (
      <tr>
        <td>
          {item.name[0].toUpperCase() + item.name.slice(1)}
          {item.quantity === 0 && <small> (out of stock)</small>}
        </td>
        <td>{flavourOrder.quantity}</td>
      </tr>
    );
  };

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Menu</th>
            <th scope="col">Quantity</th>
          </tr>
        </thead>
        <tbody>{props.inventory.map(FlavourListItem)}</tbody>
      </table>
    </>
  );
}
