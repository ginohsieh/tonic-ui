import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { testA11y } from '@tonic-ui/react/test-utils/accessibility';
import { Link, LinkButton } from '../index';

describe('Link', () => {
  it('should render correctly', async () => {
    const { container } = render(
      <Link
        href="https://github.com/trendmicro-frontend/tonic-ui"
        target="_blank"
        textDecoration="none"
      >
        GitHub
      </Link>
    );
    await testA11y(container);
  });

  it('verifies the link has the correct href value', () => {
    render(<Link href="/logout">Log out</Link>);
    const link = screen.getByRole('link', { name: /log out/i });
    expect(link.href).toBe('http://localhost/logout');
  });

  it('should call onClick when clicked', () => {
    const handleClick = jest.fn();
    render(
      <Link href="/test" onClick={handleClick}>
        Test Link
      </Link>
    );
    const link = screen.getByRole('link', { name: /test link/i });
    fireEvent.click(link);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should not call onClick when disabled', () => {
    const handleClick = jest.fn();
    render(
      <Link href="/test" onClick={handleClick} disabled>
        Disabled Link
      </Link>
    );
    const link = screen.getByRole('link', { name: /disabled link/i });
    fireEvent.click(link);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('should prevent default action when disabled and clicked', () => {
    const handleClick = jest.fn((event) => event.preventDefault());
    render(
      <Link href="/test" onClick={handleClick} disabled>
        Disabled Link
      </Link>
    );
    const link = screen.getByRole('link', { name: /disabled link/i });
    fireEvent.click(link);
    expect(handleClick).not.toHaveBeenCalled();
  });
});

describe('LinkButton', () => {
  it('should render correctly', async () => {
    const { container } = render(
      <LinkButton
        href="https://github.com/trendmicro-frontend/tonic-ui"
        target="_blank"
        textDecoration="none"
      >
        GitHub
      </LinkButton>
    );
    await testA11y(container);
  });

  it('verifies the link has the correct href value', () => {
    render(<LinkButton href="/logout">Log out</LinkButton>);
    const link = screen.getByRole('link', { name: /log out/i });
    expect(link.href).toBe('http://localhost/logout');
  });

  it('should call onClick when clicked', () => {
    const handleClick = jest.fn();
    render(
      <LinkButton href="/test" onClick={handleClick}>
        Test Link
      </LinkButton>
    );
    const link = screen.getByRole('link', { name: /test link/i });
    fireEvent.click(link);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should not call onClick when disabled', () => {
    const handleClick = jest.fn();
    render(
      <LinkButton href="/test" onClick={handleClick} disabled>
        Disabled Link
      </LinkButton>
    );
    const link = screen.getByRole('link', { name: /disabled link/i });
    fireEvent.click(link);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('should prevent default action when disabled and clicked', () => {
    const handleClick = jest.fn((event) => event.preventDefault());
    render(
      <LinkButton href="/test" onClick={handleClick} disabled>
        Disabled Link
      </LinkButton>
    );
    const link = screen.getByRole('link', { name: /disabled link/i });
    fireEvent.click(link);
    expect(handleClick).not.toHaveBeenCalled();
  });
});