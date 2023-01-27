import { fireEvent, render, screen } from '@testing-library/react';
import ShoppingListForm from './ShoppingListForm.jsx';

describe('ShoppingListForm', () => {
  it('has a form with a submit button', () => {
    render(<ShoppingListForm />);
    expect(screen.queryByText('submit'));
  });

  it('submits the given shoppingList', () => {
    const shoppingList = {
      name: 'sporting goods',
      shoppingItems: [],
    };
    const onSubmit = jest.fn();
    render(
      <ShoppingListForm
        id={'new'}
        shoppingList={shoppingList}
        onSubmit={onSubmit}
      />
    );
    fireEvent.click(
      screen.getByTestId('shopping-list-form-submit-button-new')
    );
    expect(onSubmit).toHaveBeenCalledWith(shoppingList);
  });
});
