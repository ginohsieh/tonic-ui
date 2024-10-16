import { renderHook, act } from '@testing-library/react-hooks';
import useEventCallback from './useEventCallback';

describe('useEventCallback', () => {
  it('should be defined', () => {
    expect(useEventCallback).toBeDefined();
  });

  it('should return a stable callback', () => {
    const callback = jest.fn();
    const { result, rerender } = renderHook(({ fn }) => useEventCallback(fn), {
      initialProps: { fn: callback }
    });

    const firstCallback = result.current;

    rerender({ fn: jest.fn() });

    const secondCallback = result.current;

    expect(firstCallback).toBe(secondCallback);
  });

  it('should call the latest callback', () => {
    const initialCallback = jest.fn();
    const updatedCallback = jest.fn();
    const { result, rerender } = renderHook(({ fn }) => useEventCallback(fn), {
      initialProps: { fn: initialCallback }
    });

    act(() => {
      result.current();
    });

    expect(initialCallback).toHaveBeenCalledTimes(1);
    expect(updatedCallback).toHaveBeenCalledTimes(0);

    rerender({ fn: updatedCallback });

    act(() => {
      result.current();
    });

    expect(initialCallback).toHaveBeenCalledTimes(1);
    expect(updatedCallback).toHaveBeenCalledTimes(1);
  });

  it('should maintain the same reference across renders', () => {
    const callback = jest.fn();
    const { result, rerender } = renderHook(({ fn }) => useEventCallback(fn), {
      initialProps: { fn: callback }
    });

    const firstCallback = result.current;

    rerender({ fn: callback });

    const secondCallback = result.current;

    expect(firstCallback).toBe(secondCallback);
  });
});