import { render } from '@testing-library/react';
import { VisuallyHidden } from '../index';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';

describe('VisuallyHidden', () => {
  it('should render correctly', () => {
    const { container } = render(
      <VisuallyHidden>Hidden Content</VisuallyHidden>
    );

    expect(container).toMatchSnapshot();
  });

  it('should render the content but visually hidden', () => {
    const { getByText } = render(
      <VisuallyHidden>Hidden Content</VisuallyHidden>
    );
    const content = getByText('Hidden Content');

    // Check that the content is in the document
    expect(content).toBeInTheDocument();

    // Check that the content is visually hidden
    const styles = window.getComputedStyle(content);
    expect(styles.position).toBe('absolute');
    expect(styles.width).toBe('1px');
    expect(styles.height).toBe('1px');
    expect(styles.padding).toBe('0px');
    expect(styles.border).toBe('0px');
    expect(styles.overflow).toBe('hidden');
    expect(styles.clipPath).toBe('inset(50%)');
    expect(styles.whiteSpace).toBe('nowrap');
  });

  it('should accept and apply additional styles', () => {
    const { getByText } = render(
      <VisuallyHidden style={{ backgroundColor: 'red' }}>Hidden Content</VisuallyHidden>
    );
    const content = getByText('Hidden Content');

    // Check that the additional styles are applied
    const styles = window.getComputedStyle(content);
    expect(styles.backgroundColor).toBe('red');
  });

  it('should forward refs correctly', () => {
    const ref = React.createRef();
    const { getByText } = render(
      <VisuallyHidden ref={ref}>Hidden Content</VisuallyHidden>
    );
    const content = getByText('Hidden Content');

    // Check that the ref is forwarded correctly
    expect(ref.current).toBe(content);
  });
});