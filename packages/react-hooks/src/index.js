// packages/react-hooks/src/__tests__/useEffectOnce.test.js
import React, { useState } from 'react';
import { render } from '@testing-library/react';
import { useEffectOnce } from '../index';

const TestComponent = ({ callback }) => {
  const [count, setCount] = useState(0);

  useEffectOnce(() => {
    callback();
    setCount((prevCount) => prevCount + 1);
  });

  return <div>Count: {count}</div>;
};

describe('useEffectOnce', () => {
  it('should be defined', () => {
    expect(useEffectOnce).toBeDefined();
  });

  it('should call the effect only once', () => {
    const mockCallback = jest.fn();
    const { rerender } = render(<TestComponent callback={mockCallback} />);
    
    // Re-render the same component
    rerender(<TestComponent callback={mockCallback} />);
    rerender(<TestComponent callback={mockCallback} />);

    expect(mockCallback).toHaveBeenCalledTimes(1); // The callback should only be called once
  });

  it('should update the state only once', () => {
    const mockCallback = jest.fn();
    const { getByText, rerender } = render(<TestComponent callback={mockCallback} />);
    
    // Re-render the same component
    rerender(<TestComponent callback={mockCallback} />);

    const countElement = getByText(/Count:/);
    expect(countElement.textContent).toBe('Count: 1'); // The count should be 1
  });
});