import { render, act } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import useLatest from '../../deprecated/useLatest';

const TestComponent = ({ value }) => {
  const latestValue = useLatest(value);
  const [displayValue, setDisplayValue] = useState(latestValue.current);

  useEffect(() => {
    setDisplayValue(latestValue.current);
  }, [latestValue]);

  return <div data-testid="value">{displayValue}</div>;
};

describe('useLatest', () => {
  it('should be defined', () => {
    expect(useLatest).toBeDefined();
  });

  it('should return the latest value', () => {
    const { getByTestId, rerender } = render(<TestComponent value="initial" />);
    const valueElement = getByTestId('value');
    
    // Initial render
    expect(valueElement.textContent).toBe('initial');

    // Update the value
    rerender(<TestComponent value="updated" />);
    expect(valueElement.textContent).toBe('updated');
  });

  it('should not update the returned value immediately within the same render', () => {
    const ChildComponent = ({ updateParent }) => {
      const latestValue = useLatest('child');
      useEffect(() => {
        updateParent(latestValue.current);
      }, [latestValue, updateParent]);
      return null;
    };

    const ParentComponent = () => {
      const [value, setValue] = useState('parent');
      const [childValue, setChildValue] = useState(null);

      return (
        <div>
          <div data-testid="parent-value">{value}</div>
          <div data-testid="child-value">{childValue}</div>
          <ChildComponent updateParent={setChildValue} />
        </div>
      );
    };

    const { getByTestId } = render(<ParentComponent />);
    const parentValueElement = getByTestId('parent-value');
    const childValueElement = getByTestId('child-value');

    // Initial render
    expect(parentValueElement.textContent).toBe('parent');
    expect(childValueElement.textContent).toBe('child');
  });

  it('should handle undefined values correctly', () => {
    const { getByTestId, rerender } = render(<TestComponent value={undefined} />);
    const valueElement = getByTestId('value');

    // Initial render
    expect(valueElement.textContent).toBe('');

    // Update the value
    rerender(<TestComponent value="defined" />);
    expect(valueElement.textContent).toBe('defined');

    // Update back to undefined
    rerender(<TestComponent value={undefined} />);
    expect(valueElement.textContent).toBe('');
  });
});