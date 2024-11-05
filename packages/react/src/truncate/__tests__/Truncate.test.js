import { render } from '@testing-library/react';
import { Truncate } from '@tonic-ui/react/src';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';

describe('Truncate', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Truncate width={120}>
        This is a very long text that will be truncated
      </Truncate>
    );

    expect(container).toMatchSnapshot();
  });

  it('should apply correct styles for truncation', () => {
    const { getByText } = render(
      <Truncate width={120}>
        This is a very long text that will be truncated
      </Truncate>
    );

    const textElement = getByText('This is a very long text that will be truncated');
    expect(textElement).toHaveStyle({
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      width: '120px',
    });
  });

  it('should handle empty content gracefully', () => {
    const { container } = render(<Truncate width={120} />);

    expect(container.firstChild).toBeEmptyDOMElement();
  });

  it('should handle different widths correctly', () => {
    const { getByText, rerender } = render(
      <Truncate width={100}>
        This is a very long text that will be truncated
      </Truncate>
    );

    let textElement = getByText('This is a very long text that will be truncated');
    expect(textElement).toHaveStyle({
      width: '100px',
    });

    rerender(
      <Truncate width={200}>
        This is a very long text that will be truncated
      </Truncate>
    );

    textElement = getByText('This is a very long text that will be truncated');
    expect(textElement).toHaveStyle({
      width: '200px',
    });
  });

  it('should meet accessibility standards', async () => {
    const { container } = render(
      <Truncate width={120}>
        This is a very long text that will be truncated
      </Truncate>
    );

    await testA11y(container);
  });
});