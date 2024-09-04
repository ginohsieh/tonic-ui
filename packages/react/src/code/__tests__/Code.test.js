import { screen } from '@testing-library/react';
import { render } from '@tonic-ui/react/test-utils/render';
import { testA11y } from '@tonic-ui/react/test-utils/accessibility';
import Code from '@tonic-ui/react/src/code/Code';
import React from 'react';

describe('Code', () => {
  it('should render correctly', async () => {
    const renderOptions = {
      useCSSVariables: true,
    };
    const { container } = render((
      <Code data-testid="Code">
        Code
      </Code>
    ), renderOptions);

    expect(screen.getByTestId('Code').tagName).toBe('CODE');
    expect(container).toMatchSnapshot();
    await testA11y(container);
  });

  it('should pass props correctly', () => {
    const renderOptions = {
      useCSSVariables: true,
    };
    const { container } = render((
      <Code data-testid="Code" className="custom-class" id="custom-id">
        Code
      </Code>
    ), renderOptions);

    const codeElement = screen.getByTestId('Code');
    expect(codeElement).toHaveClass('custom-class');
    expect(codeElement).toHaveAttribute('id', 'custom-id');
  });

  it('should support additional styles', () => {
    const renderOptions = {
      useCSSVariables: true,
    };
    const { container } = render((
      <Code data-testid="Code" style={{ color: 'red' }}>
        Code
      </Code>
    ), renderOptions);

    const codeElement = screen.getByTestId('Code');
    expect(codeElement).toHaveStyle('color: red');
  });
});