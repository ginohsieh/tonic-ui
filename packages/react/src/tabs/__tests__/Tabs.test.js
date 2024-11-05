import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '..';

describe('Tabs', () => {
  it('should render correctly', async () => {
    const { container } = render(
      <Tabs>
        <TabList>
          <Tab>TAB 1</Tab>
          <Tab>TAB 2</Tab>
          <Tab disabled>TAB 3</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Tab Panel 1</TabPanel>
          <TabPanel>Tab Panel 2</TabPanel>
          <TabPanel>Tab Panel 3</TabPanel>
        </TabPanels>
      </Tabs>
    );

    expect(container).toMatchSnapshot();
  });

  it('should switch tabs correctly', () => {
    const { getByText } = render(
      <Tabs>
        <TabList>
          <Tab>TAB 1</Tab>
          <Tab>TAB 2</Tab>
          <Tab>TAB 3</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Tab Panel 1</TabPanel>
          <TabPanel>Tab Panel 2</TabPanel>
          <TabPanel>Tab Panel 3</TabPanel>
        </TabPanels>
      </Tabs>
    );

    expect(getByText('Tab Panel 1')).toBeVisible();

    fireEvent.click(getByText('TAB 2'));
    expect(getByText('Tab Panel 2')).toBeVisible();
    expect(getByText('Tab Panel 1')).not.toBeVisible();

    fireEvent.click(getByText('TAB 3'));
    expect(getByText('Tab Panel 3')).toBeVisible();
    expect(getByText('Tab Panel 2')).not.toBeVisible();
  });

  it('should not switch to disabled tab', () => {
    const { getByText } = render(
      <Tabs>
        <TabList>
          <Tab>TAB 1</Tab>
          <Tab disabled>TAB 2</Tab>
          <Tab>TAB 3</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Tab Panel 1</TabPanel>
          <TabPanel>Tab Panel 2</TabPanel>
          <TabPanel>Tab Panel 3</TabPanel>
        </TabPanels>
      </Tabs>
    );

    expect(getByText('Tab Panel 1')).toBeVisible();

    fireEvent.click(getByText('TAB 2'));
    expect(getByText('Tab Panel 1')).toBeVisible();
    expect(getByText('Tab Panel 2')).not.toBeVisible();
  });

  it('should call onChange when tab is changed', () => {
    const handleChange = jest.fn();
    const { getByText } = render(
      <Tabs onChange={handleChange}>
        <TabList>
          <Tab>TAB 1</Tab>
          <Tab>TAB 2</Tab>
          <Tab>TAB 3</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Tab Panel 1</TabPanel>
          <TabPanel>Tab Panel 2</TabPanel>
          <TabPanel>Tab Panel 3</TabPanel>
        </TabPanels>
      </Tabs>
    );

    fireEvent.click(getByText('TAB 2'));
    expect(handleChange).toHaveBeenCalledWith(1);

    fireEvent.click(getByText('TAB 3'));
    expect(handleChange).toHaveBeenCalledWith(2);
  });

  it('should work with controlled index', () => {
    const { getByText, rerender } = render(
      <Tabs index={1}>
        <TabList>
          <Tab>TAB 1</Tab>
          <Tab>TAB 2</Tab>
          <Tab>TAB 3</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Tab Panel 1</TabPanel>
          <TabPanel>Tab Panel 2</TabPanel>
          <TabPanel>Tab Panel 3</TabPanel>
        </TabPanels>
      </Tabs>
    );

    expect(getByText('Tab Panel 2')).toBeVisible();
    fireEvent.click(getByText('TAB 3'));
    expect(getByText('Tab Panel 2')).toBeVisible(); // Still Tab Panel 2 because it's controlled

    rerender(
      <Tabs index={2}>
        <TabList>
          <Tab>TAB 1</Tab>
          <Tab>TAB 2</Tab>
          <Tab>TAB 3</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Tab Panel 1</TabPanel>
          <TabPanel>Tab Panel 2</TabPanel>
          <TabPanel>Tab Panel 3</TabPanel>
        </TabPanels>
      </Tabs>
    );
    expect(getByText('Tab Panel 3')).toBeVisible();
  });
});