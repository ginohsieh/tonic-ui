import { render } from '@testing-library/react';
import React, { forwardRef, useRef } from 'react';
import useMergeRefs from '@tonic-ui/react-hooks/src/useMergeRefs';

describe('useMergeRefs', () => {
  const TestComponent = forwardRef((props, ref) => {
    const internalRef = useRef();
    const mergedRefs = useMergeRefs(internalRef, ref);

    return (
      <div
        ref={mergedRefs}
        {...props}
      >
        Test Component
      </div>
    );
  });

  it('should be defined', () => {
    expect(useMergeRefs).toBeDefined();
  });

  it('should merge refs', () => {
    const ref = { current: undefined };
    render(
      <TestComponent ref={ref} />
    );

    expect(ref.current.innerHTML).toBe('Test Component');
  });

  it('should handle function refs', () => {
    const refFn = jest.fn();
    render(
      <TestComponent ref={refFn} />
    );

    expect(refFn).toHaveBeenCalledWith(expect.any(HTMLDivElement));
  });

  it('should handle multiple refs', () => {
    const ref1 = { current: undefined };
    const ref2 = jest.fn();
    render(
      <TestComponent ref={useMergeRefs(ref1, ref2)} />
    );

    expect(ref1.current.innerHTML).toBe('Test Component');
    expect(ref2).toHaveBeenCalledWith(expect.any(HTMLDivElement));
  });

  it('should return null if all refs are null or undefined', () => {
    const result = useMergeRefs(null, undefined);
    expect(result).toBeNull();
  });

  it('should throw an error when ref assignment fails', () => {
    const badRef = {};
    expect(() => {
      render(
        <TestComponent ref={useMergeRefs(badRef)} />
      );
    }).toThrowError(/Cannot assign value/);
  });
});