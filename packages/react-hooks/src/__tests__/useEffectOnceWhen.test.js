import { useEffect } from 'react';
import { render, act } from '@testing-library/react';
import React from 'react';
import { useEffectOnceWhen } from '../index';

const TestComponent = ({ condition }) => {
  const [state, setState] = React.useState(0);
  useEffectOnceWhen(() => {
    setState(1);
  }, condition);

  return <div>{state}</div>;
};

const TestComponentWithEffect = ({ condition }) => {
  const [state, setState] = React.useState(0);
  useEffectOnceWhen(() => {
    setState(1);
  }, condition);

  useEffect(() => {
    if (condition) {
      setState(2);
    }
  }, [condition]);

  return <div>{state}</div>;
};

describe('useEffectOnceWhen', () => {
  it('should run effect when condition is true', () => {
    const { container } = render(<TestComponent condition={true} />);
    expect(container.firstChild.textContent).toBe('1');
  });

  it('should not run effect when condition is false', () => {
    const { container } = render(<TestComponent condition={false} />);
    expect(container.firstChild.textContent).toBe('0');
  });

  it('should only run effect once even if condition changes to false', () => {
    const { container, rerender } = render(<TestComponentWithEffect condition={true} />);
    expect(container.firstChild.textContent).toBe('2');

    rerender(<TestComponentWithEffect condition={false} />);
    expect(container.firstChild.textContent).toBe('2');
  });

  it('should only run effect once even if condition is toggled', () => {
    const { container, rerender } = render(<TestComponent condition={true} />);
    expect(container.firstChild.textContent).toBe('1');

    rerender(<TestComponent condition={false} />);
    expect(container.firstChild.textContent).toBe('1');

    rerender(<TestComponent condition={true} />);
    expect(container.firstChild.textContent).toBe('1');
  });

  it('should reset effect when component is re-mounted', () => {
    const { container, unmount } = render(<TestComponent condition={true} />);
    expect(container.firstChild.textContent).toBe('1');

    unmount();
    const { container: newContainer } = render(<TestComponent condition={true} />);
    expect(newContainer.firstChild.textContent).toBe('1');
  });

  it('should not run effect when condition is undefined', () => {
    const { container } = render(<TestComponent condition={undefined} />);
    expect(container.firstChild.textContent).toBe('0');
  });

  it('should run effect when condition is null', () => {
    const { container } = render(<TestComponent condition={null} />);
    expect(container.firstChild.textContent).toBe('1');
  });
});