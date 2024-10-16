import React, { useRef } from 'react';
import { render } from '@testing-library/react';
import useMergeRefs from '../useMergeRefs';

describe('useMergeRefs', () => {
  it('should merge multiple refs into one', () => {
    const ref1 = React.createRef();
    const ref2 = React.createRef();
    const TestComponent = () => {
      const mergedRef = useMergeRefs(ref1, ref2);
      return <div ref={mergedRef}>Test</div>;
    };

    const { container } = render(<TestComponent />);
    const divElement = container.firstChild;
    
    expect(ref1.current).toBe(divElement);
    expect(ref2.current).toBe(divElement);
  });

  it('should support callback refs', () => {
    let callbackRef1Current = null;
    let callbackRef2Current = null;
    const callbackRef1 = jest.fn(node => {
      callbackRef1Current = node;
    });
    const callbackRef2 = jest.fn(node => {
      callbackRef2Current = node;
    });

    const TestComponent = () => {
      const mergedRef = useMergeRefs(callbackRef1, callbackRef2);
      return <div ref={mergedRef}>Test</div>;
    };

    const { container } = render(<TestComponent />);
    const divElement = container.firstChild;

    expect(callbackRef1).toHaveBeenCalledTimes(1);
    expect(callbackRef2).toHaveBeenCalledTimes(1);
    expect(callbackRef1Current).toBe(divElement);
    expect(callbackRef2Current).toBe(divElement);
  });

  it('should work with mixed refs (object and callback refs)', () => {
    const ref1 = React.createRef();
    let callbackRefCurrent = null;
    const callbackRef = jest.fn(node => {
      callbackRefCurrent = node;
    });

    const TestComponent = () => {
      const mergedRef = useMergeRefs(ref1, callbackRef);
      return <div ref={mergedRef}>Test</div>;
    };

    const { container } = render(<TestComponent />);
    const divElement = container.firstChild;

    expect(ref1.current).toBe(divElement);
    expect(callbackRef).toHaveBeenCalledTimes(1);
    expect(callbackRefCurrent).toBe(divElement);
  });

  it('should handle null and undefined refs gracefully', () => {
    const ref1 = React.createRef();
    const TestComponent = () => {
      const mergedRef = useMergeRefs(ref1, null, undefined);
      return <div ref={mergedRef}>Test</div>;
    };

    const { container } = render(<TestComponent />);
    const divElement = container.firstChild;

    expect(ref1.current).toBe(divElement);
  });
});