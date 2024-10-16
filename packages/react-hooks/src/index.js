// packages/react-hooks/src/__tests__/useEventListener.test.js
import { render, fireEvent } from '@testing-library/react';
import React, { useState } from 'react';
import { useEventListener } from '../index';

describe('useEventListener', () => {
  it('should attach and detach event listener', () => {
    const mockHandler = jest.fn();
    const TestComponent = () => {
      useEventListener('click', mockHandler);
      return <div>Click me</div>;
    };

    const { getByText, unmount } = render(<TestComponent />);
    const element = getByText('Click me');

    // Trigger click event
    fireEvent.click(element);
    expect(mockHandler).toHaveBeenCalledTimes(1);

    // Unmount component and trigger click event again
    unmount();
    fireEvent.click(element);
    expect(mockHandler).toHaveBeenCalledTimes(1); // Should not be called again
  });

  it('should update handler when it changes', () => {
    const initialHandler = jest.fn();
    const updatedHandler = jest.fn();
    const TestComponent = ({ handler }) => {
      useEventListener('click', handler);
      return <div>Click me</div>;
    };

    const { getByText, rerender } = render(<TestComponent handler={initialHandler} />);
    const element = getByText('Click me');

    // Trigger click event with initial handler
    fireEvent.click(element);
    expect(initialHandler).toHaveBeenCalledTimes(1);
    expect(updatedHandler).toHaveBeenCalledTimes(0);

    // Update handler
    rerender(<TestComponent handler={updatedHandler} />);

    // Trigger click event with updated handler
    fireEvent.click(element);
    expect(initialHandler).toHaveBeenCalledTimes(1); // Should not be called again
    expect(updatedHandler).toHaveBeenCalledTimes(1);
  });

  it('should work with different elements', () => {
    const mockHandler = jest.fn();
    const TestComponent = ({ element }) => {
      useEventListener('click', mockHandler, element);
      return <div>Click other element</div>;
    };

    const { rerender } = render(<div><div id="outside"></div><TestComponent element={document.getElementById('outside')} /></div>);
    const outsideElement = document.getElementById('outside');

    // Trigger click event on outside element
    fireEvent.click(outsideElement);
    expect(mockHandler).toHaveBeenCalledTimes(1);

    // Change element
    rerender(<div><div id="inside"></div><TestComponent element={document.getElementById('inside')} /></div>);
    const insideElement = document.getElementById('inside');

    // Trigger click event on inside element
    fireEvent.click(insideElement);
    expect(mockHandler).toHaveBeenCalledTimes(2);

    // Trigger click event on outside element again
    fireEvent.click(outsideElement);
    expect(mockHandler).toHaveBeenCalledTimes(2); // Should not be called again
  });
});