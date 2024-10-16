import { renderHook, act } from '@testing-library/react';
import { useLatestRef } from '../index';

describe('useLatestRef', () => {
  it('should be defined', () => {
    expect(useLatestRef).toBeDefined();
  });

  it('should return a ref object', () => {
    const { result } = renderHook(() => useLatestRef('initialValue'));
    expect(result.current).toHaveProperty('current', 'initialValue');
  });

  it('should keep the same ref object across renders', () => {
    const { result, rerender } = renderHook(({ value }) => useLatestRef(value), {
      initialProps: { value: 'initialValue' },
    });
    
    const firstRef = result.current;

    // Rerender with a new value
    rerender({ value: 'newValue' });
    expect(result.current).toBe(firstRef);
    expect(result.current.current).toBe('newValue');
  });

  it('should update the ref current value on each render', () => {
    const { result, rerender } = renderHook(({ value }) => useLatestRef(value), {
      initialProps: { value: 'initialValue' },
    });

    expect(result.current.current).toBe('initialValue');

    rerender({ value: 'newValue' });
    expect(result.current.current).toBe('newValue');
  });

  it('should store the latest value even after multiple updates', () => {
    const { result, rerender } = renderHook(({ value }) => useLatestRef(value), {
      initialProps: { value: 'value1' },
    });

    rerender({ value: 'value2' });
    expect(result.current.current).toBe('value2');

    rerender({ value: 'value3' });
    expect(result.current.current).toBe('value3');

    rerender({ value: 'value4' });
    expect(result.current.current).toBe('value4');
  });
});