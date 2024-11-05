import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '@tonic-ui/react/test-utils/render';
import { Collapse, Toast } from '@tonic-ui/react/src';
import { useToggle } from '@tonic-ui/react-hooks/src';
import { callEventHandlers, transitionDuration } from '@tonic-ui/utils/src';
import React from 'react';

describe('Toast', () => {
  it('should render correctly', async () => {
    const user = userEvent.setup();
    const message = 'This is a toast message';
    const handleClose = jest.fn();

    const TestComponent = ({ onClose }) => {
      const [isOpen, toggle] = useToggle(true);
      return (
        <Collapse in={isOpen} unmountOnExit>
          <Toast
            appearance="success"
            isClosable
            onClose={callEventHandlers(() => toggle(false), onClose)}
            data-testid="toast"
          >
            {message}
          </Toast>
        </Collapse>
      );
    };

    render(<TestComponent onClose={handleClose} />);

    const toastElement = screen.getByTestId('toast');
    expect(toastElement).toBeInTheDocument();
    expect(toastElement).toHaveTextContent(message);

    const closeButton = screen.getByRole('button');
    await user.click(closeButton);
    expect(handleClose).toHaveBeenCalledTimes(1);

    await waitForElementToBeRemoved(() => screen.getByTestId('toast'), {
      timeout: transitionDuration.standard + 100, // see "transitions/Collapse.js"
    });
  });

  it('should not render when closed', async () => {
    const handleClose = jest.fn();
    const TestComponent = ({ onClose }) => {
      const [isOpen, toggle] = useToggle(false);
      return (
        <Collapse in={isOpen} unmountOnExit>
          <Toast
            appearance="error"
            isClosable
            onClose={callEventHandlers(() => toggle(false), onClose)}
            data-testid="toast"
          >
            This toast should not be visible
          </Toast>
        </Collapse>
      );
    };

    render(<TestComponent onClose={handleClose} />);
    expect(screen.queryByTestId('toast')).toBeNull();
  });

  it('should call onClose when close button is clicked', async () => {
    const user = userEvent.setup();
    const message = 'Another toast message';
    const handleClose = jest.fn();

    const TestComponent = ({ onClose }) => {
      const [isOpen, toggle] = useToggle(true);
      return (
        <Collapse in={isOpen} unmountOnExit>
          <Toast
            appearance="info"
            isClosable
            onClose={callEventHandlers(() => toggle(false), onClose)}
            data-testid="toast"
          >
            {message}
          </Toast>
        </Collapse>
      );
    };

    render(<TestComponent onClose={handleClose} />);

    const closeButton = screen.getByRole('button');
    await user.click(closeButton);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('should render without a close button if isClosable is false', () => {
    const message = 'Toast without close button';

    const TestComponent = () => {
      return (
        <Collapse in={true} unmountOnExit>
          <Toast
            appearance="warning"
            isClosable={false}
            data-testid="toast"
          >
            {message}
          </Toast>
        </Collapse>
      );
    };

    render(<TestComponent />);

    const toastElement = screen.getByTestId('toast');
    expect(toastElement).toBeInTheDocument();
    expect(toastElement).toHaveTextContent(message);
    expect(screen.queryByRole('button')).toBeNull();
  });
});