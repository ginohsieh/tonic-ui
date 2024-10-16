import { render, act } from '@testing-library/react';
import React, { useState } from 'react';
import { useOnceWhen } from '../useOnceWhen';

describe('useOnceWhen', () => {
  it('should be defined', () => {
    expect(useOnceWhen).toBeDefined();
  });

  it('should only execute the effect once when the condition is true initially', () => {
    const mockEffect = jest.fn();
    const TestComponent = ({ condition }) => {
      useOnceWhen(mockEffect, condition);
      return <div />;
    };

    const { rerender } = render(<TestComponent condition={true} />);
    expect(mockEffect).toHaveBeenCalledTimes(1);

    rerender(<TestComponent condition={true} />);
    expect(mockEffect).toHaveBeenCalledTimes(1);
  });

  it('should not execute the effect when the condition is false initially', () => {
    const mockEffect = jest.fn();
    const TestComponent = ({ condition }) => {
      useOnceWhen(mockEffect, condition);
      return <div />;
    };

    render(<TestComponent condition={false} />);
    expect(mockEffect).not.toHaveBeenCalled();
  });

  it('should execute the effect once when the condition becomes true', () => {
    const mockEffect = jest.fn();
    const TestComponent = ({ condition }) => {
      useOnceWhen(mockEffect, condition);
      return <div />;
    };

    const { rerender } = render(<TestComponent condition={false} />);
    expect(mockEffect).not.toHaveBeenCalled();

    rerender(<TestComponent condition={true} />);
    expect(mockEffect).toHaveBeenCalledTimes(1);

    rerender(<TestComponent condition={true} />);
    expect(mockEffect).toHaveBeenCalledTimes(1);
  });

  it('should not execute the effect again if the condition changes to false and then true again', () => {
    const mockEffect = jest.fn();
    const TestComponent = ({ condition }) => {
      useOnceWhen(mockEffect, condition);
      return <div />;
    };

    const { rerender } = render(<TestComponent condition={true} />);
    expect(mockEffect).toHaveBeenCalledTimes(1);

    rerender(<TestComponent condition={false} />);
    rerender(<TestComponent condition={true} />);
    expect(mockEffect).toHaveBeenCalledTimes(1);
  });

  it('should work with a dynamic condition', () => {
    const mockEffect = jest.fn();
    const TestComponent = () => {
      const [condition, setCondition] = useState(false);
      useOnceWhen(mockEffect, condition);

      return (
        <div>
          <button onClick={() => setCondition(true)}>Set Condition</button>
        </div>
      );
    };

    const { container } = render(<TestComponent />);
    expect(mockEffect).not.toHaveBeenCalled();

    const button = container.querySelector('button');
    act(() => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(mockEffect).toHaveBeenCalledTimes(1);
  });
});