import { renderHook } from '@testing-library/react-hooks';
import { useHydrated } from './index';

describe('useHydrated', () => {
  it('should be defined', () => {
    expect(useHydrated).toBeDefined();
  });

  it('should return false initially and true after hydration', () => {
    const { result } = renderHook(() => useHydrated());

    // Initially, it should be false
    expect(result.current).toBe(false);

    // Wait for the next effect cycle
    setTimeout(() => {
      expect(result.current).toBe(true);
    }, 0);
  });
});