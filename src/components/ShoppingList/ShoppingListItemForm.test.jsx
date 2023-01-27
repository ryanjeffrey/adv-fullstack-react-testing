import { fireEvent, render, screen } from '@testing-library/react';
import ShoppingListItemForm from './ShoppingListItemForm.jsx';

describe('ShoppingListItemForm', () => {
  it('has a form with a submit button', () => {
    render(<ShoppingListItemForm />);
    expect(screen.queryByText('submit'));
  });

  it('submits the given shoppingList', () => {
    const shoppingListItem = {
      name: 'tennis balls',
      quantity: 14
    };
    const onSubmit = jest.fn();
    render(
      <ShoppingListItemForm
        id={'new'}
        shoppingListItem={shoppingListItem}
        onSubmit={onSubmit}
      />
    );
    fireEvent.click(
      screen.getByTestId('shopping-list-item-form-submit-button-new')
    );
    expect(onSubmit).toHaveBeenCalledWith(shoppingListItem);
  });
});
