import { render, screen } from '@testing-library/react';
import React, { useRef } from 'react';
import useMergeRefs from '../useMergeRefs';

describe('useMergeRefs', () => {

  it('should merge multiple refs into one', () => {
    const ref1 = React.createRef();
    const ref2 = React.createRef();
    const TestComponent = () => {
      const mergedRef = useMergeRefs(ref1, ref2);
      return <div ref={mergedRef}>Test</div>;
    };

    render(<TestComponent />);

    expect(ref1.current).toBeInstanceOf(HTMLDivElement);
    expect(ref2.current).toBe(ref1.current);
  });

  it('should work with callback refs', () => {
    let ref1Node = null;
    let ref2Node = null;
    const ref1 = (node) => { ref1Node = node; };
    const ref2 = (node) => { ref2Node = node; };
    const TestComponent = () => {
      const mergedRef = useMergeRefs(ref1, ref2);
      return <div ref={mergedRef}>Test</div>;
    };

    render(<TestComponent />);

    expect(ref1Node).toBeInstanceOf(HTMLDivElement);
    expect(ref2Node).toBeInstanceOf(HTMLDivElement);
    expect(ref1Node).toBe(ref2Node);
  });

  it('should work with mixed refs (object and callback)', () => {
    const ref1 = React.createRef();
    let ref2Node = null;
    const ref2 = (node) => { ref2Node = node; };
    const TestComponent = () => {
      const mergedRef = useMergeRefs(ref1, ref2);
      return <div ref={mergedRef}>Test</div>;
    };

    render(<TestComponent />);

    expect(ref1.current).toBeInstanceOf(HTMLDivElement);
    expect(ref2Node).toBeInstanceOf(HTMLDivElement);
    expect(ref1.current).toBe(ref2Node);
  });

  it('should handle changes in refs', () => {
    const ref1 = React.createRef();
    let ref2Node = null;
    const ref2 = (node) => { ref2Node = node; };
    const ref3 = React.createRef();
    const TestComponent = ({ useFirstTwoRefs }) => {
      const mergedRef = useFirstTwoRefs ? useMergeRefs(ref1, ref2) : useMergeRefs(ref1, ref3);
      return <div ref={mergedRef}>Test</div>;
    };

    const { rerender } = render(<TestComponent useFirstTwoRefs={true} />);
    expect(ref1.current).toBeInstanceOf(HTMLDivElement);
    expect(ref2Node).toBeInstanceOf(HTMLDivElement);
    expect(ref1.current).toBe(ref2Node);

    rerender(<TestComponent useFirstTwoRefs={false} />);
    expect(ref1.current).toBeInstanceOf(HTMLDivElement);
    expect(ref3.current).toBeInstanceOf(HTMLDivElement);
    expect(ref2Node).toBe(null);
  });

});