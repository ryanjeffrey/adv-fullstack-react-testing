export default function ShoppingListItem({ shoppingItem }) {
  return (
    <div data-testid={`shopping-list-item-${shoppingItem.id}`}>
      ({shoppingItem.quantity}){shoppingItem.item_name}
    </div>
  );
}
