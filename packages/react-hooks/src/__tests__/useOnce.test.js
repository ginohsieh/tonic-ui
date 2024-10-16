import React from 'react';
import { render } from '@testing-library/react';
import { useOnce } from '../useOnce';

describe('useOnce', () => {
  it('should be defined', () => {
    expect(useOnce).toBeDefined();
  });

  it('should only run the effect once', () => {
    const effect = jest.fn();
    const TestComponent = () => {
      useOnce(effect);
      return <div>Test</div>;
    };
    
    const { rerender } = render(<TestComponent />);
    rerender(<TestComponent />);
    rerender(<TestComponent />);

    expect(effect).toHaveBeenCalledTimes(1);
  });

  it('should not run the effect again on re-renders', () => {
    const effect = jest.fn();
    const TestComponent = () => {
      useOnce(effect);
      return <div>Test</div>;
    };

    const { rerender } = render(<TestComponent />);
    rerender(<TestComponent />);
    rerender(<TestComponent />);

    expect(effect).not.toHaveBeenCalledTimes(2);
  });

  it('should work with an effect that modifies state', () => {
    const effect = jest.fn();
    const TestComponent = () => {
      const [state, setState] = React.useState(0);
      useOnce(() => {
        effect();
        setState(1);
      });
      return <div>{state}</div>;
    };

    const { rerender, getByText } = render(<TestComponent />);
    expect(getByText('1')).toBeTruthy();
    rerender(<TestComponent />);
    expect(effect).toHaveBeenCalledTimes(1);
  });
});