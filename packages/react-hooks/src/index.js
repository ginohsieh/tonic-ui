import { renderHook } from '@testing-library/react-hooks';
import { useEffectOnceWhen } from './index';
import { useState } from 'react';

describe('useEffectOnceWhen', () => {
  it('should be defined', () => {
    expect(useEffectOnceWhen).toBeDefined();
  });

  it('should call the callback when the condition is true', () => {
    const callback = jest.fn();
    renderHook(() => useEffectOnceWhen(callback, true));
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should not call the callback when the condition is false', () => {
    const callback = jest.fn();
    renderHook(() => useEffectOnceWhen(callback, false));
    expect(callback).not.toHaveBeenCalled();
  });

  it('should call the callback only once even if the condition changes to true again', () => {
    const callback = jest.fn();
    const { rerender } = renderHook(
      ({ condition }) => useEffectOnceWhen(callback, condition),
      {
        initialProps: { condition: true },
      }
    );
    expect(callback).toHaveBeenCalledTimes(1);

    rerender({ condition: false });
    rerender({ condition: true });

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should work with dynamic conditions', () => {
    const callback = jest.fn();
    const { rerender } = renderHook(
      ({ condition }) => useEffectOnceWhen(callback, condition),
      {
        initialProps: { condition: false },
      }
    );

    expect(callback).not.toHaveBeenCalled();

    rerender({ condition: true });

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should work with dependencies changing', () => {
    const callback = jest.fn();
    const { rerender } = renderHook(
      ({ deps }) => useEffectOnceWhen(callback, deps.some(dep => dep)),
      {
        initialProps: { deps: [false, false] },
      }
    );

    expect(callback).not.toHaveBeenCalled();

    rerender({ deps: [true, false] });

    expect(callback).toHaveBeenCalledTimes(1);

    rerender({ deps: [true, true] });

    expect(callback).toHaveBeenCalledTimes(1);
  });
});