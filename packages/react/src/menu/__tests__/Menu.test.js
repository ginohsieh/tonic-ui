import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '@tonic-ui/react/test-utils/render';
import { testA11y } from '@tonic-ui/react/test-utils/accessibility';
import { Menu, MenuButton, MenuList, MenuItem } from '@tonic-ui/react/src';
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

  it('should navigate through menu items using keyboard', async () => {
    const user = userEvent.setup();
    render(<TestComponent />);

    const button = screen.getByTestId('button');

    // Open the menu
    await user.click(button);

    const menuItems = screen.getAllByRole('menuitem');

    // Navigate to the first item
    await user.keyboard('{arrowdown}');
    expect(menuItems[0]).toHaveFocus();

    // Navigate to the second item
    await user.keyboard('{arrowdown}');
    expect(menuItems[1]).toHaveFocus();

    // Navigate to the third item (disabled)
    await user.keyboard('{arrowdown}');
    // Disabled item should not receive focus
    expect(menuItems[1]).toHaveFocus();

    // Navigate back to the first item
    await user.keyboard('{arrowup}');
    expect(menuItems[0]).toHaveFocus();
  });

  it('should close the menu when an item is selected', async () => {
    const user = userEvent.setup();
    render(<TestComponent closeOnSelect />);

    const button = screen.getByTestId('button');

    // Open the menu
    await user.click(button);

    const menuItems = screen.getAllByRole('menuitem');

    // Select the first menu item
    await user.click(menuItems[0]);

    // The menu should be closed
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('should not close the menu when a disabled item is selected', async () => {
    const user = userEvent.setup();
    render(<TestComponent />);

    const button = screen.getByTestId('button');

    // Open the menu
    await user.click(button);

    const menuItems = screen.getAllByRole('menuitem');

    // Try to select the disabled menu item
    await user.click(menuItems[2]);

    // The menu should remain open
    expect(screen.getByRole('menu')).toBeInTheDocument();
  });
});