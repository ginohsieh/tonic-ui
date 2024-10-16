import { renderHook } from '@testing-library/react';
import { useEventCallback } from '../index';

describe('useEventCallback', () => {
  it('should be defined', () => {
    expect(useEventCallback).toBeDefined();
  });

  it('should return a stable callback', () => {
    const { result, rerender } = renderHook(() => useEventCallback(() => {}));
    const firstCallback = result.current;
    rerender();
    const secondCallback = result.current;

    expect(firstCallback).toBe(secondCallback);
  });

  it('should call the latest callback', () => {
    const callback1 = jest.fn();
    const callback2 = jest.fn();

    const { result, rerender } = renderHook(({ callback }) => useEventCallback(callback), {
      initialProps: { callback: callback1 },
    });

    result.current();
    expect(callback1).toHaveBeenCalledTimes(1);
    expect(callback2).not.toHaveBeenCalled();

    rerender({ callback: callback2 });
    result.current();
    expect(callback1).toHaveBeenCalledTimes(1);
    expect(callback2).toHaveBeenCalledTimes(1);
  });

  it('should pass arguments to the latest callback', () => {
    const callback = jest.fn();

    const { result } = renderHook(() => useEventCallback(callback));

    result.current(1, 2, 3);
    expect(callback).toHaveBeenCalledWith(1, 2, 3);
  });

  it('should maintain referential stability', () => {
    const { result, rerender } = renderHook(() => useEventCallback(() => {}));
    const firstCallback = result.current;

    rerender();
    const secondCallback = result.current;

    expect(firstCallback).toBe(secondCallback);
  });
});