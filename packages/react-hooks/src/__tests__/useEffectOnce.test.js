import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import useEffectOnce from '../useEffectOnce';

describe('useEffectOnce', () => {
  it('should be defined', () => {
    expect(useEffectOnce).toBeDefined();
  });

  it('should invoke effect only once', () => {
    const effect = jest.fn();

    const TestComponent = () => {
      useEffectOnce(effect);
      return <div />;
    };

    const { rerender } = render(<TestComponent />);

    rerender(<TestComponent />);

    expect(effect).toHaveBeenCalledTimes(1);
  });

  it('should clean up effect when component unmounts', () => {
    const cleanup = jest.fn();
    const effect = jest.fn(() => cleanup);

    const TestComponent = () => {
      useEffectOnce(effect);
      return <div />;
    };

    const { unmount } = render(<TestComponent />);

    unmount();

    expect(effect).toHaveBeenCalledTimes(1);
    expect(cleanup).toHaveBeenCalledTimes(1);
  });

  it('should execute effect immediately after mount', () => {
    const effect = jest.fn();

    const TestComponent = () => {
      useEffectOnce(effect);
      return <div />;
    };

    render(<TestComponent />);

    expect(effect).toHaveBeenCalledTimes(1);
  });
});