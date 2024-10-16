import { renderHook, act } from '@testing-library/react-hooks';
import useLatestRef from '../useLatestRef';

describe('useLatestRef', () => {
  it('should be defined', () => {
    expect(useLatestRef).toBeDefined();
  });

  it('should return an object with a current property', () => {
    const { result } = renderHook(() => useLatestRef('initial value'));
    expect(result.current).toHaveProperty('current', 'initial value');
  });

  it('should update the current property when the value changes', () => {
    let value = 'initial value';
    const { result, rerender } = renderHook(() => useLatestRef(value));

    expect(result.current.current).toBe('initial value');

    // Update the value
    value = 'updated value';
    rerender();
    expect(result.current.current).toBe('updated value');
  });

  it('should not trigger re-renders when updating the ref value', () => {
    const renderCount = jest.fn();
    let value = 'initial value';

    const { result, rerender } = renderHook(() => {
      renderCount();
      return useLatestRef(value);
    });

    expect(renderCount).toHaveBeenCalledTimes(1);

    // Update the value
    value = 'updated value';
    rerender();

    expect(renderCount).toHaveBeenCalledTimes(1);
    expect(result.current.current).toBe('updated value');
  });
});