import { render, fireEvent } from '@testing-library/react';
import React, { useRef } from 'react';
import { useOutsideClick } from '../index';

const TestComponent = ({ onOutsideClick }) => {
  const ref = useRef();
  useOutsideClick(ref, onOutsideClick);

  return (
    <div>
      <div data-testid="inside-element" ref={ref}>
        Inside
      </div>
      <div data-testid="outside-element">
        Outside
      </div>
    </div>
  );
};

describe('useOutsideClick', () => {
  it('should be defined', () => {
    expect(useOutsideClick).toBeDefined();
  });

  it('should trigger callback when clicking outside the element', () => {
    const handleOutsideClick = jest.fn();
    const { getByTestId } = render(
      <TestComponent onOutsideClick={handleOutsideClick} />
    );

    fireEvent.mouseDown(getByTestId('outside-element'));
    
    expect(handleOutsideClick).toHaveBeenCalledTimes(1);
  });

  it('should not trigger callback when clicking inside the element', () => {
    const handleOutsideClick = jest.fn();
    const { getByTestId } = render(
      <TestComponent onOutsideClick={handleOutsideClick} />
    );

    fireEvent.mouseDown(getByTestId('inside-element'));
    
    expect(handleOutsideClick).not.toHaveBeenCalled();
  });

  it('should not trigger callback after unmounting', () => {
    const handleOutsideClick = jest.fn();
    const { getByTestId, unmount } = render(
      <TestComponent onOutsideClick={handleOutsideClick} />
    );

    unmount();
    
    fireEvent.mouseDown(getByTestId('outside-element'));
    
    expect(handleOutsideClick).not.toHaveBeenCalled();
  });
});