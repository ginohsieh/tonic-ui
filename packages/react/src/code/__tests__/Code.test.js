import { screen } from '@testing-library/react';
import { render } from '@tonic-ui/react/test-utils/render';
import { testA11y } from '@tonic-ui/react/test-utils/accessibility';
import { Code } from '@tonic-ui/react/src';
import React from 'react';

describe('Code', () => {
  it('should render correctly', async () => {
    const renderOptions = {
      useCSSVariables: true,
    };
    const { container } = render((
      <Code data-testid="Code">
        Code
      </Code>
    ), renderOptions);

    // 檢查渲染後的標籤名稱
    expect(screen.getByTestId('Code').tagName).toBe('CODE');

    // 檢查渲染後的快照
    expect(container).toMatchSnapshot();

    // 檢查無障礙合規性
    await testA11y(container);
  });

  it('should apply custom styles and props correctly', () => {
    const customStyle = { color: 'red' };
    const customProps = { id: 'custom-id' };
    render(
      <Code data-testid="custom-code" style={customStyle} {...customProps}>
        Custom Code
      </Code>
    );

    const codeElement = screen.getByTestId('custom-code');
    
    // 檢查自定義樣式
    expect(codeElement).toHaveStyle('color: red');
    
    // 檢查自定義屬性
    expect(codeElement).toHaveAttribute('id', 'custom-id');
  });
});