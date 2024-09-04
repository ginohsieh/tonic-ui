import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Spinner from '@tonic-ui/react/src/spinner/Spinner';
import {
  useSpinnerStyle,
  useSpinnerSVGBaseStyle,
  useSpinnerSVGTrackStyle,
  useSpinnerSVGLineStyle,
} from '@tonic-ui/react/src/spinner/styles';

// Mock the style hooks
jest.mock('@tonic-ui/react/src/spinner/styles', () => ({
  useSpinnerStyle: jest.fn().mockReturnValue({}),
  useSpinnerSVGBaseStyle: jest.fn().mockReturnValue({}),
  useSpinnerSVGTrackStyle: jest.fn().mockReturnValue({}),
  useSpinnerSVGLineStyle: jest.fn().mockReturnValue({}),
}));

describe('Spinner', () => {
  it('should render without crashing', () => {
    const { container } = render(<Spinner />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should apply size default prop', () => {
    render(<Spinner />);
    expect(useSpinnerStyle).toHaveBeenCalledWith({ size: 'md' });
  });

  it('should apply custom size prop', () => {
    render(<Spinner size="lg" />);
    expect(useSpinnerStyle).toHaveBeenCalledWith({ size: 'lg' });
  });

  it('should apply custom lineColor and lineWidth props', () => {
    render(<Spinner lineColor="red" lineWidth="2px" />);
    expect(useSpinnerSVGLineStyle).toHaveBeenCalledWith({ size: 'md', lineColor: 'red', lineWidth: '2px' });
  });

  it('should apply custom trackColor and trackWidth props', () => {
    render(<Spinner trackColor="blue" trackWidth="2px" />);
    expect(useSpinnerSVGTrackStyle).toHaveBeenCalledWith({ size: 'md', trackColor: 'blue', trackWidth: '2px' });
  });

  it('should render correct structure', () => {
    const { container } = render(<Spinner />);
    expect(container.querySelector('svg')).toBeInTheDocument();
    expect(container.querySelectorAll('circle')).toHaveLength(2);
  });

  it('should forward refs', () => {
    const ref = React.createRef();
    render(<Spinner ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});