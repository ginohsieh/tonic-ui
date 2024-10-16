import { renderHook, act } from '@testing-library/react-hooks';
import useLatest from './deprecated/useLatest';

describe('useLatest', () => {
  it('should be defined', () => {
    expect(useLatest).toBeDefined();
  });

  it('should always return the latest value', () => {
    const { result, rerender } = renderHook(({ value }) => useLatest(value), {
      initialProps: { value: 0 },
    });

    // Initial value
    expect(result.current.current).toBe(0);

    // Update value
    rerender({ value: 1 });
    expect(result.current.current).toBe(1);

    // Update value again
    rerender({ value: 2 });
    expect(result.current.current).toBe(2);
  });

  it('should maintain the same ref object between renders', () => {
    const { result, rerender } = renderHook(({ value }) => useLatest(value), {
      initialProps: { value: 0 },
    });

    const firstRef = result.current;

    // Update value
    rerender({ value: 1 });
    expect(result.current).toBe(firstRef);

    // Update value again
    rerender({ value: 2 });
    expect(result.current).toBe(firstRef);
  });

  it('should handle function initializers correctly', () => {
    const { result, rerender } = renderHook(({ value }) => useLatest(value), {
      initialProps: { value: () => 0 },
    });

    // Initial value
    expect(result.current.current()).toBe(0);

    // Update value
    rerender({ value: () => 1 });
    expect(result.current.current()).toBe(1);

    // Update value again
    rerender({ value: () => 2 });
    expect(result.current.current()).toBe(2);
  });
});