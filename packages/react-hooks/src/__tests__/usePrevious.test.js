import React from 'react';
import { render, screen } from '@testing-library/react';
import { usePrevious } from '../index';

const TestComponent = ({ value }) => {
  const previousValue = usePrevious(value);
  return (
    <div>
      <div data-testid="current-value">{value}</div>
      <div data-testid="previous-value">{previousValue}</div>
    </div>
  );
};

describe('usePrevious', () => {
  it('should return undefined on initial render', () => {
    render(<TestComponent value="test" />);
    const previousValue = screen.getByTestId('previous-value').textContent;
    expect(previousValue).toBe('');
  });

  it('should return previous value after update', () => {
    const { rerender } = render(<TestComponent value="first" />);
    rerender(<TestComponent value="second" />);
    const previousValue = screen.getByTestId('previous-value').textContent;
    expect(previousValue).toBe('first');
  });

  it('should update correctly with multiple updates', () => {
    const { rerender } = render(<TestComponent value="first" />);
    rerender(<TestComponent value="second" />);
    rerender(<TestComponent value="third" />);
    const previousValue = screen.getByTestId('previous-value').textContent;
    expect(previousValue).toBe('second');
  });

  it('should handle different data types', () => {
    const { rerender } = render(<TestComponent value={1} />);
    rerender(<TestComponent value={2} />);
    let previousValue = screen.getByTestId('previous-value').textContent;
    expect(previousValue).toBe('1');

    rerender(<TestComponent value="string" />);
    previousValue = screen.getByTestId('previous-value').textContent;
    expect(previousValue).toBe('2');

    rerender(<TestComponent value={{ key: 'value' }} />);
    previousValue = screen.getByTestId('previous-value').textContent;
    expect(previousValue).toBe('string');
  });
});