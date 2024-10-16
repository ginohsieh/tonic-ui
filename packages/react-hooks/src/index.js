import { render, act } from '@testing-library/react';
import React, { useState } from 'react';
import { useOnceWhen } from './index';

describe('useOnceWhen', () => {
  it('should be defined', () => {
    expect(useOnceWhen).toBeDefined();
  });

  it('should call the callback once when condition is true initially', () => {
    const callback = jest.fn();
    const TestComponent = () => {
      useOnceWhen(callback, true);
      return <div>Test</div>;
    };

    render(<TestComponent />);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should not call the callback when condition is false initially', () => {
    const callback = jest.fn();
    const TestComponent = () => {
      useOnceWhen(callback, false);
      return <div>Test</div>;
    };

    render(<TestComponent />);
    expect(callback).not.toHaveBeenCalled();
  });

  it('should call the callback only once even if condition changes to true later', () => {
    const callback = jest.fn();
    const TestComponent = () => {
      const [condition, setCondition] = useState(false);
      useOnceWhen(callback, condition);

      return (
        <div>
          <button onClick={() => setCondition(true)}>Update Condition</button>
        </div>
      );
    };

    const { getByText } = render(<TestComponent />);

    // Update condition to true
    act(() => {
      getByText('Update Condition').click();
    });

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should not call the callback again if re-rendered with same condition', () => {
    const callback = jest.fn();
    const TestComponent = () => {
      const [condition, setCondition] = useState(true);
      useOnceWhen(callback, condition);

      return (
        <div>
          <button onClick={() => setCondition(prev => !prev)}>Toggle Condition</button>
        </div>
      );
    };

    const { getByText } = render(<TestComponent />);

    // Re-render with same condition
    act(() => {
      getByText('Toggle Condition').click(); // Set to false
    });
    act(() => {
      getByText('Toggle Condition').click(); // Set back to true
    });

    expect(callback).toHaveBeenCalledTimes(1);
  });
});