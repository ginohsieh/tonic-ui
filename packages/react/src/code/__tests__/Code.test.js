import * as moduleExport from '@tonic-ui/react-icons/src';
import * as icons from '@tonic-ui/react-icons/src/icons';
import { screen } from '@testing-library/react';
import { render } from '@tonic-ui/react/test-utils/render';
import { testA11y } from '@tonic-ui/react/test-utils/accessibility';
import { Code } from '@tonic-ui/react/src';
import React from 'react';

// 測試 @tonic-ui/react-icons/src 導出的內容
test('should match expected exports', () => {
  const expectedExports = [
    'SVGIcon',
    'createSVGIcon',
    // icons
    ...Object.keys(icons),
  ];
  const receivedExports = Object.keys(moduleExport);
  expect(receivedExports.sort()).toEqual(expectedExports.sort());
});

// 測試 Code component
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

    expect(screen.getByTestId('Code').tagName).toBe('CODE');
    expect(container).toMatchSnapshot();

    await testA11y(container);
  });

  // 新增一個測試 case, 測試 Code component 接收自定義 className
  it('should accept custom className', () => {
    const className = 'custom-class';
    render((
      <Code data-testid="Code" className={className}>
        Code
      </Code>
    ));
    expect(screen.getByTestId('Code')).toHaveClass(className);
  });

  // 新增一個測試 case, 測試 Code component 接收自定義樣式
  it('should accept custom styles', () => {
    const customStyle = { color: 'red' };
    render((
      <Code data-testid="Code" style={customStyle}>
        Code
      </Code>
    ));
    expect(screen.getByTestId('Code')).toHaveStyle(customStyle);
  });
});