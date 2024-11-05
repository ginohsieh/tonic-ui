import { render, fireEvent } from '@testing-library/react';
import { Checkbox } from '../index';
import React, { useEffect, useRef } from 'react';

describe('Checkbox', () => {
  it('should render correctly', async () => {
    const renderOptions = {
      useCSSVariables: true,
    };
    const { container } = render((
      <>
        {/* Sizes */}
        <Checkbox size="sm">Label</Checkbox>
        <Checkbox size="md">Label</Checkbox>
        <Checkbox size="lg">Label</Checkbox>

        {/* States */}
        <Checkbox>Label</Checkbox>
        <Checkbox indeterminate>Label</Checkbox>
        <Checkbox defaultChecked>Label</Checkbox>
        <Checkbox disabled>Label</Checkbox>
        <Checkbox disabled indeterminate>Label</Checkbox>
        <Checkbox disabled defaultChecked>Label</Checkbox>
      </>
    ), renderOptions);

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
        <Checkbox
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

  it('should call onChange handler when clicked', () => {
    const handleChange = jest.fn();
    const { getByRole } = render(<Checkbox onChange={handleChange}>Label</Checkbox>);
    const checkbox = getByRole('checkbox');

    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);

    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(2);
  });

  it('should be checked when defaultChecked is true', () => {
    const { getByRole } = render(<Checkbox defaultChecked>Label</Checkbox>);
    const checkbox = getByRole('checkbox');

    expect(checkbox).toBeChecked();
  });

  it('should be disabled when disabled prop is true', () => {
    const { getByRole } = render(<Checkbox disabled>Label</Checkbox>);
    const checkbox = getByRole('checkbox');

    expect(checkbox).toBeDisabled();
  });

  it('should render indeterminate state', () => {
    const { getByRole } = render(<Checkbox indeterminate>Label</Checkbox>);
    const checkbox = getByRole('checkbox');

    expect(checkbox).toHaveAttribute('data-indeterminate', 'true');
  });

  it('should render different sizes', () => {
    const { getByText } = render((
      <>
        <Checkbox size="sm">Small</Checkbox>
        <Checkbox size="md">Medium</Checkbox>
        <Checkbox size="lg">Large</Checkbox>
      </>
    ));

    expect(getByText('Small').parentElement).toHaveClass('size-sm');
    expect(getByText('Medium').parentElement).toHaveClass('size-md');
    expect(getByText('Large').parentElement).toHaveClass('size-lg');
  });
});