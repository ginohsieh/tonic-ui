import { render, screen, fireEvent } from '@testing-library/react';
import React, { useEffect, useRef } from 'react';
import { Radio, RadioGroup, useRadioGroup } from '../index';

describe('Radio', () => {
  it('should render correctly', () => {
    const { container } = render(
      <>
        <Radio size="sm" name="sizes">Small</Radio>
        <Radio size="md" name="sizes">Medium</Radio>
        <Radio size="lg" name="sizes">Large</Radio>

        <Radio defaultChecked={false}>Unchecked</Radio>
        <Radio defaultChecked>Checked</Radio>
        <Radio disabled>Disabled</Radio>
        <Radio disabled defaultChecked>Checked and Disabled</Radio>
      </>
    );
    expect(container).toMatchSnapshot();
  });

  it('should render correctly with `inputRef` and `ref` props', () => {
    const TestComponent = () => {
      const ref = useRef();
      const inputRef = useRef();

      useEffect(() => {
        expect(ref.current).toBeInstanceOf(HTMLLabelElement);
        expect(inputRef.current.checked).toBe(true);
      }, []);

      return (
        <Radio
          ref={ref}
          inputRef={inputRef}
          defaultChecked
        />
      );
    };

    render(<TestComponent />);
  });
});

describe('RadioGroup', () => {
  it('should render correctly', () => {
    const { container } = render(
      <RadioGroup defaultValue="option1">
        <Radio value="option1">Option 1</Radio>
        <Radio value="option2">Option 2</Radio>
        <Radio value="option3">Option 3</Radio>
      </RadioGroup>
    );
    expect(container).toMatchSnapshot();
  });

  it('should call onChange when a radio button is clicked', () => {
    const handleChange = jest.fn();
    render(
      <RadioGroup onChange={handleChange} defaultValue="option1">
        <Radio value="option1">Option 1</Radio>
        <Radio value="option2">Option 2</Radio>
        <Radio value="option3">Option 3</Radio>
      </RadioGroup>
    );

    fireEvent.click(screen.getByLabelText('Option 2'));
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith('option2');
  });

  it('should update the selected value when props change', () => {
    const { rerender } = render(
      <RadioGroup value="option1">
        <Radio value="option1">Option 1</Radio>
        <Radio value="option2">Option 2</Radio>
        <Radio value="option3">Option 3</Radio>
      </RadioGroup>
    );

    expect(screen.getByLabelText('Option 1').checked).toBe(true);

    rerender(
      <RadioGroup value="option2">
        <Radio value="option1">Option 1</Radio>
        <Radio value="option2">Option 2</Radio>
        <Radio value="option3">Option 3</Radio>
      </RadioGroup>
    );

    expect(screen.getByLabelText('Option 2').checked).toBe(true);
  });
});