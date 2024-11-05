import { screen } from '@testing-library/react';
import { testA11y } from '@tonic-ui/react/test-utils/accessibility';
import { render } from '@tonic-ui/react/test-utils/render';
import { TextLabel, theme } from '@tonic-ui/react/src';
import React from 'react';

describe('TextLabel', () => {
  it('should render correctly', async () => {
    const renderOptions = {
      useCSSVariables: true,
    };
    const { container } = render(
      <TextLabel data-testid="TextLabel">
        TextLabel
      </TextLabel>,
      renderOptions
    );

    expect(screen.getByTestId('TextLabel').tagName).toBe('LABEL');

    expect(container).toMatchSnapshot();

    await testA11y(container);
  });

  it('should match expected font size and line height', () => {
    render(
      <>
        <TextLabel size="xs" data-testid="xs">xs</TextLabel>
        <TextLabel size="sm" data-testid="sm">sm</TextLabel>
        <TextLabel size="md" data-testid="md">md</TextLabel>
        <TextLabel size="lg" data-testid="lg">lg</TextLabel>
        <TextLabel size="xl" data-testid="xl">xl</TextLabel>
        <TextLabel size="2xl" data-testid="2xl">2xl</TextLabel>
        <TextLabel size="3xl" data-testid="3xl">3xl</TextLabel>
        <TextLabel size="4xl" data-testid="4xl">4xl</TextLabel>
      </>
    );

    ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'].forEach((size) => {
      expect(screen.getByTestId(size)).toHaveStyle(`font-size: ${theme.fontSizes[size]}; line-height: ${theme.lineHeights[size]};`);
    });
  });

  it('should apply custom styles correctly', () => {
    render(
      <TextLabel data-testid="custom" style={{ color: 'red', fontWeight: 'bold' }}>
        Custom Style
      </TextLabel>
    );

    const element = screen.getByTestId('custom');
    expect(element).toHaveStyle('color: red');
    expect(element).toHaveStyle('font-weight: bold');
  });

  it('should support ref forwarding', () => {
    const ref = React.createRef();
    render(
      <TextLabel ref={ref}>With Ref</TextLabel>
    );

    expect(ref.current).toBeInstanceOf(HTMLLabelElement);
  });
});