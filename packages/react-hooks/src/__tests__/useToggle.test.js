import { renderHook, act } from '@testing-library/react-hooks';
import useToggle from '../useToggle';

describe('useToggle', () => {
  it('should be defined', () => {
    expect(useToggle).toBeDefined();
  });

  it('should initialize with default false state', () => {
    const { result } = renderHook(() => useToggle());
    const [state] = result.current;
    expect(state).toBe(false);
  });

  it('should initialize with provided initial state', () => {
    const { result } = renderHook(() => useToggle(true));
    const [state] = result.current;
    expect(state).toBe(true);
  });

  it('should toggle state from false to true', () => {
    const { result } = renderHook(() => useToggle());
    const [_, toggle] = result.current;

    act(() => {
      toggle();
    });

    const [state] = result.current;
    expect(state).toBe(true);
  });

  it('should toggle state from true to false', () => {
    const { result } = renderHook(() => useToggle(true));
    const [_, toggle] = result.current;

    act(() => {
      toggle();
    });

    const [state] = result.current;
    expect(state).toBe(false);
  });

  it('should maintain state across multiple toggles', () => {
    const { result } = renderHook(() => useToggle());

    act(() => {
      result.current[1](); // toggle to true
    });

    act(() => {
      result.current[1](); // toggle to false
    });

    act(() => {
      result.current[1](); // toggle to true
    });

    const [state] = result.current;
    expect(state).toBe(true);
  });

  it('should maintain function identity across renders', () => {
    const { result, rerender } = renderHook(() => useToggle());

    const [, toggle1] = result.current;
    rerender();
    const [, toggle2] = result.current;

    expect(toggle1).toBe(toggle2);
  });
});