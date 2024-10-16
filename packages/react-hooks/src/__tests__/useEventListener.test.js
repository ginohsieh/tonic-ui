import { render, fireEvent } from '@testing-library/react';
import React, { useEffect, useRef } from 'react';
import { useEventListener } from '../useEventListener';

// 測試用的 Component
const TestComponent = ({ eventType, handler }) => {
  const ref = useRef(null);

  useEventListener(eventType, handler, ref);

  return <div ref={ref}>TestComponent</div>;
};

describe('useEventListener', () => {
  it('should add an event listener to the element', () => {
    const handler = jest.fn();
    const { getByText } = render(<TestComponent eventType="click" handler={handler} />);
    const element = getByText('TestComponent');

    fireEvent.click(element);
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('should remove the event listener when the component unmounts', () => {
    const handler = jest.fn();
    const { getByText, unmount } = render(<TestComponent eventType="click" handler={handler} />);
    const element = getByText('TestComponent');

    unmount();
    fireEvent.click(element);
    expect(handler).not.toHaveBeenCalled();
  });

  it('should update the event listener if the handler changes', () => {
    const initialHandler = jest.fn();
    const updatedHandler = jest.fn();
    const { getByText, rerender } = render(<TestComponent eventType="click" handler={initialHandler} />);
    const element = getByText('TestComponent');

    fireEvent.click(element);
    expect(initialHandler).toHaveBeenCalledTimes(1);

    rerender(<TestComponent eventType="click" handler={updatedHandler} />);
    fireEvent.click(element);
    expect(updatedHandler).toHaveBeenCalledTimes(1);
    expect(initialHandler).not.toHaveBeenCalledTimes(2); // 確保初始的 handler 不會被再次呼叫
  });
});