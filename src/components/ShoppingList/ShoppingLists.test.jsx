import { render, screen } from '@testing-library/react';
import ShoppingLists from './ShoppingLists.jsx';

describe('ShoppingLists', () => {
  it('renders an empty list', () => {
    render(<ShoppingLists shoppingLists={[]} />);
    expect(screen.queryByTestId('shopping-lists'));
  });
});
