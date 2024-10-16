import { render, act } from '@testing-library/react';
import React from 'react';
import { useEffectOnceWhen } from '../index';

const TestComponent = ({ when, effect }) => {
  useEffectOnceWhen(effect, when);
  return null;
};

describe('useEffectOnceWhen', () => {
  it('should run the effect when condition is true on initial render', () => {
    const mockEffect = jest.fn();
    render(<TestComponent when={true} effect={mockEffect} />);
    expect(mockEffect).toHaveBeenCalledTimes(1);
  });

  it('should not run the effect when condition is false on initial render', () => {
    const mockEffect = jest.fn();
    render(<TestComponent when={false} effect={mockEffect} />);
    expect(mockEffect).not.toHaveBeenCalled();
  });

  it('should not rerun the effect on subsequent renders if condition remains true', () => {
    const mockEffect = jest.fn();
    const { rerender } = render(<TestComponent when={true} effect={mockEffect} />);
    expect(mockEffect).toHaveBeenCalledTimes(1);

    rerender(<TestComponent when={true} effect={mockEffect} />);
    expect(mockEffect).toHaveBeenCalledTimes(1);
  });

  it('should run the effect only once when condition toggles to true', () => {
    const mockEffect = jest.fn();
    const { rerender } = render(<TestComponent when={false} effect={mockEffect} />);
    expect(mockEffect).not.toHaveBeenCalled();

    rerender(<TestComponent when={true} effect={mockEffect} />);
    expect(mockEffect).toHaveBeenCalledTimes(1);

    rerender(<TestComponent when={true} effect={mockEffect} />);
    expect(mockEffect).toHaveBeenCalledTimes(1);
  });

  it('should handle the effect cleanup correctly', () => {
    const mockCleanup = jest.fn();
    const mockEffect = jest.fn(() => mockCleanup);
    const { rerender, unmount } = render(<TestComponent when={true} effect={mockEffect} />);
    expect(mockEffect).toHaveBeenCalledTimes(1);

    rerender(<TestComponent when={false} effect={mockEffect} />);
    expect(mockCleanup).toHaveBeenCalledTimes(1);

    unmount();
    expect(mockCleanup).toHaveBeenCalledTimes(1);
  });
});