import { render, screen } from '@testing-library/react';
import ShoppingLists from './ShoppingLists.jsx';

describe('ShoppingLists', () => {
  it('renders an empty list', () => {
    render(<ShoppingLists shoppingLists={[]} />);
    expect(screen.queryByTestId('shopping-lists'));
  });

  it('renders its children', () => {
    const shoppingLists = [
      { id: '1', name: 'grocery', shoppingItems: [] },
      { id: '2', name: 'market', shoppingItems: [] },
      { id: '3', name: 'target', shoppingItems: [] },
    ];
    render(<ShoppingLists shoppingLists={shoppingLists} />);
    expect(screen.getByTestId('shopping-lists').children.length).toBe(3);
  });
});
