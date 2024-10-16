import React, { useEffect, useRef } from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useEventListener } from '../index';

describe('useEventListener', () => {
  it('should be defined', () => {
    expect(useEventListener).toBeDefined();
  });

  it('should call handler on event trigger', () => {
    const handler = jest.fn();
    const TestComponent = () => {
      useEventListener('click', handler);
      return <div>Test</div>;
    };
    
    const { getByText } = render(<TestComponent />);
    fireEvent.click(getByText('Test'));
    
    expect(handler).toHaveBeenCalled();
  });

  it('should not call handler after component unmount', () => {
    const handler = jest.fn();
    const TestComponent = () => {
      useEventListener('click', handler);
      return <div>Test</div>;
    };
    
    const { getByText, unmount } = render(<TestComponent />);
    unmount();
    fireEvent.click(getByText('Test'));
    
    expect(handler).not.toHaveBeenCalled();
  });

  it('should handle event on specified element', () => {
    const handler = jest.fn();
    const TestComponent = () => {
      const ref = useRef();
      useEventListener('click', handler, ref.current);
      return <div ref={ref}>Test</div>;
    };
    
    const { getByText } = render(<TestComponent />);
    fireEvent.click(getByText('Test'));
    
    expect(handler).toHaveBeenCalled();
  });

  it('should not handle event if element is null', () => {
    const handler = jest.fn();
    const TestComponent = () => {
      const ref = useRef(null);
      useEventListener('click', handler, ref.current);
      return <div>Test</div>;
    };
    
    const { getByText } = render(<TestComponent />);
    fireEvent.click(getByText('Test'));
    
    expect(handler).not.toHaveBeenCalled();
  });

  it('should update handler correctly', () => {
    const initialHandler = jest.fn();
    const updatedHandler = jest.fn();
    
    const TestComponent = ({ handler }) => {
      useEventListener('click', handler);
      return <div>Test</div>;
    };
    
    const { getByText, rerender } = render(<TestComponent handler={initialHandler} />);
    fireEvent.click(getByText('Test'));
    expect(initialHandler).toHaveBeenCalledTimes(1);
    expect(updatedHandler).not.toHaveBeenCalled();
    
    rerender(<TestComponent handler={updatedHandler} />);
    fireEvent.click(getByText('Test'));
    expect(initialHandler).toHaveBeenCalledTimes(1); // Should not be called again
    expect(updatedHandler).toHaveBeenCalled();
  });
});