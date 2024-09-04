import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '@tonic-ui/react/test-utils/render';
import { testA11y } from '@tonic-ui/react/test-utils/accessibility';
import { Menu, MenuButton, MenuList, MenuItem } from '@tonic-ui/react/src/menu/Menu';
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

  it('should handle disabled menu items', async () => {
    const user = userEvent.setup();

    render(
      <TestComponent />
    );

    const button = screen.getByTestId('button');
    await user.click(button);

    const disabledItem = screen.getByText('Menu item 3');
    expect(disabledItem).toHaveAttribute('disabled');
  });

  it('should call onOpen and onClose callbacks', async () => {
    const user = userEvent.setup();
    const onOpen = jest.fn();
    const onClose = jest.fn();

    render(
      <TestComponent onOpen={onOpen} onClose={onClose} />
    );

    const button = screen.getByTestId('button');

    await user.click(button);
    expect(onOpen).toHaveBeenCalledTimes(1);

    await user.click(document.body);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('should toggle menu correctly with controlled isOpen prop', async () => {
    const user = userEvent.setup();
    const { rerender } = render(
      <TestComponent isOpen={false} />
    );

    const button = screen.getByTestId('button');
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();

    rerender(<TestComponent isOpen={true} />);
    expect(screen.getByRole('menu')).toBeInTheDocument();

    await user.click(document.body);
    expect(screen.getByRole('menu')).toBeInTheDocument(); // Should remain open as it is controlled
  });
});