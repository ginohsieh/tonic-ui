import { renderHook } from '@testing-library/react-hooks';
import useHydrated from '../useHydrated';

describe('useHydrated', () => {
  it('should return false initially and true after hydration', () => {
    const { result } = renderHook(() => useHydrated());

    // Initial state should be false (before hydration)
    expect(result.current).toBe(false);

    // After hydration (useEffect has run)
    setTimeout(() => {
      expect(result.current).toBe(true);
    }, 0);
  });

  it('should only set hydration once', () => {
    const { result, rerender } = renderHook(() => useHydrated());

    // Initial state should be false (before hydration)
    expect(result.current).toBe(false);

    setTimeout(() => {
      // After hydration (useEffect has run)
      expect(result.current).toBe(true);

      // Re-render the component
      rerender();

      // Should still be true after re-rendering
      expect(result.current).toBe(true);
    }, 0);
  });
});