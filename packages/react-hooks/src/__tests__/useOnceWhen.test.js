import { renderHook } from '@testing-library/react';
import useOnceWhen from '../useOnceWhen';

describe('useOnceWhen', () => {
  it('should execute the callback if the condition is true', () => {
    const callback = jest.fn();
    const condition = true;

    renderHook(() => useOnceWhen(callback, condition));

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should not execute the callback if the condition is false', () => {
    const callback = jest.fn();
    const condition = false;

    renderHook(() => useOnceWhen(callback, condition));

    expect(callback).not.toHaveBeenCalled();
  });

  it('should execute the callback only once if the condition is true', () => {
    const callback = jest.fn();
    const condition = true;

    const { rerender } = renderHook(() => useOnceWhen(callback, condition));

    rerender();

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should not execute the callback on rerender if the condition remains false', () => {
    const callback = jest.fn();
    const condition = false;

    const { rerender } = renderHook(() => useOnceWhen(callback, condition));

    rerender();

    expect(callback).not.toHaveBeenCalled();
  });

  it('should execute the callback if the condition changes from false to true', () => {
    const callback = jest.fn();
    let condition = false;

    const { rerender } = renderHook(() => useOnceWhen(callback, condition));

    condition = true;
    rerender();

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should not execute the callback if the condition changes from true to false', () => {
    const callback = jest.fn();
    let condition = true;

    const { rerender } = renderHook(() => useOnceWhen(callback, condition));

    condition = false;
    rerender();

    expect(callback).toHaveBeenCalledTimes(1);
  });
});