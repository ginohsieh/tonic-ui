import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { LinearProgress } from '..';

describe('LinearProgress', () => {
  it('should render without crashing', () => {
    const { container } = render(<LinearProgress />);
    expect(container.firstChild).toBeTruthy();
  });

  it('should render with the correct default props', () => {
    const { getByRole } = render(<LinearProgress />);
    const progressbar = getByRole('progressbar');
    
    expect(progressbar).toHaveAttribute('aria-valuemin', '0');
    expect(progressbar).toHaveAttribute('aria-valuemax', '100');
    expect(progressbar).not.toHaveAttribute('aria-valuenow');
    expect(progressbar).toHaveStyle('clip-path: none');
  });

  it('should render determinate variant with correct value', () => {
    const { getByRole } = render(<LinearProgress variant="determinate" value={50} />);
    const progressbar = getByRole('progressbar');
    
    expect(progressbar).toHaveAttribute('aria-valuemin', '0');
    expect(progressbar).toHaveAttribute('aria-valuemax', '100');
    expect(progressbar).toHaveAttribute('aria-valuenow', '50');
    expect(progressbar).toHaveStyle('clip-path: inset(0 50% 0 0)');
  });

  it('should render with custom min and max values', () => {
    const { getByRole } = render(<LinearProgress variant="determinate" value={50} min={0} max={200} />);
    const progressbar = getByRole('progressbar');

    expect(progressbar).toHaveAttribute('aria-valuemin', '0');
    expect(progressbar).toHaveAttribute('aria-valuemax', '200');
    expect(progressbar).toHaveAttribute('aria-valuenow', '50');
    expect(progressbar).toHaveStyle('clip-path: inset(0 75% 0 0)');
  });

  it('should render with custom size and color', () => {
    const { container } = render(<LinearProgress size="lg" color="red:50" />);
    const progress = container.firstChild;
    const progressbar = progress.firstChild;

    // Here we assume you have custom styles for size "lg" and color "red:50"
    expect(progress).toHaveClass('lg');
    expect(progressbar).toHaveClass('red-50');
  });

  it('should console error if "determinate" variant is used without value', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    render(<LinearProgress variant="determinate" />);
    expect(consoleErrorSpy).toHaveBeenCalledWith('You need to provide a value prop when using the determinate variant of LinearProgress.');

    consoleErrorSpy.mockRestore();
  });
});