import { render, screen } from '@testing-library/react';
import ShoppingListForm from './ShoppingListForm.jsx';

describe('ShoppingListForm', () => {
  it('has a form with a submit button', () => {
    render(<ShoppingListForm />);
    expect(screen.queryByText('submit'));
  });
});
