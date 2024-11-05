import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button, Tooltip } from '@tonic-ui/react/src';
import React from 'react';
import { testA11y } from '@tonic-ui/react/test-utils/accessibility';

describe('Tooltip', () => {
  const tooltipLabel = 'tooltip label';
  const buttonLabel = 'button label';
  const TestComponent = (props) => (
    <Tooltip label={tooltipLabel} {...props}>
      <Button>{buttonLabel}</Button>
    </Tooltip>
  );

  it('should render correctly', async () => {
    const user = userEvent.setup();
    const renderOptions = {
      useCSSVariables: true,
    };
    const { container } = render(<TestComponent />, renderOptions);

    const button = screen.getByText(buttonLabel);
    expect(button).toBeInTheDocument();

    await user.hover(button);

    expect(await screen.findByRole('tooltip')).toBeInTheDocument();

    expect(container).toMatchSnapshot();

    await testA11y(container);
  });

  it('should display a tooltip if `disabled` is set to `false`', async () => {
    const user = userEvent.setup();

    render(<TestComponent disabled={false} />);

    await user.hover(screen.getByText(buttonLabel));

    expect(await screen.findByRole('tooltip')).toBeInTheDocument();
  });

  it('should not display a tooltip if `disabled` is set to `true`', async () => {
    const user = userEvent.setup();

    render(<TestComponent disabled={true} />);

    await user.hover(screen.getByText(buttonLabel));

    await waitFor(() => {
      expect(screen.queryByText(tooltipLabel)).not.toBeInTheDocument();
    });
  });

  it('should display a tooltip and close when clicked if `closeOnClick` is set to `true`', async () => {
    const user = userEvent.setup();

    render(<TestComponent closeOnClick={true} />);

    await user.hover(screen.getByText(buttonLabel));

    expect(await screen.findByRole('tooltip')).toBeInTheDocument();

    // Click
    await user.click(screen.getByText(buttonLabel));

    await waitFor(() => {
      expect(screen.queryByText(tooltipLabel)).not.toBeInTheDocument();
    });
  });

  it('should display a tooltip and close when `Escape` key is pressed if `closeOnEsc` is set to `true`', async () => {
    const user = userEvent.setup();

    render(<TestComponent closeOnEsc={true} />);

    await user.hover(screen.getByText(buttonLabel));

    expect(await screen.findByRole('tooltip')).toBeInTheDocument();

    // Press [Escape]
    await user.keyboard('[Escape]');

    await waitFor(() => {
      expect(screen.queryByText(tooltipLabel)).not.toBeInTheDocument();
    });
  });

  it('should display a tooltip and close when pointer down if `closeOnPointerDown` is set to `true`', async () => {
    const user = userEvent.setup();

    render(<TestComponent closeOnPointerDown={true} />);

    await user.hover(screen.getByText(buttonLabel));

    expect(await screen.findByRole('tooltip')).toBeInTheDocument();

    // Pointer down
    await fireEvent.pointerDown(screen.getByText(buttonLabel));

    await waitFor(() => {
      expect(screen.queryByText(tooltipLabel)).not.toBeInTheDocument();
    });
  });

  it('should display a tooltip with custom placement', async () => {
    const user = userEvent.setup();
    const customPlacement = 'left';

    render(<TestComponent placement={customPlacement} />);

    await user.hover(screen.getByText(buttonLabel));

    const tooltip = await screen.findByRole('tooltip');
    expect(tooltip).toBeInTheDocument();
    expect(tooltip).toHaveAttribute('data-popper-placement', customPlacement);
  });

  it('should render the tooltip with a custom offset', async () => {
    const user = userEvent.setup();
    const customOffset = [10, 20];

    render(<TestComponent offset={customOffset} />);

    await user.hover(screen.getByText(buttonLabel));

    const tooltip = await screen.findByRole('tooltip');
    expect(tooltip).toBeInTheDocument();
    // Checking offset values requires inspection of Popper.js internals
  });

  it('should render the tooltip using a custom TransitionComponent', async () => {
    const user = userEvent.setup();
    const CustomTransition = ({ children, ...props }) => <div {...props}>{children}</div>;

    render(<TestComponent TransitionComponent={CustomTransition} />);

    await user.hover(screen.getByText(buttonLabel));

    const tooltip = await screen.findByRole('tooltip');
    expect(tooltip).toBeInTheDocument();
  });

  it('should handle followCursor correctly', async () => {
    const user = userEvent.setup();

    render(<TestComponent followCursor={true} />);

    const button = screen.getByText(buttonLabel);
    
    await user.hover(button);

    const tooltip = await screen.findByRole('tooltip');
    expect(tooltip).toBeInTheDocument();

    fireEvent.mouseMove(button, { clientX: 100, clientY: 100 });
    expect(tooltip).toHaveStyle('left: 100px');
    expect(tooltip).toHaveStyle('top: 100px');
  });
});