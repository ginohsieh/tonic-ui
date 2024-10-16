import { render, act } from '@testing-library/react';
import React, { useEffect, useLayoutEffect } from 'react';
import useIsomorphicEffect from '../useIsomorphicEffect';

describe('useIsomorphicEffect', () => {
  const originalUseLayoutEffect = useLayoutEffect;
  const originalUseEffect = useEffect;

  afterEach(() => {
    // Restore the original hooks
    React.useLayoutEffect = originalUseLayoutEffect;
    React.useEffect = originalUseEffect;
  });

  it('should use useLayoutEffect on the client-side', () => {
    let effectCalled = false;

    const TestComponent = () => {
      useIsomorphicEffect(() => {
        effectCalled = true;
      });

      return <div />;
    };

    render(<TestComponent />);

    expect(effectCalled).toBe(true);
  });

  it('should use useEffect on the server-side', () => {
    let effectCalled = false;

    // Mock window to simulate server-side environment
    const originalWindow = global.window;
    delete global.window;

    const TestComponent = () => {
      useIsomorphicEffect(() => {
        effectCalled = true;
      });

      return <div />;
    };

    render(<TestComponent />);

    expect(effectCalled).toBe(false);

    // Restore window
    global.window = originalWindow;
  });
});