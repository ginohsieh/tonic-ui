import { renderHook } from '@testing-library/react-hooks';
import { useOnce } from '../index';

// 定義一個 Mock 函數作為 useOnce 的參數
const mockCallback = jest.fn();

describe('useOnce', () => {
  it('should be defined', () => {
    expect(useOnce).toBeDefined();
  });

  it('should call the callback only once', () => {
    renderHook(() => useOnce(mockCallback));

    // Mock 函數應該只被調用一次
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });

  it('should not call the callback on re-renders', () => {
    const { rerender } = renderHook(() => useOnce(mockCallback));

    // 重新渲染
    rerender();

    // Mock 函數應該只被調用一次，因為 useOnce 保證了只會執行一次
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });

  it('should not call the callback on unmount and re-mount', () => {
    const { unmount, rerender } = renderHook(() => useOnce(mockCallback));

    // 卸載組件
    unmount();

    // 重新渲染
    rerender();

    // 即使重新加載，Mock 函數也應該只被調用一次
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });

  it('should accept an undefined callback without throwing an error', () => {
    const undefinedCallback = undefined;

    expect(() => {
      renderHook(() => useOnce(undefinedCallback));
    }).not.toThrow();
  });

  it('should accept a null callback without throwing an error', () => {
    const nullCallback = null;

    expect(() => {
      renderHook(() => useOnce(nullCallback));
    }).not.toThrow();
  });
});