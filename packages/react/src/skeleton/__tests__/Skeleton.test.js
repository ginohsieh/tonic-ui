import { screen } from '@testing-library/react';
import { render } from '@tonic-ui/react/test-utils/render';
import { Skeleton } from '@tonic-ui/react/src';
import { DarkMode, LightMode } from '@tonic-ui/react/src';
import React from 'react';

describe('Skeleton', () => {
  it('should render correctly in dark mode', () => {
    render(
      <DarkMode>
        <Skeleton
          data-testid="dark:text"
          variant="text"
          width={120}
        />
        <Skeleton
          data-testid="dark:rectangle"
          variant="rectangle"
          width={120}
          height={40}
        />
        <Skeleton
          data-testid="dark:circle"
          variant="circle"
          width={40}
          height={40}
        />
      </DarkMode>
    );

    const expectedBackgroundColor = 'rgba(255, 255, 255, 0.08)';

    // text
    expect(screen.getByTestId('dark:text')).toHaveStyle({
      'background-color': expectedBackgroundColor,
      width: '120px',
    });
    // rectangle
    expect(screen.getByTestId('dark:rectangle')).toHaveStyle({
      'background-color': expectedBackgroundColor,
      height: '40px',
      width: '120px',
    });
    // circle
    expect(screen.getByTestId('dark:circle')).toHaveStyle({
      'background-color': expectedBackgroundColor,
      height: '40px',
      width: '40px',
    });
  });

  it('should render correctly in light mode', () => {
    render(
      <LightMode>
        <Skeleton
          data-testid="light:text"
          variant="text"
          width={120}
        />
        <Skeleton
          data-testid="light:rectangle"
          variant="rectangle"
          width={120}
          height={40}
        />
        <Skeleton
          data-testid="light:circle"
          variant="circle"
          width={40}
          height={40}
        />
      </LightMode>
    );

    const expectedBackgroundColor = 'rgba(0, 0, 0, 0.08)';

    // text
    expect(screen.getByTestId('light:text')).toHaveStyle({
      'background-color': expectedBackgroundColor,
      width: '120px',
    });
    // rectangle
    expect(screen.getByTestId('light:rectangle')).toHaveStyle({
      'background-color': expectedBackgroundColor,
      height: '40px',
      width: '120px',
    });
    // circle
    expect(screen.getByTestId('light:circle')).toHaveStyle({
      'background-color': expectedBackgroundColor,
      height: '40px',
      width: '40px',
    });
  });

  it('should render correctly with animation', () => {
    render(
      <Skeleton
        data-testid="animated:skeleton"
        variant="text"
        width={120}
        animation="wave"
      />
    );

    expect(screen.getByTestId('animated:skeleton')).toHaveAttribute('animation', 'wave');
  });

  it('should handle deprecated "rect" variant', () => {
    render(
      <Skeleton
        data-testid="deprecated:skeleton"
        variant="rect"
        width={120}
        height={40}
      />
    );

    expect(screen.getByTestId('deprecated:skeleton')).toHaveStyle({
      width: '120px',
      height: '40px',
    });
  });
});