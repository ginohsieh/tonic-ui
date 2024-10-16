import { renderHook, act } from '@testing-library/react';
import useMediaQuery from '../useMediaQuery';

describe('useMediaQuery', () => {
  beforeAll(() => {
    window.matchMedia = jest.fn().mockImplementation(query => {
      return {
        matches: false,
        media: query,
        addListener: jest.fn(),
        removeListener: jest.fn()
      };
    });
  });

  it('should return false when the media query does not match', () => {
    const { result } = renderHook(() => useMediaQuery('(max-width: 600px)'));
    expect(result.current).toBe(false);
  });

  it('should return true when the media query matches', () => {
    window.matchMedia = jest.fn().mockImplementation(query => {
      return {
        matches: true,
        media: query,
        addListener: jest.fn(),
        removeListener: jest.fn()
      };
    });

    const { result } = renderHook(() => useMediaQuery('(max-width: 600px)'));
    expect(result.current).toBe(true);
  });

  it('should update the matches state when the query changes', () => {
    let mockListener;
    window.matchMedia = jest.fn().mockImplementation(query => {
      const mql = {
        matches: false,
        media: query,
        addListener: jest.fn(listener => {
          mockListener = listener;
        }),
        removeListener: jest.fn()
      };
      return mql;
    });

    const { result, rerender } = renderHook(({ query }) => useMediaQuery(query), {
      initialProps: { query: '(max-width: 600px)' }
    });
    
    expect(result.current).toBe(false);

    act(() => {
      window.matchMedia().matches = true;
      mockListener();
    });

    rerender({ query: '(max-width: 600px)' });

    expect(result.current).toBe(true);
  });

  it('should cleanup the event listener on unmount', () => {
    const mockAddListener = jest.fn();
    const mockRemoveListener = jest.fn();
    window.matchMedia = jest.fn().mockImplementation(query => {
      return {
        matches: false,
        media: query,
        addListener: mockAddListener,
        removeListener: mockRemoveListener
      };
    });

    const { unmount } = renderHook(() => useMediaQuery('(max-width: 600px)'));
    
    expect(mockAddListener).toHaveBeenCalledTimes(1);
    expect(mockRemoveListener).toHaveBeenCalledTimes(0);

    unmount();

    expect(mockRemoveListener).toHaveBeenCalledTimes(1);
  });
});