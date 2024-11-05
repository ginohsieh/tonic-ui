import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { testA11y } from '@tonic-ui/react/test-utils/accessibility';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  MenuGroup,
  Submenu,
  SubmenuToggle,
  SubmenuList,
} from '../src';

describe('Menu', () => {
  const TestComponent = (props) => {
    const items = [
      { id: 1, label: 'Menu item 1', disabled: false },
      { id: 2, label: 'Menu item 2', disabled: false },
      { id: 3, label: 'Menu item 3', disabled: true },
    ];

    return (
      <Menu {...props}>
        <MenuButton data-testid="button">
          Open
        </MenuButton>
        <MenuList data-testid="menu-list">
          <MenuGroup title="Group 1">
            {items.map((item) => (
              <MenuItem
                data-id={item.id}
                key={item.id}
                disabled={item.disabled}
              >
                {item.label}
              </MenuItem>
            ))}
          </MenuGroup>
          <MenuDivider />
          <Submenu>
            <SubmenuToggle data-testid="submenu-toggle">Submenu</SubmenuToggle>
            <SubmenuList data-testid="submenu-list">
              <MenuItem>Submenu item 1</MenuItem>
              <MenuItem>Submenu item 2</MenuItem>
            </SubmenuList>
          </Submenu>
        </MenuList>
      </Menu>
    );
  };

  it('should render correctly', async () => {
    const user = userEvent.setup();
    const { container } = render(<TestComponent />);

    const button = screen.getByTestId('button');
    expect(button).toBeInTheDocument();

    await user.click(button);
    expect(await screen.findByRole('menu')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
    await testA11y(container);
  });

  it('should ensure proper focus management when opening and closing the menu', async () => {
    const user = userEvent.setup();
    render(<TestComponent returnFocusOnClose />);

    const button = screen.getByTestId('button');
    expect(button).not.toHaveFocus();

    await user.click(button);
    expect(screen.getByTestId('menu-list')).toHaveFocus();

    await user.click(document.body);
    await waitFor(() => {
      expect(button).toHaveFocus();
    });
  });

  it('should handle submenu interactions correctly', async () => {
    const user = userEvent.setup();
    render(<TestComponent />);

    const button = screen.getByTestId('button');
    await user.click(button);
    const submenuToggle = screen.getByTestId('submenu-toggle');
    expect(submenuToggle).toBeInTheDocument();

    await user.hover(submenuToggle);
    expect(await screen.findByTestId('submenu-list')).toBeInTheDocument();
  });

  it('should handle keyboard navigation within the menu', async () => {
    const user = userEvent.setup();
    render(<TestComponent />);

    const button = screen.getByTestId('button');
    await user.click(button);
    const menuItem1 = screen.getByText('Menu item 1');

    await user.keyboard('{ArrowDown}');
    expect(menuItem1).toHaveFocus();

    await user.keyboard('{ArrowDown}');
    expect(screen.getByText('Menu item 2')).toHaveFocus();

    await user.keyboard('{ArrowDown}');
    expect(screen.getByTestId('submenu-toggle')).toHaveFocus();

    await user.keyboard('{ArrowDown}');
    expect(menuItem1).toHaveFocus();
  });
});