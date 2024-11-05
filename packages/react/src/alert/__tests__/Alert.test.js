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

  it('should render with a different severity', () => {
    const message = 'This is a warning alert';
    
    render(
      <Alert
        variant="solid"
        severity="warning"
        data-testid="alert"
      >
        {message}
      </Alert>
    );

    const alertElement = screen.getByTestId('alert');
    expect(alertElement).toBeInTheDocument();
    expect(alertElement).toHaveTextContent(message);
  });

  it('should render without a close button when isClosable is false', () => {
    const message = 'This is a non-closable alert';

    render(
      <Alert
        variant="solid"
        severity="error"
        isClosable={false}
        data-testid="alert"
      >
        {message}
      </Alert>
    );

    const alertElement = screen.getByTestId('alert');
    expect(alertElement).toBeInTheDocument();
    expect(alertElement).toHaveTextContent(message);

    const closeButton = screen.queryByRole('button');
    expect(closeButton).not.toBeInTheDocument();
  });

  it('should render with a custom icon', () => {
    const message = 'This is an alert with a custom icon';
    const customIcon = <span data-testid="custom-icon">⚠️</span>;

    render(
      <Alert
        variant="solid"
        severity="info"
        icon={customIcon}
        data-testid="alert"
      >
        {message}
      </Alert>
    );

    const alertElement = screen.getByTestId('alert');
    expect(alertElement).toBeInTheDocument();
    expect(alertElement).toHaveTextContent(message);

    const iconElement = screen.getByTestId('custom-icon');
    expect(iconElement).toBeInTheDocument();
  });

  it('should render correctly and match snapshot', () => {
    const message = 'This is a snapshot alert';

    const { asFragment } = render(
      <Alert
        variant="solid"
        severity="info"
        data-testid="alert"
      >
        {message}
      </Alert>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});