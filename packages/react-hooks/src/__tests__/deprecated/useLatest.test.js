import { renderHook } from '@testing-library/react-hooks';
import useLatest from '../../deprecated/useLatest';

describe('useLatest', () => {
  it('should be defined', () => {
    expect(useLatest).toBeDefined();
  });

  it('should return a ref object', () => {
    const { result } = renderHook(() => useLatest('test'));
    expect(result.current).toHaveProperty('current', 'test');
  });

  it('should update the ref value when the value changes', () => {
    let value = 'initial';
    const { result, rerender } = renderHook(() => useLatest(value));

    // First render, ref value should be 'initial'
    expect(result.current.current).toBe('initial');

    // Change the value
    value = 'updated';
    rerender();

    // After rerender, ref value should be 'updated'
    expect(result.current.current).toBe('updated');
  });

  it('should maintain the same ref object between renders', () => {
    const { result, rerender } = renderHook(() => useLatest('test'));

    const firstRef = result.current;
    rerender();
    const secondRef = result.current;

    // The ref object should remain the same between renders
    expect(firstRef).toBe(secondRef);
  });
});