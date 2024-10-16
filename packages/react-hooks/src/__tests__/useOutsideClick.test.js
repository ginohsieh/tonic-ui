import { render, fireEvent } from '@testing-library/react';
import React, { useRef } from 'react';
import { useOutsideClick } from '../index'; 

describe('useOutsideClick', () => {
  const TestComponent = ({ onOutsideClick }) => {
    const ref = useRef();
    useOutsideClick(ref, onOutsideClick);
    return (
      <div>
        <div ref={ref}>Inside</div>
        <div>Outside</div>
      </div>
    );
  };

  it('should call onOutsideClick when clicking outside the element', () => {
    const onOutsideClick = jest.fn();
    const { getByText } = render(<TestComponent onOutsideClick={onOutsideClick} />);

    fireEvent.mouseDown(getByText('Outside'));
    fireEvent.mouseUp(getByText('Outside'));
    expect(onOutsideClick).toHaveBeenCalledTimes(1);
  });

  it('should not call onOutsideClick when clicking inside the element', () => {
    const onOutsideClick = jest.fn();
    const { getByText } = render(<TestComponent onOutsideClick={onOutsideClick} />);

    fireEvent.mouseDown(getByText('Inside'));
    fireEvent.mouseUp(getByText('Inside'));
    expect(onOutsideClick).not.toHaveBeenCalled();
  });

  it('should handle multiple outside clicks', () => {
    const onOutsideClick = jest.fn();
    const { getByText } = render(<TestComponent onOutsideClick={onOutsideClick} />);

    fireEvent.mouseDown(getByText('Outside'));
    fireEvent.mouseUp(getByText('Outside'));
    expect(onOutsideClick).toHaveBeenCalledTimes(1);

    fireEvent.mouseDown(getByText('Outside'));
    fireEvent.mouseUp(getByText('Outside'));
    expect(onOutsideClick).toHaveBeenCalledTimes(2);
  });

  it('should clean up event listeners on unmount', () => {
    const onOutsideClick = jest.fn();
    const { getByText, unmount } = render(<TestComponent onOutsideClick={onOutsideClick} />);

    unmount();

    fireEvent.mouseDown(getByText('Outside'));
    fireEvent.mouseUp(getByText('Outside'));
    expect(onOutsideClick).not.toHaveBeenCalled();
  });
});