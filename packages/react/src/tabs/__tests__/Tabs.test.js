import { render, fireEvent } from '@tonic-ui/react/test-utils/render';
import { testA11y } from '@tonic-ui/react/test-utils/accessibility';
import { Tabs, TabList, Tab, TabPanels, TabPanel, useTabs } from '@tonic-ui/react/src';
import React from 'react';

describe('Tabs Component', () => {
  it('should render correctly', async () => {
    const renderOptions = {
      useCSSVariables: true,
    };
    const { container } = render(
      <Tabs>
        <TabList>
          <Tab>TAB 1</Tab>
          <Tab>TAB 2</Tab>
          <Tab disabled>TAB 3</Tab>
        </TabList>
        <TabPanels px="3x" py="2x">
          <TabPanel>Tab Panel 1</TabPanel>
          <TabPanel>Tab Panel 2</TabPanel>
          <TabPanel>Tab Panel 3</TabPanel>
        </TabPanels>
      </Tabs>, 
      renderOptions
    );

    expect(container).toMatchSnapshot();

    await testA11y(container);
  });

  it('should handle tab changes correctly', () => {
    const { getByText } = render(
      <Tabs>
        <TabList>
          <Tab>TAB 1</Tab>
          <Tab>TAB 2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Tab Panel 1</TabPanel>
          <TabPanel>Tab Panel 2</TabPanel>
        </TabPanels>
      </Tabs>
    );

    fireEvent.click(getByText('TAB 2'));
    expect(getByText('Tab Panel 2')).toBeVisible();
  });
});

describe('Tab Component', () => {
  it('should render correctly', () => {
    const { container } = render(<Tab>TAB 1</Tab>);
    expect(container).toMatchSnapshot();
  });

  it('should handle click event', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Tab onClick={handleClick}>TAB 1</Tab>);

    fireEvent.click(getByText('TAB 1'));
    expect(handleClick).toHaveBeenCalled();
  });
});

describe('TabList Component', () => {
  it('should render correctly', () => {
    const { container } = render(<TabList>Tab List</TabList>);
    expect(container).toMatchSnapshot();
  });
});

describe('TabPanel Component', () => {
  it('should render correctly', () => {
    const { container } = render(<TabPanel>Tab Panel 1</TabPanel>);
    expect(container).toMatchSnapshot();
  });

  it('should display the correct tab panel', () => {
    const { getByText } = render(
      <Tabs>
        <TabList>
          <Tab>TAB 1</Tab>
          <Tab>TAB 2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Tab Panel 1</TabPanel>
          <TabPanel>Tab Panel 2</TabPanel>
        </TabPanels>
      </Tabs>
    );

    expect(getByText('Tab Panel 1')).toBeVisible();

    fireEvent.click(getByText('TAB 2'));
    expect(getByText('Tab Panel 2')).toBeVisible();
  });
});

describe('TabPanels Component', () => {
  it('should render correctly', () => {
    const { container } = render(<TabPanels>Tab Panels</TabPanels>);
    expect(container).toMatchSnapshot();
  });
});

describe('useTabs Hook', () => {
  it('should provide context correctly', () => {
    const TestComponent = () => {
      const context = useTabs();
      return <div>{context ? 'Context Available' : 'No Context'}</div>;
    };

    const { getByText } = render(
      <Tabs>
        <TabList>
          <Tab>TAB 1</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <TestComponent />
          </TabPanel>
        </TabPanels>
      </Tabs>
    );

    expect(getByText('Context Available')).toBeVisible();
  });
});