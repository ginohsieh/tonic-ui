import React, { useState } from 'react';
import { render, act } from '@testing-library/react';
import {
  ColorModeProvider,
  ColorStyleProvider,
  colorStyle as defaultColorStyle,
  useColorStyle,
} from '@tonic-ui/react/src';

describe('ColorStyleProvider', () => {
  it('should return the correct color style based on the specified dark mode', () => {
    const colorMode = 'dark';
    const TestComponent = () => {
      const [colorStyle] = useColorStyle({ colorMode });
      return <div>{JSON.stringify(colorStyle)}</div>;
    };
    const { container } = render(
      <ColorStyleProvider value={defaultColorStyle}>
        <TestComponent />
      </ColorStyleProvider>
    );

    const displayedColorStyle = JSON.parse(container.firstChild.textContent);
    expect(displayedColorStyle).toEqual(defaultColorStyle[colorMode]);
  });

  it('should return the correct color style based on the specified light mode', () => {
    const colorMode = 'light';
    const TestComponent = () => {
      const [colorStyle] = useColorStyle({ colorMode });
      return <div>{JSON.stringify(colorStyle)}</div>;
    };
    const { container } = render(
      <ColorStyleProvider value={defaultColorStyle}>
        <TestComponent />
      </ColorStyleProvider>
    );

    const displayedColorStyle = JSON.parse(container.firstChild.textContent);
    expect(displayedColorStyle).toEqual(defaultColorStyle[colorMode]);
  });

  it('should return the correct color style based on the current color mode - dark', () => {
    const colorMode = 'dark';
    const TestComponent = () => {
      const [colorStyle] = useColorStyle();
      return <div>{JSON.stringify(colorStyle)}</div>;
    };
    const { container } = render(
      <ColorModeProvider value={colorMode}>
        <ColorStyleProvider value={defaultColorStyle}>
          <TestComponent />
        </ColorStyleProvider>
      </ColorModeProvider>
    );

    const displayedColorStyle = JSON.parse(container.firstChild.textContent);
    expect(displayedColorStyle).toEqual(defaultColorStyle[colorMode]);
  });

  it('should return the correct color style based on the current color mode - light', () => {
    const colorMode = 'light';
    const TestComponent = () => {
      const [colorStyle] = useColorStyle();
      return <div>{JSON.stringify(colorStyle)}</div>;
    };
    const { container } = render(
      <ColorModeProvider value={colorMode}>
        <ColorStyleProvider value={defaultColorStyle}>
          <TestComponent />
        </ColorStyleProvider>
      </ColorModeProvider>
    );

    const displayedColorStyle = JSON.parse(container.firstChild.textContent);
    expect(displayedColorStyle).toEqual(defaultColorStyle[colorMode]);
  });

  it('should not change the current color style when a controlled value is provided', () => {
    const colorMode = 'dark';
    const TestComponent = ({ colorStyle, setColorStyle }) => {
      const [currentColorStyle, setCurrentColorStyle] = useColorStyle({ colorMode });
      return (
        <div>
          <div>{JSON.stringify(currentColorStyle)}</div>
          <button onClick={() => setCurrentColorStyle(colorStyle)}>Change Color Style</button>
        </div>
      );
    };
    const nextColorStyle = {
      ...defaultColorStyle[colorMode],
      borderColor: {
        primary: 'dodgerblue',
      },
    };
    const { container, getByText } = render(
      <ColorStyleProvider value={defaultColorStyle}>
        <TestComponent colorStyle={nextColorStyle} />
      </ColorStyleProvider>
    );

    const displayedColorStyle = JSON.parse(container.firstChild.firstChild.textContent);
    expect(displayedColorStyle).toEqual(defaultColorStyle[colorMode]);

    act(() => {
      getByText('Change Color Style').click();
    });

    const updatedColorStyle = JSON.parse(container.firstChild.firstChild.textContent);
    expect(updatedColorStyle).toEqual(defaultColorStyle[colorMode]);
  });

  it('changes color style using the onChange callback', () => {
    const colorMode = 'dark';
    const TestComponent = () => {
      const [colorStyle, setColorStyle] = useColorStyle({ colorMode });
      return (
        <div>
          <div>{JSON.stringify(colorStyle)}</div>
          <button onClick={() => setColorStyle({
            ...colorStyle,
            borderColor: {
              primary: 'dodgerblue',
            },
          })}>Change Color Style</button>
        </div>
      );
    };
    const { container, getByText } = render(
      <ColorStyleProvider value={defaultColorStyle}>
        <TestComponent />
      </ColorStyleProvider>
    );

    const displayedColorStyle = JSON.parse(container.firstChild.firstChild.textContent);
    expect(displayedColorStyle).toEqual(defaultColorStyle[colorMode]);

    act(() => {
      getByText('Change Color Style').click();
    });

    const updatedColorStyle = JSON.parse(container.firstChild.firstChild.textContent);
    expect(updatedColorStyle.borderColor.primary).toEqual('dodgerblue');
  });

});