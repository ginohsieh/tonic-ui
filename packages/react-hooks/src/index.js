import React, { useRef } from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useOutsideClick } from './useOutsideClick';

describe('useOutsideClick', () => {
  it('should call the callback when clicking outside the element', () => {
    const mockCallback = jest.fn();
    const TestComponent = () => {
      const ref = useRef(null);
      useOutsideClick(ref, mockCallback);
      return <div ref={ref}>Inside</div>;
    };

    const { getByText } = render(<TestComponent />);
    
    // Click outside the element
    fireEvent.mouseDown(document);
    
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });

  it('should not call the callback when clicking inside the element', () => {
    const mockCallback = jest.fn();
    const TestComponent = () => {
      const ref = useRef(null);
      useOutsideClick(ref, mockCallback);
      return <div ref={ref}>Inside</div>;
    };

    const { getByText } = render(<TestComponent />);
    
    // Click inside the element
    fireEvent.mouseDown(getByText('Inside'));
    
    expect(mockCallback).not.toHaveBeenCalled();
  });

  it('should clean up the event listener on unmount', () => {
    const mockCallback = jest.fn();
    const TestComponent = () => {
      const ref = useRef(null);
      useOutsideClick(ref, mockCallback);
      return <div ref={ref}>Inside</div>;
    };

    const { unmount } = render(<TestComponent />);
    
    unmount();
    
    // Click outside the element
    fireEvent.mouseDown(document);
    
    expect(mockCallback).not.toHaveBeenCalled();
  });
});