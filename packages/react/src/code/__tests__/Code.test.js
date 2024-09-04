describe('Code', () => {
  it('should render correctly', async () => {
    const renderOptions = {
      useCSSVariables: true,
    };
    const { container } = render(
      <Code data-testid="Code">
        Code
      </Code>,
      renderOptions
    );

    // 檢查是否渲染為 <code> 標籤
    expect(screen.getByTestId('Code').tagName).toBe('CODE');

    // 檢查渲染的 DOM 結構是否與快照匹配
    expect(container).toMatchSnapshot();

    // 檢查無障礙 (accessibility)
    await testA11y(container);
  });

  it('should forward refs correctly', () => {
    const ref = React.createRef();
    render(<Code ref={ref}>Code</Code>);

    expect(ref.current).toBeInstanceOf(HTMLElement);
    expect(ref.current.tagName).toBe('CODE');
  });

  it('should apply custom styles correctly', () => {
    render(<Code style={{ color: 'red' }} data-testid="Code">Code</Code>);

    expect(screen.getByTestId('Code')).toHaveStyle('color: red');
  });

  it('should accept and render children correctly', () => {
    render(<Code data-testid="Code">Custom Code Content</Code>);

    expect(screen.getByTestId('Code')).toHaveTextContent('Custom Code Content');
  });
});