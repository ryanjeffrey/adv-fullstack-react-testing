import { render, screen } from '@testing-library/react';
import ShoppingListItem from './ShoppingListItem.jsx';

describe('ShoppingListItem', () => {
  it('renders the shopping list item name', () => {
    const shoppingItem = {
      id: '2',
      name: 'pickles',
      quantity: 3
    };
    render(<ShoppingListItem shoppingItem={shoppingItem} />);
    expect(screen.queryByTestId('shopping-list-item-2')).not.toBe(
      null
    );
    expect(shoppingItem.name).toBe('pickles');
  });

  it('renders the shopping list item quantity', () => {
    const shoppingItem = {
      id: '2',
      name: 'pickles',
      quantity: 3,
    };
    render(<ShoppingListItem shoppingItem={shoppingItem} />);
    expect(shoppingItem.quantity).toBe(3);
  });
});
