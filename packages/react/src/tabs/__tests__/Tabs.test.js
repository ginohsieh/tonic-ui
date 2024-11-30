import { render, fireEvent } from '@tonic-ui/react/test-utils/render';
import { testA11y } from '@tonic-ui/react/test-utils/accessibility';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@tonic-ui/react/src';
import React from 'react';

describe('Tabs', () => {
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
      </Tabs>,
      renderOptions
    );

    expect(container).toMatchSnapshot();
    await testA11y(container);
  });

  it('should switch between tabs correctly', () => {
    const { getByRole, getByText } = render(
      <Tabs>
        <TabList>
          <Tab>TAB 1</Tab>
          <Tab>TAB 2</Tab>
          <Tab>TAB 3</Tab>
        </TabList>
        <TabPanels>
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
    );

    // Verify initial state
    expect(getByText('Tab Panel 1')).toBeVisible();
    expect(getByText('Tab Panel 2')).not.toBeVisible();
    expect(getByText('Tab Panel 3')).not.toBeVisible();

    // Switch to TAB 2
    fireEvent.click(getByRole('tab', { name: /TAB 2/i }));
    expect(getByText('Tab Panel 1')).not.toBeVisible();
    expect(getByText('Tab Panel 2')).toBeVisible();
    expect(getByText('Tab Panel 3')).not.toBeVisible();

    // Switch to TAB 3
    fireEvent.click(getByRole('tab', { name: /TAB 3/i }));
    expect(getByText('Tab Panel 1')).not.toBeVisible();
    expect(getByText('Tab Panel 2')).not.toBeVisible();
    expect(getByText('Tab Panel 3')).toBeVisible();
  });

  it('should handle disabled tab correctly', () => {
    const { getByRole, getByText } = render(
      <Tabs>
        <TabList>
          <Tab>TAB 1</Tab>
          <Tab>TAB 2</Tab>
          <Tab disabled>TAB 3</Tab>
        </TabList>
        <TabPanels>
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
    );

    // Verify initial state
    expect(getByText('Tab Panel 1')).toBeVisible();
    expect(getByText('Tab Panel 2')).not.toBeVisible();
    expect(getByText('Tab Panel 3')).not.toBeVisible();

    // Try to switch to disabled TAB 3
    fireEvent.click(getByRole('tab', { name: /TAB 3/i }));
    expect(getByText('Tab Panel 1')).toBeVisible();
    expect(getByText('Tab Panel 2')).not.toBeVisible();
    expect(getByText('Tab Panel 3')).not.toBeVisible();
  });

  it('should support controlled mode', () => {
    const ControlledTabs = () => {
      const [index, setIndex] = React.useState(1);
      return (
        <>
          <button onClick={() => setIndex(0)}>Show TAB 1</button>
          <button onClick={() => setIndex(1)}>Show TAB 2</button>
          <Tabs index={index} onChange={i => setIndex(i)}>
            <TabList>
              <Tab>TAB 1</Tab>
              <Tab>TAB 2</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>Tab Panel 1</TabPanel>
              <TabPanel>Tab Panel 2</TabPanel>
            </TabPanels>
          </Tabs>
        </>
      );
    };

    const { getByRole, getByText } = render(<ControlledTabs />);
    
    // Verify initial state
    expect(getByText('Tab Panel 2')).toBeVisible();
    expect(getByText('Tab Panel 1')).not.toBeVisible();

    // Click to show TAB 1
    fireEvent.click(getByText('Show TAB 1'));
    expect(getByText('Tab Panel 1')).toBeVisible();
    expect(getByText('Tab Panel 2')).not.toBeVisible();

    // Click to show TAB 2 again
    fireEvent.click(getByText('Show TAB 2'));
    expect(getByText('Tab Panel 2')).toBeVisible();
    expect(getByText('Tab Panel 1')).not.toBeVisible();
  });
});