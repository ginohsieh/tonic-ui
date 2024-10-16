import { render, screen } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import { useHydrated } from '../index';

const TestComponent = () => {
  const hydrated = useHydrated();

  return <div>{hydrated ? 'Hydrated' : 'Not Hydrated'}</div>;
};

describe('useHydrated', () => {
  it('should be defined', () => {
    expect(useHydrated).toBeDefined();
  });

  it('should initially render as "Not Hydrated"', () => {
    render(<TestComponent />);
    expect(screen.getByText('Not Hydrated')).toBeInTheDocument();
  });

  it('should eventually render as "Hydrated"', async () => {
    render(<TestComponent />);
    expect(screen.getByText('Not Hydrated')).toBeInTheDocument();
    await screen.findByText('Hydrated');
    expect(screen.getByText('Hydrated')).toBeInTheDocument();
  });
});