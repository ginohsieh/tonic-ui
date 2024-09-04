import React from 'react';
import { render } from '@testing-library/react';
import Space from '@tonic-ui/react/src/space/Space';

describe('Space Component', () => {
  it('should render without crashing', () => {
    const { container } = render(<Space />);
    expect(container).toBeDefined();
  });

  it('should forward refs correctly', () => {
    const ref = React.createRef();
    render(<Space ref={ref} />);
    expect(ref.current).not.toBeNull();
  });

  it('should apply display:inline-flex style by default', () => {
    const { container } = render(<Space />);
    const spaceElement = container.firstChild;
    expect(spaceElement).toHaveStyle('display: inline-flex');
  });

  it('should pass additional props to the Box component', () => {
    const { container } = render(<Space data-testid="space" />);
    const spaceElement = container.firstChild;
    expect(spaceElement).toHaveAttribute('data-testid', 'space');
  });

  it('should match snapshot', () => {
    const { container } = render(<Space />);
    expect(container.firstChild).toMatchSnapshot();
  });
});