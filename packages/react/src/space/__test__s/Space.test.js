import React from 'react';
import { render } from '@testing-library/react';
import { Space } from '../index';
import '@testing-library/jest-dom/extend-expect';

describe('Space component', () => {
  it('should render without crashing', () => {
    const { container } = render(<Space />);
    expect(container).toBeTruthy();
  });

  it('should forward refs correctly', () => {
    const ref = React.createRef();
    render(<Space ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });

  it('should accept and apply custom props', () => {
    const { container } = render(<Space data-testid="space-test" />);
    expect(container.firstChild).toHaveAttribute('data-testid', 'space-test');
  });

  it('should have inline-flex display style', () => {
    const { container } = render(<Space />);
    expect(container.firstChild).toHaveStyle('display: inline-flex');
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<Space />);
    expect(asFragment()).toMatchSnapshot();
  });
});