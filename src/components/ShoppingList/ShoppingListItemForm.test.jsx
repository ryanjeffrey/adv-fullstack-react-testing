import { render, screen } from '@testing-library/react';
import ShoppingListItemForm from './ShoppingListItemForm.jsx';

describe('ShoppingListItemForm', () => {
  it('has a form with a submit button', () => {
    render(<ShoppingListItemForm />);
    expect(screen.queryByText('submit'));
  });
});
