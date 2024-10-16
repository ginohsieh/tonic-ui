import { renderHook, act } from '@testing-library/react-hooks';
import { useToggle } from './index';

describe('useToggle', () => {
  it('should be defined', () => {
    expect(useToggle).toBeDefined();
  });

  it('should initialize with the default value', () => {
    const { result } = renderHook(() => useToggle());
    const [value] = result.current;
    expect(value).toBe(false);
  });

  it('should initialize with the provided value', () => {
    const { result } = renderHook(() => useToggle(true));
    const [value] = result.current;
    expect(value).toBe(true);
  });

  it('should toggle the value', () => {
    const { result } = renderHook(() => useToggle());
    const [initialValue, toggle] = result.current;

    // Initial value should be false
    expect(initialValue).toBe(false);

    act(() => {
      toggle();
    });

    const [nextValue] = result.current;
    // Value should be toggled to true
    expect(nextValue).toBe(true);

    act(() => {
      toggle();
    });

    const [finalValue] = result.current;
    // Value should be toggled back to false
    expect(finalValue).toBe(false);
  });

  it('should toggle the value with an initial value of true', () => {
    const { result } = renderHook(() => useToggle(true));
    const [initialValue, toggle] = result.current;

    // Initial value should be true
    expect(initialValue).toBe(true);

    act(() => {
      toggle();
    });

    const [nextValue] = result.current;
    // Value should be toggled to false
    expect(nextValue).toBe(false);

    act(() => {
      toggle();
    });

    const [finalValue] = result.current;
    // Value should be toggled back to true
    expect(finalValue).toBe(true);
  });
});