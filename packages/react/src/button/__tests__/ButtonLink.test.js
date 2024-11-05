import { screen } from '@testing-library/react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ButtonLink } from '../index';
import React from 'react';

describe('ButtonLink', () => {
  it('should render correctly', async () => {
    const { container } = render(
      <ButtonLink
        href="https://github.com/trendmicro-frontend/tonic-ui"
        target="_blank"
        textDecoration="none"
      >
        GitHub
      </ButtonLink>
    );
    expect(container).toMatchSnapshot();
  });

  it('verifies the link has the correct href value', () => {
    render(<ButtonLink href="/logout">Log out</ButtonLink>);
    const link = screen.getByRole('link', { name: /log out/i });
    expect(link.href).toBe('http://localhost/logout');
  });

  it('should call onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(
      <ButtonLink href="https://example.com" onClick={handleClick}>
        Click me
      </ButtonLink>
    );
    const link = screen.getByRole('link', { name: /click me/i });
    fireEvent.click(link);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should have the correct target attribute', () => {
    render(<ButtonLink href="https://example.com" target="_blank">External</ButtonLink>);
    const link = screen.getByRole('link', { name: /external/i });
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('should have the correct textDecoration style', () => {
    render(<ButtonLink href="https://example.com" textDecoration="none">No Underline</ButtonLink>);
    const link = screen.getByRole('link', { name: /no underline/i });
    expect(link).toHaveStyle('text-decoration: none');
  });
});