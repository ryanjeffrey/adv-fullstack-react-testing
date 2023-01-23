import { render, screen } from '@testing-library/react';
import ShoppingList from './ShoppingList.jsx';

describe('ShoppingList', () => {
  it('renders the shopping list name', () => {
    const shoppingList = {
      id: '1',
      name: 'my list',
      shoppingItems: [],
    };
    render(<ShoppingList shoppingList={shoppingList} />);
    expect(screen.queryByTestId('shopping-list-name-1')).not.toBe(
      null
    );
  });
});
