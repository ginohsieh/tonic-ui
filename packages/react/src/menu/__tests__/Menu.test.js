import { render, testA11y } from '@tonic-ui/react/test-utils';
import { Menu, MenuButton, MenuList, MenuItem } from '@tonic-ui/react/src';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

describe('Menu', () => {
  const TestComponent = (props) => {
    const items = [
      { id: 1, label: 'Menu item 1', disabled: false },
      { id: 2, label: 'Menu item 2', disabled: false },
      { id: 3, label: 'Menu item 3', disabled: true },
    ];

    return (
      <Menu {...props}>
        <MenuButton
          data-testid="button"
          variant="secondary"
        >
          Open
        </MenuButton>
        <MenuList
          data-testid="menu-list"
        >
          {items.map((item) => (
            <MenuItem
              data-id={item.id}
              key={item.id}
              disabled={item.disabled}
            >
              {item.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    );
  };

  it('should render correctly', async () => {
    const user = userEvent.setup();
    const renderOptions = {
      useCSSVariables: true,
    };
    const { container } = render((
      <TestComponent />
    ), renderOptions);

    const button = screen.getByTestId('button');

    // The button should be in the document
    expect(button).toBeInTheDocument();

    // Open the menu
    await user.click(button);

    // The menu should be in the document
    expect(await screen.findByRole('menu')).toBeInTheDocument();

    expect(container).toMatchSnapshot();

    await testA11y(container);
  });

  it('should ensure proper focus management when opening and closing the menu', async () => {
    const user = userEvent.setup();

    render(
      <TestComponent returnFocusOnClose />
    );

    const button = screen.getByTestId('button');

    // The button should not have focus at start
    expect(button).not.toHaveFocus();

    // Open the menu
    await user.click(button);

    // The menu list should have focus
    expect(screen.getByTestId('menu-list')).toHaveFocus();

    // Close the menu
    await user.click(document.body);

    // Wait for the button to be focused
    await waitFor(() => {
      expect(button).toHaveFocus();
    });
  });

  it('should handle menu item clicks correctly', async () => {
    const user = userEvent.setup();
    const onSelect = jest.fn();
    render(<TestComponent onSelect={onSelect} />);

    const button = screen.getByTestId('button');

    // Open the menu
    await user.click(button);

    const menuItem1 = screen.getByText('Menu item 1');
    const menuItem2 = screen.getByText('Menu item 2');
    const menuItem3 = screen.getByText('Menu item 3');

    // The first and second menu items should be clickable
    await user.click(menuItem1);
    await user.click(menuItem2);

    // The third menu item should not be clickable (disabled)
    await user.click(menuItem3);

    expect(onSelect).toHaveBeenCalledTimes(2);
    expect(onSelect).toHaveBeenCalledWith(expect.objectContaining({ id: 1 }));
    expect(onSelect).toHaveBeenCalledWith(expect.objectContaining({ id: 2 }));
  });

  it('should close the menu when an item is clicked if closeOnSelect is true', async () => {
    const user = userEvent.setup();
    render(<TestComponent closeOnSelect={true} />);

    const button = screen.getByTestId('button');

    // Open the menu
    await user.click(button);

    const menuItem1 = screen.getByText('Menu item 1');

    // Click the first menu item
    await user.click(menuItem1);

    // The menu should no longer be in the document
    await waitFor(() => {
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });
  });

  it('should keep the menu open when an item is clicked if closeOnSelect is false', async () => {
    const user = userEvent.setup();
    render(<TestComponent closeOnSelect={false} />);

    const button = screen.getByTestId('button');

    // Open the menu
    await user.click(button);

    const menuItem1 = screen.getByText('Menu item 1');

    // Click the first menu item
    await user.click(menuItem1);

    // The menu should still be in the document
    expect(screen.getByRole('menu')).toBeInTheDocument();
  });
});