import * as moduleExport from '@tonic-ui/react-icons/src';
import * as icons from '@tonic-ui/react-icons/src/icons';

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

import { render } from '@tonic-ui/react/test-utils/render';
import { testA11y } from '@tonic-ui/react/test-utils/accessibility';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@tonic-ui/react/src';
import React from 'react';

describe('Tabs', () => {
  it('should render correctly', async () => {
    const renderOptions = {
      useCSSVariables: true,
    };
    const { container } = render((
      <Tabs>
        <TabList>
          <Tab>TAB 1</Tab>
          <Tab>TAB 2</Tab>
          <Tab disabled>TAB 3</Tab>
        </TabList>
        <TabPanels px="3x" py="2x">
          <TabPanel>
            Tab Panel 1
          </TabPanel>
          <TabPanel>
            Tab Panel 2
          </TabPanel>
          <TabPanel>
            Tab Panel 3
          </TabPanel>
        </TabPanels>
      </Tabs>
    ), renderOptions);

    expect(container).toMatchSnapshot();

    await testA11y(container);
  });
});

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Tab from '@tonic-ui/react/src/tabs/Tab';
import useTabs from '@tonic-ui/react/src/tabs/useTabs';

jest.mock('@tonic-ui/react/src/tabs/useTabs');

describe('Tab', () => {
  it('should render correctly', () => {
    useTabs.mockReturnValue({
      registerTab: jest.fn(),
      unregisterTab: jest.fn(),
      onChange: jest.fn(),
      index: 0,
      orientation: 'horizontal',
      variant: 'line',
    });

    const { container } = render(<Tab index={0}>Tab 1</Tab>);
    expect(container).toMatchSnapshot();
  });

  it('should handle click event', () => {
    const onChangeMock = jest.fn();
    useTabs.mockReturnValue({
      registerTab: jest.fn(),
      unregisterTab: jest.fn(),
      onChange: onChangeMock,
      index: 0,
      orientation: 'horizontal',
      variant: 'line',
    });

    const { getByRole } = render(<Tab index={1}>Tab 2</Tab>);
    fireEvent.click(getByRole('tab'));

    expect(onChangeMock).toHaveBeenCalledWith(1);
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import TabList from '@tonic-ui/react/src/tabs/TabList';
import useTabs from '@tonic-ui/react/src/tabs/useTabs';

jest.mock('@tonic-ui/react/src/tabs/useTabs');

describe('TabList', () => {
  it('should render correctly', () => {
    useTabs.mockReturnValue({
      orientation: 'horizontal',
    });

    const { container } = render(<TabList aria-label="Tabs" />);
    expect(container).toMatchSnapshot();
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import TabPanel from '@tonic-ui/react/src/tabs/TabPanel';
import useTabs from '@tonic-ui/react/src/tabs/useTabs';

jest.mock('@tonic-ui/react/src/tabs/useTabs');

describe('TabPanel', () => {
  it('should render correctly', () => {
    useTabs.mockReturnValue({
      registerTabPanel: jest.fn(),
      unregisterTabPanel: jest.fn(),
      index: 0,
    });

    const { container } = render(<TabPanel index={0}>Tab Panel 1</TabPanel>);
    expect(container).toMatchSnapshot();
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import TabPanels from '@tonic-ui/react/src/tabs/TabPanels';

describe('TabPanels', () => {
  it('should render correctly', () => {
    const { container } = render(<TabPanels>Tab Panels</TabPanels>);
    expect(container).toMatchSnapshot();
  });
});

import useTabs from '@tonic-ui/react/src/tabs/useTabs';
import { TabsContext } from '@tonic-ui/react/src/tabs/context';
import React from 'react';
import { renderHook } from '@testing-library/react-hooks';

describe('useTabs', () => {
  it('should throw an error if useContext is not available', () => {
    expect(() => {
      renderHook(() => useTabs());
    }).toThrow('The `useContext` hook is not available with your React version.');
  });

  it('should return context value', () => {
    const contextValue = { index: 0 };
    const wrapper = ({ children }) => (
      <TabsContext.Provider value={contextValue}>
        {children}
      </TabsContext.Provider>
    );
    const { result } = renderHook(() => useTabs(), { wrapper });

    expect(result.current).toEqual(contextValue);
  });
});