import { render, screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { testA11y } from '@tonic-ui/react/test-utils/accessibility';
import { Button } from '@tonic-ui/react/src/button';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
} from '@tonic-ui/react/src/popover';

describe('Popover', () => {
  it('should render correctly', async () => {
    const user = userEvent.setup();
    const renderOptions = {
      useCSSVariables: true,
    };

    const { container } = render(
      <Popover>
        <PopoverTrigger data-testid="popover-trigger">
          <Button>Hover me</Button>
        </PopoverTrigger>
        <PopoverContent data-testid="popover-content">
          This is a popover
        </PopoverContent>
      </Popover>,
      renderOptions
    );

    const popoverTrigger = screen.getByTestId('popover-trigger');
    expect(popoverTrigger).toBeInTheDocument();

    await act(() => user.click(popoverTrigger));

    await waitFor(() => {
      const popoverContent = screen.getByTestId('popover-content');
      expect(popoverContent).toHaveTextContent('This is a popover');
    });

    expect(await screen.findByRole('dialog')).toBeInTheDocument();

    expect(container).toMatchSnapshot();

    await testA11y(container);
  });

  it('should handle close on trigger click', async () => {
    const user = userEvent.setup();

    render(
      <Popover>
        <PopoverTrigger data-testid="popover-trigger">
          <Button>Click me</Button>
        </PopoverTrigger>
        <PopoverContent data-testid="popover-content">
          This is a popover
        </PopoverContent>
      </Popover>
    );

    const popoverTrigger = screen.getByTestId('popover-trigger');

    await act(() => user.click(popoverTrigger));
    expect(await screen.findByTestId('popover-content')).toBeVisible();

    await act(() => user.click(popoverTrigger));
    await waitFor(() => expect(screen.queryByTestId('popover-content')).not.toBeInTheDocument());
  });

  it('should render with arrow', async () => {
    const user = userEvent.setup();

    render(
      <Popover>
        <PopoverTrigger data-testid="popover-trigger">
          <Button>Click me</Button>
        </PopoverTrigger>
        <PopoverContent data-testid="popover-content">
          <PopoverArrow />
          This is a popover
        </PopoverContent>
      </Popover>
    );

    const popoverTrigger = screen.getByTestId('popover-trigger');

    await act(() => user.click(popoverTrigger));

    await waitFor(() => {
      const popoverContent = screen.getByTestId('popover-content');
      expect(popoverContent).toHaveTextContent('This is a popover');
      expect(popoverContent.querySelector('[data-popper-arrow]')).toBeInTheDocument();
    });
  });

  it('should support custom header, body, and footer', async () => {
    const user = userEvent.setup();

    render(
      <Popover>
        <PopoverTrigger data-testid="popover-trigger">
          <Button>Click me</Button>
        </PopoverTrigger>
        <PopoverContent data-testid="popover-content">
          <PopoverHeader data-testid="popover-header">Header</PopoverHeader>
          <PopoverBody data-testid="popover-body">Body</PopoverBody>
          <PopoverFooter data-testid="popover-footer">Footer</PopoverFooter>
        </PopoverContent>
      </Popover>
    );

    const popoverTrigger = screen.getByTestId('popover-trigger');

    await act(() => user.click(popoverTrigger));

    await waitFor(() => {
      const popoverContent = screen.getByTestId('popover-content');
      expect(popoverContent).toBeInTheDocument();

      const popoverHeader = screen.getByTestId('popover-header');
      const popoverBody = screen.getByTestId('popover-body');
      const popoverFooter = screen.getByTestId('popover-footer');

      expect(popoverHeader).toHaveTextContent('Header');
      expect(popoverBody).toHaveTextContent('Body');
      expect(popoverFooter).toHaveTextContent('Footer');
    });
  });
});