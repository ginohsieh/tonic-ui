import { renderHook } from '@testing-library/react-hooks';
import { useLatestRef } from './index';

describe('useLatestRef', () => {
  it('should initialize ref with initial value', () => {
    const { result } = renderHook(() => useLatestRef('initial'));

    expect(result.current.current).toBe('initial');
  });

  it('should update ref with new value', () => {
    const { result, rerender } = renderHook(({ value }) => useLatestRef(value), {
      initialProps: { value: 'initial' }
    });

    expect(result.current.current).toBe('initial');

    rerender({ value: 'updated' });

    expect(result.current.current).toBe('updated');
  });

  it('should keep the same ref object', () => {
    const { result, rerender } = renderHook(({ value }) => useLatestRef(value), {
      initialProps: { value: 'initial' }
    });

    const firstRef = result.current;

    rerender({ value: 'updated' });

    expect(result.current).toBe(firstRef);
  });

  it('should work with complex objects', () => {
    const complexObject = { a: 1, b: { c: 2 } };
    const updatedComplexObject = { a: 2, b: { c: 3 } };

    const { result, rerender } = renderHook(({ value }) => useLatestRef(value), {
      initialProps: { value: complexObject }
    });

    expect(result.current.current).toEqual(complexObject);

    rerender({ value: updatedComplexObject });

    expect(result.current.current).toEqual(updatedComplexObject);
  });

  it('should not update ref if same value is provided', () => {
    const value = 'constant';
    const { result, rerender } = renderHook(() => useLatestRef(value));

    const firstRef = result.current;
    rerender();

    expect(result.current).toBe(firstRef);
    expect(result.current.current).toBe(value);
  });

  it('should handle undefined initial value', () => {
    const { result } = renderHook(() => useLatestRef(undefined));

    expect(result.current.current).toBeUndefined();
  });
});