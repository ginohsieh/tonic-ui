import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '@tonic-ui/react/test-utils/render';
import { Alert, Collapse } from '@tonic-ui/react/src';
import { useToggle } from '@tonic-ui/react-hooks/src';
import { callEventHandlers, transitionDuration } from '@tonic-ui/utils/src';
import React from 'react';

describe('Alert', () => {
  it('should render correctly', async () => {
    const user = userEvent.setup();
    const message = 'This is an alert message';
    const handleClose = jest.fn();

    const TestComponent = ({ onClose }) => {
      const [isOpen, toggle] = useToggle(true);
      return (
        <Collapse in={isOpen} unmountOnExit>
          <Alert
            variant="solid"
            severity="success"
            isClosable
            onClose={callEventHandlers(() => toggle(false), onClose)}
            data-testid="alert"
          >
            {message}
          </Alert>
        </Collapse>
      );
    };

    render(<TestComponent onClose={handleClose} />);

    const alertElement = screen.getByTestId('alert');
    expect(alertElement).toBeInTheDocument();
    expect(alertElement).toHaveTextContent(message);

    const closeButton = screen.getByRole('button');
    await user.click(closeButton);
    expect(handleClose).toHaveBeenCalledTimes(1);

    await waitForElementToBeRemoved(() => screen.getByTestId('alert'), {
      timeout: transitionDuration.standard + 100, // see "transitions/Collapse.js"
    });
  });

  it('should render with different severities', () => {
    const severities = ['success', 'info', 'warning', 'error'];
    const message = 'This is an alert message';

    severities.forEach(severity => {
      const { container } = render(
        <Alert severity={severity} data-testid={`alert-${severity}`}>
          {message}
        </Alert>
      );

      const alertElement = screen.getByTestId(`alert-${severity}`);
      expect(alertElement).toBeInTheDocument();
      expect(alertElement).toHaveTextContent(message);
    });
  });

  it('should render with different variants', () => {
    const variants = ['solid', 'subtle', 'outline'];
    const message = 'This is an alert message';

    variants.forEach(variant => {
      const { container } = render(
        <Alert variant={variant} data-testid={`alert-${variant}`}>
          {message}
        </Alert>
      );

      const alertElement = screen.getByTestId(`alert-${variant}`);
      expect(alertElement).toBeInTheDocument();
      expect(alertElement).toHaveTextContent(message);
    });
  });

  it('should render with a custom icon', () => {
    const customIcon = <span data-testid="custom-icon">!</span>;
    const message = 'This is an alert message';

    const { container } = render(
      <Alert icon={customIcon} data-testid="alert-custom-icon">
        {message}
      </Alert>
    );

    const alertElement = screen.getByTestId('alert-custom-icon');
    const iconElement = screen.getByTestId('custom-icon');
    expect(alertElement).toBeInTheDocument();
    expect(alertElement).toHaveTextContent(message);
    expect(iconElement).toBeInTheDocument();
  });

  it('should call onClose when close button is clicked', async () => {
    const user = userEvent.setup();
    const handleClose = jest.fn();
    const message = 'This is an alert message';

    const { container } = render(
      <Alert isClosable onClose={handleClose} data-testid="alert-closable">
        {message}
      </Alert>
    );

    const alertElement = screen.getByTestId('alert-closable');
    expect(alertElement).toBeInTheDocument();

    const closeButton = screen.getByRole('button');
    await user.click(closeButton);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});