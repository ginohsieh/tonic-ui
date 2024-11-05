import { render, screen } from '@testing-library/react';
import { Box, Zoom } from '@tonic-ui/react/src';
import React from 'react';

describe('Zoom', () => {
  it('applies correct styles when entering', () => {
    const { rerender } = render(
      <Zoom in={false} data-testid="zoom">
        <Box />
      </Zoom>
    );

    rerender(
      <Zoom in={true} data-testid="zoom">
        <Box />
      </Zoom>
    );

    const zoom = screen.getByTestId('zoom');
    expect(zoom).toHaveStyle('transform: none');
    expect(zoom).toHaveStyle('transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1)');
    expect(zoom).not.toHaveStyle('visibility: hidden');
  });

  it('applies correct styles when entered', () => {
    render(
      <Zoom in={true} data-testid="zoom">
        <Box />
      </Zoom>
    );

    const zoom = screen.getByTestId('zoom');
    expect(zoom).toHaveStyle('transform: none');
    expect(zoom).toHaveStyle('transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1)');
    expect(zoom).not.toHaveStyle('visibility: hidden');
  });

  it('applies correct styles when exiting', () => {
    const { rerender } = render(
      <Zoom in={true} data-testid="zoom">
        <Box />
      </Zoom>
    );

    rerender(
      <Zoom in={false} data-testid="zoom">
        <Box />
      </Zoom>
    );

    const zoom = screen.getByTestId('zoom');
    expect(zoom).toHaveStyle('transform: scale(0)');
    expect(zoom).toHaveStyle('transition: transform 195ms cubic-bezier(0.4, 0, 0.2, 1)');
    expect(zoom).not.toHaveStyle('visibility: hidden');
  });

  it('applies correct styles when exited', () => {
    render(
      <Zoom in={false} data-testid="zoom">
        <Box />
      </Zoom>
    );

    const zoom = screen.getByTestId('zoom');
    expect(zoom).toHaveStyle('transform: scale(0)');
    expect(zoom).toHaveStyle('transition: transform 195ms cubic-bezier(0.4, 0, 0.2, 1)');
    expect(zoom).toHaveStyle('visibility: hidden');
  });

  it('renders children correctly', () => {
    render(
      <Zoom in={true} data-testid="zoom">
        <Box data-testid="child">Zoom Child</Box>
      </Zoom>
    );

    const child = screen.getByTestId('child');
    expect(child).toBeInTheDocument();
    expect(child).toHaveTextContent('Zoom Child');
  });

  it('applies custom timeout correctly', () => {
    const customTimeout = { enter: 300, exit: 200 };

    render(
      <Zoom in={true} timeout={customTimeout} data-testid="zoom">
        <Box />
      </Zoom>
    );

    const zoom = screen.getByTestId('zoom');
    expect(zoom).toHaveStyle('transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1)');

    render(
      <Zoom in={false} timeout={customTimeout} data-testid="zoom">
        <Box />
      </Zoom>
    );

    expect(zoom).toHaveStyle('transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1)');
  });

  it('applies custom easing correctly', () => {
    const customEasing = { enter: 'ease-in', exit: 'ease-out' };

    render(
      <Zoom in={true} easing={customEasing} data-testid="zoom">
        <Box />
      </Zoom>
    );

    const zoom = screen.getByTestId('zoom');
    expect(zoom).toHaveStyle('transition: transform 225ms ease-in');

    render(
      <Zoom in={false} easing={customEasing} data-testid="zoom">
        <Box />
      </Zoom>
    );

    expect(zoom).toHaveStyle('transition: transform 195ms ease-out');
  });
});