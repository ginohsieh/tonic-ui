import { renderHook } from '@testing-library/react-hooks';
import { useEffect, useLayoutEffect } from 'react';
import useIsomorphicEffect from '../packages/react-hooks/src/useIsomorphicEffect';

describe('useIsomorphicEffect', () => {
  it('should use useLayoutEffect in browser environment', () => {
    const originalWindow = global.window;
    global.window = {}; // Mock window object to simulate browser environment

    const effectSpy = jest.spyOn(React, 'useLayoutEffect');
    renderHook(() => useIsomorphicEffect(() => {}));
    expect(effectSpy).toHaveBeenCalled();

    effectSpy.mockRestore();
    global.window = originalWindow; // Restore original window object
  });

  it('should use useEffect in non-browser environment', () => {
    const originalWindow = global.window;
    delete global.window; // Remove window object to simulate non-browser environment

    const effectSpy = jest.spyOn(React, 'useEffect');
    renderHook(() => useIsomorphicEffect(() => {}));
    expect(effectSpy).toHaveBeenCalled();

    effectSpy.mockRestore();
    global.window = originalWindow; // Restore original window object
  });
});