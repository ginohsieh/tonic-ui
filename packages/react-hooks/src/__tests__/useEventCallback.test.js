import { renderHook, act } from '@testing-library/react-hooks';
import { useEventCallback } from '../useEventCallback';

describe('useEventCallback', () => {
  it('should return a function', () => {
    const { result } = renderHook(() => useEventCallback(() => {}));
    expect(typeof result.current).toBe('function');
  });

  it('should return the same function reference across renders', () => {
    const { result, rerender } = renderHook(() => useEventCallback(() => {}));
    const firstCallback = result.current;
    rerender();
    expect(result.current).toBe(firstCallback);
  });

  it('should always call the latest callback', () => {
    const initialCallback = jest.fn();
    const updatedCallback = jest.fn();
    const { result, rerender } = renderHook(({ callback }) => useEventCallback(callback), {
      initialProps: { callback: initialCallback },
    });

    // Call the initial callback
    act(() => {
      result.current();
    });
    expect(initialCallback).toHaveBeenCalledTimes(1);
    expect(updatedCallback).not.toHaveBeenCalled();

    // Update the callback prop
    rerender({ callback: updatedCallback });

    // Call the updated callback
    act(() => {
      result.current();
    });
    expect(initialCallback).toHaveBeenCalledTimes(1);
    expect(updatedCallback).toHaveBeenCalledTimes(1);
  });

  it('should handle multiple arguments', () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useEventCallback(callback));

    // Call the callback with multiple arguments
    act(() => {
      result.current(1, 2, 3);
    });
    expect(callback).toHaveBeenCalledWith(1, 2, 3);
    expect(callback).toHaveBeenCalledTimes(1);
  });
});