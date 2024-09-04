describe('Code', () => {
  it('should render correctly', async () => {
    const renderOptions = {
      useCSSVariables: true,
    };
    const { container } = render((
      <Code data-testid="Code">
        Code
      </Code>
    ), renderOptions);

    // Check if the rendered element is a CODE element
    expect(screen.getByTestId('Code').tagName).toBe('CODE');

    // Snapshot testing
    expect(container).toMatchSnapshot();

    // Accessibility testing
    await testA11y(container);
  });

  it('should forward refs correctly', () => {
    const ref = React.createRef();
    render(<Code ref={ref} data-testid="Code">Code</Code>);
    expect(screen.getByTestId('Code')).toBe(ref.current);
  });

  it('should apply style props correctly', () => {
    const { container } = render(<Code data-testid="Code">Code</Code>);
    const codeElement = screen.getByTestId('Code');

    // Assuming useCodeStyle returns some specific style properties,
    // you might want to check for those styles here.
    // For this example, let's assume it applies a class 'code-style'.
    expect(codeElement).toHaveClass('code-style');
  });

  it('should merge custom props correctly', () => {
    render(<Code data-testid="Code" id="custom-id">Code</Code>);
    const codeElement = screen.getByTestId('Code');

    // Check if custom props are merged correctly
    expect(codeElement).toHaveAttribute('id', 'custom-id');
  });
});