import { renderHook } from '@testing-library/react-hooks';
import { usePrevious } from '../index';

describe('usePrevious', () => {
  
  it('should be defined', () => {
    expect(usePrevious).toBeDefined();
  });

  it('should return undefined on initial render', () => {
    const { result } = renderHook(() => usePrevious(0));
    expect(result.current).toBeUndefined();
  });

  it('should return the previous value after update', () => {
    const { result, rerender } = renderHook(({ count }) => usePrevious(count), {
      initialProps: { count: 0 },
    });

    expect(result.current).toBeUndefined();

    rerender({ count: 1 });
    expect(result.current).toBe(0);

    rerender({ count: 2 });
    expect(result.current).toBe(1);
  });

  it('should work with non-primitive values (objects)', () => {
    const initialObject = { foo: 'bar' };
    const updatedObject = { foo: 'baz' };

    const { result, rerender } = renderHook(({ obj }) => usePrevious(obj), {
      initialProps: { obj: initialObject },
    });

    expect(result.current).toBeUndefined();

    rerender({ obj: updatedObject });
    expect(result.current).toBe(initialObject);
  });

  it('should work with non-primitive values (arrays)', () => {
    const initialArray = [1, 2, 3];
    const updatedArray = [4, 5, 6];

    const { result, rerender } = renderHook(({ arr }) => usePrevious(arr), {
      initialProps: { arr: initialArray },
    });

    expect(result.current).toBeUndefined();

    rerender({ arr: updatedArray });
    expect(result.current).toBe(initialArray);
  });

  it('should not update the previous value if the current value is unchanged', () => {
    const { result, rerender } = renderHook(({ value }) => usePrevious(value), {
      initialProps: { value: 0 },
    });

    expect(result.current).toBeUndefined();

    rerender({ value: 1 });
    expect(result.current).toBe(0);

    rerender({ value: 1 });
    expect(result.current).toBe(0);
  });

});