import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {
  Tabs, 
  Tab, 
  TabList, 
  TabPanel, 
  TabPanels,
  useTabs
} from '@tonic-ui/react/src';

describe('Tabs', () => {
  it('should render Tabs component correctly', () => {
    const { container } = render(
      <Tabs>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab disabled>Tab 3</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Panel 1</TabPanel>
          <TabPanel>Panel 2</TabPanel>
          <TabPanel>Panel 3</TabPanel>
        </TabPanels>
      </Tabs>
    );

    expect(container).toMatchSnapshot();
  });

  it('should switch tabs correctly', () => {
    const { getByText } = render(
      <Tabs>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Panel 1</TabPanel>
          <TabPanel>Panel 2</TabPanel>
          <TabPanel>Panel 3</TabPanel>
        </TabPanels>
      </Tabs>
    );

    expect(getByText('Panel 1')).toBeVisible();
    expect(getByText('Panel 2')).not.toBeVisible();
    expect(getByText('Panel 3')).not.toBeVisible();

    fireEvent.click(getByText('Tab 2'));
    expect(getByText('Panel 1')).not.toBeVisible();
    expect(getByText('Panel 2')).toBeVisible();
    expect(getByText('Panel 3')).not.toBeVisible();

    fireEvent.click(getByText('Tab 3'));
    expect(getByText('Panel 1')).not.toBeVisible();
    expect(getByText('Panel 2')).not.toBeVisible();
    expect(getByText('Panel 3')).toBeVisible();
  });

  it('should not switch to disabled tab', () => {
    const { getByText } = render(
      <Tabs>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab disabled>Tab 3</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Panel 1</TabPanel>
          <TabPanel>Panel 2</TabPanel>
          <TabPanel>Panel 3</TabPanel>
        </TabPanels>
      </Tabs>
    );

    expect(getByText('Panel 1')).toBeVisible();
    fireEvent.click(getByText('Tab 3'));
    expect(getByText('Panel 1')).toBeVisible();
    expect(getByText('Panel 3')).not.toBeVisible();
  });

  it('should render custom tab content correctly', () => {
    const CustomTab = ({ children, ...props }) => (
      <Tab {...props}>
        <span>{children}</span>
      </Tab>
    );

    const { getByText } = render(
      <Tabs>
        <TabList>
          <CustomTab>Tab 1</CustomTab>
          <CustomTab>Tab 2</CustomTab>
        </TabList>
        <TabPanels>
          <TabPanel>Panel 1</TabPanel>
          <TabPanel>Panel 2</TabPanel>
        </TabPanels>
      </Tabs>
    );

    expect(getByText('Tab 1')).toBeInTheDocument();
    expect(getByText('Tab 2')).toBeInTheDocument();
  });
});

describe('Tab', () => {
  it('should apply selected styles when tab is selected', () => {
    const { getByText } = render(
      <Tabs>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Panel 1</TabPanel>
          <TabPanel>Panel 2</TabPanel>
        </TabPanels>
      </Tabs>
    );

    expect(getByText('Tab 1')).toHaveAttribute('aria-selected', 'true');
    expect(getByText('Tab 2')).toHaveAttribute('aria-selected', 'false');

    fireEvent.click(getByText('Tab 2'));
    expect(getByText('Tab 1')).toHaveAttribute('aria-selected', 'false');
    expect(getByText('Tab 2')).toHaveAttribute('aria-selected', 'true');
  });

  it('should call onClick when tab is clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Tabs>
        <TabList>
          <Tab onClick={handleClick}>Tab 1</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Panel 1</TabPanel>
        </TabPanels>
      </Tabs>
    );

    fireEvent.click(getByText('Tab 1'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

describe('TabPanel', () => {
  it('should apply hidden attribute when tab is not selected', () => {
    const { getByText } = render(
      <Tabs>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Panel 1</TabPanel>
          <TabPanel>Panel 2</TabPanel>
        </TabPanels>
      </Tabs>
    );

    expect(getByText('Panel 1')).toBeVisible();
    expect(getByText('Panel 2')).not.toBeVisible();

    fireEvent.click(getByText('Tab 2'));
    expect(getByText('Panel 1')).not.toBeVisible();
    expect(getByText('Panel 2')).toBeVisible();
  });
});