import { renderHook } from '@testing-library/react-hooks';
import { useEffect, useLayoutEffect } from 'react';
import useIsomorphicEffect from '../useIsomorphicEffect';

describe('useIsomorphicEffect', () => {
  let originalWindow;

  beforeAll(() => {
    // Save the original window object
    originalWindow = global.window;
  });

  afterAll(() => {
    // Restore the original window object
    global.window = originalWindow;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should use useLayoutEffect on the client', () => {
    const effectHook = jest.fn();
    const layoutEffectSpy = jest.spyOn(React, 'useLayoutEffect');
    const effectSpy = jest.spyOn(React, 'useEffect');

    renderHook(() => useIsomorphicEffect(effectHook));

    expect(layoutEffectSpy).toHaveBeenCalled();
    expect(effectSpy).not.toHaveBeenCalled();

    layoutEffectSpy.mockRestore();
    effectSpy.mockRestore();
  });

  it('should use useEffect on the server', () => {
    const effectHook = jest.fn();
    const layoutEffectSpy = jest.spyOn(React, 'useLayoutEffect');
    const effectSpy = jest.spyOn(React, 'useEffect');

    // Mocking window to simulate server environment
    delete global.window;

    renderHook(() => useIsomorphicEffect(effectHook));

    expect(effectSpy).toHaveBeenCalled();
    expect(layoutEffectSpy).not.toHaveBeenCalled();

    layoutEffectSpy.mockRestore();
    effectSpy.mockRestore();
  });

  it('executes the effect callback correctly', () => {
    const cleanupMock = jest.fn();
    const effectMock = jest.fn().mockReturnValue(cleanupMock);

    const { unmount } = renderHook(() => useIsomorphicEffect(effectMock));

    expect(effectMock).toHaveBeenCalledTimes(1);
    unmount();
    expect(cleanupMock).toHaveBeenCalledTimes(1);
  });

  it('handles no cleanup function correctly', () => {
    const effectMock = jest.fn();

    const { unmount } = renderHook(() => useIsomorphicEffect(effectMock));

    expect(effectMock).toHaveBeenCalledTimes(1);
    unmount();
    // No cleanup function expected, so nothing to assert here
  });
});