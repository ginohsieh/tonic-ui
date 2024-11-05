import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React, { useRef, useEffect } from 'react';
import { Switch } from '@tonic-ui/react/src';

describe('Switch', () => {
  it('should render correctly', async () => {
    const { container } = render((
      <>
        {/* Sizes */}
        <Switch size="sm" name="sizes">Label</Switch>
        <Switch size="md" name="sizes">Label</Switch>
        <Switch size="lg" name="sizes">Label</Switch>

        {/* States */}
        <Switch>Label</Switch>
        <Switch defaultChecked>Label</Switch>
        <Switch disabled>Label</Switch>
        <Switch disabled defaultChecked>Label</Switch>
      </>
    ));

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
        <Switch
          ref={ref}
          inputRef={inputRef}
          defaultChecked
        />
      );
    };

    render(
      <TestComponent />
    );
  });

  it('should call onChange when clicked', () => {
    const handleChange = jest.fn();
    render(<Switch onChange={handleChange}>Label</Switch>);

    const switchElement = screen.getByRole('checkbox');
    fireEvent.click(switchElement);

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('should not call onChange when disabled', () => {
    const handleChange = jest.fn();
    render(<Switch onChange={handleChange} disabled>Label</Switch>);

    const switchElement = screen.getByRole('checkbox');
    fireEvent.click(switchElement);

    expect(handleChange).not.toHaveBeenCalled();
  });

  it('should have correct defaultChecked state', () => {
    render(<Switch defaultChecked>Label</Switch>);

    const switchElement = screen.getByRole('checkbox');
    expect(switchElement).toBeChecked();
  });

  it('should render label correctly', () => {
    render(<Switch>Test Label</Switch>);

    const labelElement = screen.getByText('Test Label');
    expect(labelElement).toBeInTheDocument();
  });

  it('should apply correct size class', () => {
    render(<Switch size="lg">Label</Switch>);

    const switchElement = screen.getByRole('checkbox').closest('label');
    expect(switchElement).toHaveClass('large'); // 假設在 Switch 的 CSS 中有類似 'large' 的 class
  });

  it('should apply correct variant color', () => {
    render(<Switch variantColor="blue">Label</Switch>);

    const switchElement = screen.getByRole('checkbox').closest('label');
    expect(switchElement).toHaveStyle('background-color: blue'); // 假設在 Switch 的 CSS 中有類似 'background-color: blue' 的 style
  });
});