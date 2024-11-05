import { render, screen } from '@testing-library/react';
import { Box, LightMode, useColorMode } from '@tonic-ui/react/src';
import React from 'react';

describe('LightMode', () => {
  it('should render in light mode', () => {
    const TestComponent = () => {
      const [colorMode] = useColorMode();
      return (
        <Box data-testid="color-mode">{colorMode}</Box>
      );
    };

    render(
      <LightMode>
        <TestComponent />
      </LightMode>
    );

    expect(screen.getByTestId('color-mode')).toHaveTextContent('light');
  });

  it('should stay in light mode even after a context change', () => {
    const TestComponent = () => {
      const [colorMode, setColorMode] = useColorMode();
      React.useEffect(() => {
        setColorMode('dark');
      }, [setColorMode]);
      
      return (
        <Box data-testid="color-mode">{colorMode}</Box>
      );
    };

    render(
      <LightMode>
        <TestComponent />
      </LightMode>
    );

    expect(screen.getByTestId('color-mode')).toHaveTextContent('light');
  });

  it('should correctly reset to light mode when used inside DarkMode', () => {
    const TestComponent = () => {
      const [colorMode] = useColorMode();
      return (
        <Box data-testid="color-mode">{colorMode}</Box>
      );
    };

    render(
      <DarkMode>
        <LightMode>
          <TestComponent />
        </LightMode>
      </DarkMode>
    );

    expect(screen.getByTestId('color-mode')).toHaveTextContent('light');
  });
});