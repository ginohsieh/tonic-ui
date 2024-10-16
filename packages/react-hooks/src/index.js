import { renderHook, act } from '@testing-library/react-hooks';
import useCopyToClipboard from './useCopyToClipboard';

describe('useCopyToClipboard', () => {
  beforeAll(() => {
    // 模擬 clipboard API
    Object.defineProperty(navigator, 'clipboard', {
      value: {
        writeText: jest.fn().mockImplementation(() => Promise.resolve()),
      },
    });
  });

  it('should be defined', () => {
    expect(useCopyToClipboard).toBeDefined();
  });

  it('should return a function and a boolean', () => {
    const { result } = renderHook(() => useCopyToClipboard());
    const [isCopied, copy] = result.current;

    expect(typeof isCopied).toBe('boolean');
    expect(typeof copy).toBe('function');
  });

  it('should copy text to clipboard and set isCopied to true', async () => {
    const { result } = renderHook(() => useCopyToClipboard());

    await act(async () => {
      result.current[1]('Test text');
    });

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('Test text');
    expect(result.current[0]).toBe(true);
  });

  it('should reset isCopied to false after 1500ms', async () => {
    jest.useFakeTimers();
    const { result } = renderHook(() => useCopyToClipboard());

    await act(async () => {
      result.current[1]('Test text');
    });

    expect(result.current[0]).toBe(true);

    act(() => {
      jest.advanceTimersByTime(1500);
    });

    expect(result.current[0]).toBe(false);
  });

  it('should handle clipboard writeText failure', async () => {
    navigator.clipboard.writeText.mockImplementationOnce(() => Promise.reject());

    const { result } = renderHook(() => useCopyToClipboard());

    await act(async () => {
      result.current[1]('Test text');
    });

    expect(result.current[0]).toBe(false);
  });
});