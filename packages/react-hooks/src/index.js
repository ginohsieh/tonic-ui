import { renderHook } from '@testing-library/react-hooks';
import { useOnce } from './index';

describe('useOnce', () => {
  it('should be defined', () => {
    expect(useOnce).toBeDefined();
  });

  it('should call the callback only once', () => {
    const callback = jest.fn();

    const { rerender } = renderHook(() => useOnce(callback));

    expect(callback).toHaveBeenCalledTimes(1);

    // Rerender the hook
    rerender();

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should not call the callback on subsequent renders', () => {
    const callback = jest.fn();

    const { rerender, unmount } = renderHook(() => useOnce(callback));

    expect(callback).toHaveBeenCalledTimes(1);

    // Rerender the hook multiple times
    rerender();
    rerender();
    rerender();

    expect(callback).toHaveBeenCalledTimes(1);

    // Unmount and remount the hook
    unmount();
    renderHook(() => useOnce(callback));

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should correctly handle an empty callback', () => {
    const callback = jest.fn();

    renderHook(() => useOnce(callback));

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should handle multiple instances separately', () => {
    const callback1 = jest.fn();
    const callback2 = jest.fn();

    const { rerender: rerender1 } = renderHook(() => useOnce(callback1));
    const { rerender: rerender2 } = renderHook(() => useOnce(callback2));

    expect(callback1).toHaveBeenCalledTimes(1);
    expect(callback2).toHaveBeenCalledTimes(1);

    rerender1();
    rerender2();

    expect(callback1).toHaveBeenCalledTimes(1);
    expect(callback2).toHaveBeenCalledTimes(1);
  });
});