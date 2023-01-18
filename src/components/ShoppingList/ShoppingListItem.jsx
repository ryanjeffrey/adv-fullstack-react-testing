export default function ShoppingListItem(item) {
  return (
    <div data-testid={`shopping-list-item-${item.shoppingItem.id}`}>
      ({item.shoppingItem.quantity}){item.shoppingItem.item_name}
    </div>
  );
}
