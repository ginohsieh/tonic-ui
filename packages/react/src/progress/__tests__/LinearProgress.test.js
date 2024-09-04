import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LinearProgress from 'tonic-ui/packages/react/src/progress/LinearProgress';

describe('LinearProgress component', () => {
  it('should render without crashing', () => {
    const { container } = render(<LinearProgress />);
    expect(container).toBeInTheDocument();
  });

  it('should apply default styles', () => {
    const { container } = render(<LinearProgress />);
    const progressElement = container.firstChild;
    expect(progressElement).toHaveStyle('position: relative');
    expect(progressElement).toHaveStyle('overflow: hidden');
  });

  it('should apply custom color', () => {
    const { container } = render(<LinearProgress color="red" />);
    const progressBar = container.firstChild.firstChild;
    expect(progressBar).toHaveStyle('background: red');
  });

  it('should apply determinate styles and props correctly', () => {
    const { container } = render(<LinearProgress variant="determinate" value={50} />);
    const progressBar = container.firstChild.firstChild;
    expect(progressBar).toHaveAttribute('aria-valuenow', '50');
    expect(progressBar).toHaveStyle('clipPath: inset(0 50% 0 0)');
  });

  it('should log error if determinate variant is used without value prop', () => {
    console.error = jest.fn();
    render(<LinearProgress variant="determinate" />);
    expect(console.error).toHaveBeenCalledWith('You need to provide a value prop when using the determinate variant of LinearProgress.');
  });

  it('should apply indeterminate styles correctly', () => {
    const { container } = render(<LinearProgress variant="indeterminate" />);
    const progressBar = container.firstChild.firstChild;
    expect(progressBar).toHaveStyle('animation: 1.6s linear 0.5s infinite');
  });

  it('should apply custom aria attributes', () => {
    const { container } = render(<LinearProgress aria-label="Linear Progress" aria-labelledby="progress-label" />);
    const progressBar = container.firstChild.firstChild;
    expect(progressBar).toHaveAttribute('aria-label', 'Linear Progress');
    expect(progressBar).toHaveAttribute('aria-labelledby', 'progress-label');
  });

  it('should apply custom size', () => {
    const { container } = render(<LinearProgress size="lg" />);
    const progressElement = container.firstChild;
    expect(progressElement).toHaveStyle('height: 3x');
  });

  it('should handle min and max props correctly', () => {
    const { container } = render(<LinearProgress min={0} max={200} value={100} variant="determinate" />);
    const progressBar = container.firstChild.firstChild;
    expect(progressBar).toHaveAttribute('aria-valuemin', '0');
    expect(progressBar).toHaveAttribute('aria-valuemax', '200');
    expect(progressBar).toHaveAttribute('aria-valuenow', '100');
    expect(progressBar).toHaveStyle('clipPath: inset(0 50% 0 0)');
  });
});