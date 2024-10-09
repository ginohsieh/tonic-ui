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
});

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import AlertCloseButton from './AlertCloseButton';

describe('AlertCloseButton', () => {
  it('should render correctly', () => {
    render(<AlertCloseButton />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('should handle click events', async () => {
    const handleClick = jest.fn();
    const user = userEvent.setup();

    render(<AlertCloseButton onClick={handleClick} />);
    const button = screen.getByRole('button');
    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

import { render, screen } from '@testing-library/react';
import React from 'react';
import AlertIcon from './AlertIcon';
import { SuccessIcon } from '@tonic-ui/react-icons';

describe('AlertIcon', () => {
  it('should render default icon based on severity', () => {
    render(<AlertIcon />);
    const icon = screen.getByRole('img');
    expect(icon).toBeInTheDocument();
  });

  it('should render custom icon', () => {
    render(<AlertIcon icon={<SuccessIcon />} />);
    const icon = screen.getByRole('img');
    expect(icon).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import React from 'react';
import AlertMessage from './AlertMessage';

describe('AlertMessage', () => {
  it('should render correctly', () => {
    const message = 'This is a test message';
    render(<AlertMessage>{message}</AlertMessage>);
    const messageElement = screen.getByText(message);
    expect(messageElement).toBeInTheDocument();
  });
});

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