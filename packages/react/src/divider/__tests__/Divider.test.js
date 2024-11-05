import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Divider, Stack } from '@tonic-ui/react/src';
import React from 'react';

describe('Divider', () => {
  it('should render correctly', async () => {
    const renderOptions = {
      useCSSVariables: true,
    };
    const { container } = render((
      <>
        <Stack direction="column" spacing="4x">
          <Divider variant="solid" orientation="horizontal" />
          <Divider variant="dashed" orientation="horizontal" />
          <Divider variant="dotted" orientation="horizontal" />
        </Stack>
        <Stack direction="row" spacing="4x" height="4x">
          <Divider variant="solid" orientation="vertical" />
          <Divider variant="dashed" orientation="vertical" />
          <Divider variant="dotted" orientation="vertical" />
        </Stack>
      </>
    ), renderOptions);

    expect(container).toMatchSnapshot();
  });

  it('should render with different variants', () => {
    const { getByTestId } = render(
      <>
        <Divider data-testid="solid-divider" variant="solid" />
        <Divider data-testid="dashed-divider" variant="dashed" />
        <Divider data-testid="dotted-divider" variant="dotted" />
      </>
    );

    expect(getByTestId('solid-divider')).toHaveStyle('border-style: solid');
    expect(getByTestId('dashed-divider')).toHaveStyle('border-style: dashed');
    expect(getByTestId('dotted-divider')).toHaveStyle('border-style: dotted');
  });

  it('should render with different orientations', () => {
    const { getByTestId } = render(
      <>
        <Divider data-testid="horizontal-divider" orientation="horizontal" />
        <Divider data-testid="vertical-divider" orientation="vertical" />
      </>
    );

    expect(getByTestId('horizontal-divider')).toHaveStyle('border-width: 0 0 1px 0');
    expect(getByTestId('vertical-divider')).toHaveStyle('border-width: 0 1px 0 0');
  });

  it('should accept and apply custom attributes', () => {
    const { getByTestId } = render(
      <Divider data-testid="custom-divider" aria-label="Custom Divider" />
    );

    expect(getByTestId('custom-divider')).toHaveAttribute('aria-label', 'Custom Divider');
  });

  it('should match the snapshot', () => {
    const { asFragment } = render(
      <Divider variant="solid" orientation="horizontal" />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});