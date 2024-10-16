import { renderHook, act } from '@testing-library/react';
import { useToggle } from '../useToggle';

describe('useToggle', () => {
  it('should initialize with the default value false', () => {
    const { result } = renderHook(() => useToggle());

    const [value] = result.current;
    expect(value).toBe(false);
  });

  it('should initialize with the given value', () => {
    const { result } = renderHook(() => useToggle(true));

    const [value] = result.current;
    expect(value).toBe(true);
  });

  it('should toggle the value when the toggle function is called', () => {
    const { result } = renderHook(() => useToggle());

    const [ , toggle] = result.current;

    act(() => {
      toggle();
    });

    const [value] = result.current;
    expect(value).toBe(true);

    act(() => {
      toggle();
    });

    expect(result.current[0]).toBe(false);
  });

  it('should set the value when the setter function is called', () => {
    const { result } = renderHook(() => useToggle());

    const [ , , setValue] = result.current;

    act(() => {
      setValue(true);
    });

    expect(result.current[0]).toBe(true);

    act(() => {
      setValue(false);
    });

    expect(result.current[0]).toBe(false);
  });
});