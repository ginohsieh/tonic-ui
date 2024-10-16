import { renderHook, act } from '@testing-library/react';
import useCopyToClipboard from '../useCopyToClipboard';

describe('useCopyToClipboard', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(useCopyToClipboard).toBeDefined();
  });

  it('should return initial state as false', () => {
    const { result } = renderHook(() => useCopyToClipboard());
    const [isCopied] = result.current;
    expect(isCopied).toBe(false);
  });

  it('should copy text to clipboard', async () => {
    const { result } = renderHook(() => useCopyToClipboard());
    const [, copy] = result.current;

    // Mock the clipboard API
    const writeTextMock = jest.fn();
    navigator.clipboard = {
      writeText: writeTextMock,
    };

    act(() => {
      copy('Hello World');
    });

    expect(writeTextMock).toHaveBeenCalledWith('Hello World');
  });

  it('should set isCopied to true after copying text', async () => {
    jest.useFakeTimers();
    const { result } = renderHook(() => useCopyToClipboard());
    const [isCopied, copy] = result.current;

    const writeTextMock = jest.fn().mockResolvedValue();
    navigator.clipboard = {
      writeText: writeTextMock,
    };

    act(() => {
      copy('Hello World');
    });

    expect(result.current[0]).toBe(true);

    // Fast-forward until all timers have been executed
    jest.runAllTimers();

    expect(result.current[0]).toBe(false);
    jest.useRealTimers();
  });

  it('should handle clipboard write failure', async () => {
    const { result } = renderHook(() => useCopyToClipboard());
    const [, copy] = result.current;

    const writeTextMock = jest.fn().mockRejectedValue(new Error('Failed to copy'));
    navigator.clipboard = {
      writeText: writeTextMock,
    };

    const consoleErrorMock = jest.spyOn(console, 'error').mockImplementation(() => {});

    act(() => {
      copy('Hello World');
    });

    expect(writeTextMock).toHaveBeenCalledWith('Hello World');
    expect(consoleErrorMock).toHaveBeenCalledWith('Failed to copy: ', expect.any(Error));

    consoleErrorMock.mockRestore();
  });

  it('should warn if clipboard is not supported', () => {
    const { result } = renderHook(() => useCopyToClipboard());
    const [, copy] = result.current;

    const originalClipboard = navigator.clipboard;
    delete navigator.clipboard;

    const consoleWarnMock = jest.spyOn(console, 'warn').mockImplementation(() => {});

    act(() => {
      copy('Hello World');
    });

    expect(consoleWarnMock).toHaveBeenCalledWith('Clipboard not supported');

    consoleWarnMock.mockRestore();
    navigator.clipboard = originalClipboard;
  });
});