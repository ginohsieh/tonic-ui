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

  it('should render AlertCloseButton', () => {
    const TestComponent = () => (
      <Alert isClosable>
        Test Alert
      </Alert>
    );
    render(<TestComponent />);
    const closeButton = screen.getByRole('button', { name: /close/i });
    expect(closeButton).toBeInTheDocument();
  });

  it('should render AlertIcon', () => {
    const TestComponent = () => (
      <Alert severity="success">
        Test Alert
      </Alert>
    );
    render(<TestComponent />);
    const icon = screen.getByRole('img');
    expect(icon).toBeInTheDocument();
  });

  it('should render AlertMessage', () => {
    const message = 'This is an alert message';
    const TestComponent = () => (
      <Alert>
        {message}
      </Alert>
    );
    render(<TestComponent />);
    const alertElement = screen.getByText(message);
    expect(alertElement).toBeInTheDocument();
  });
});