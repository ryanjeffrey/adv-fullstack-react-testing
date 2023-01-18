import { useState } from 'react';

const defaultShoppingListItem = {
  id: null,
  item_name: '',
  quantity: '',
};

export default function ShoppingListItemForm({
  id,
  shoppingListItem,
  onSubmit,
}) {
  const [currentShoppingListItem, setCurrentShoppingListItem] =
    useState(shoppingListItem || defaultShoppingListItem);
  return (
    <form
      data-testid={`shopping-list-item-form-${id}`}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(currentShoppingListItem);
        console.log(currentShoppingListItem);
        setCurrentShoppingListItem(defaultShoppingListItem);
      }}
    >
      <input
        data-testid={`shopping-list-item-form-name-${id}`}
        type="text"
        placeholder="item"
        value={currentShoppingListItem.item_name}
        onChange={(e) =>
          setCurrentShoppingListItem({
            ...currentShoppingListItem,
            item_name: e.target.value,
          })
        }
      />
      <input
        data-testid={`shopping-list-item-form-quantity-${id}`}
        type="number"
        placeholder="qty"
        value={currentShoppingListItem.quantity}
        onChange={(e) =>
          setCurrentShoppingListItem({
            ...currentShoppingListItem,
            quantity: e.target.value,
          })
        }
      />
      <button
        data-testid={`shopping-list-item-form-submit-button-${id}`}
        type="submit"
      >
        Add Item
      </button>
    </form>
  );
}
