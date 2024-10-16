import { renderHook, act } from '@testing-library/react-hooks';
import useCopyToClipboard from '../useCopyToClipboard';

describe('useCopyToClipboard', () => {
  it('should copy text to clipboard', () => {
    const { result } = renderHook(() => useCopyToClipboard());

    // Initially, isCopied should be false
    expect(result.current[0]).toBe(false);

    // Mock document.execCommand to always return true
    document.execCommand = jest.fn().mockImplementation(() => true);

    act(() => {
      result.current[1]('Hello, World!');
    });

    // After copying, isCopied should be true
    expect(result.current[0]).toBe(true);
    expect(document.execCommand).toHaveBeenCalledWith('copy');
  });

  it('should not copy non-string and non-number values', () => {
    const { result } = renderHook(() => useCopyToClipboard());

    // Initially, isCopied should be false
    expect(result.current[0]).toBe(false);

    act(() => {
      result.current[1]({});
    });

    // After attempting to copy an object, isCopied should still be false
    expect(result.current[0]).toBe(false);
  });

  it('should handle copy failure', () => {
    const { result } = renderHook(() => useCopyToClipboard());

    // Mock document.execCommand to always throw an error
    document.execCommand = jest.fn().mockImplementation(() => {
      throw new Error('Failed to copy');
    });

    act(() => {
      result.current[1]('Hello, World!');
    });

    // After attempting to copy and failing, isCopied should be false
    expect(result.current[0]).toBe(false);
    expect(document.execCommand).toHaveBeenCalledWith('copy');
  });
});