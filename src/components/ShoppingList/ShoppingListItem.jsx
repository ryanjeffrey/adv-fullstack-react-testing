export default function ShoppingListItem(item) {
  return (
    <div>
      ({item.shoppingItem.quantity})
      {item.shoppingItem.item_name}
    </div>
  );
}
