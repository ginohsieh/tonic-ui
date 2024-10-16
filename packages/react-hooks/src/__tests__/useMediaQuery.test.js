import { renderHook } from '@testing-library/react-hooks';
import useMediaQuery from '../useMediaQuery';

describe('useMediaQuery', () => {
  let matchMedia;

  beforeEach(() => {
    matchMedia = jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }));
    window.matchMedia = matchMedia;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return false when the query does not match', () => {
    const { result } = renderHook(() => useMediaQuery('(max-width: 600px)'));
    expect(result.current).toBe(false);
  });

  it('should return true when the query matches', () => {
    matchMedia = jest.fn().mockImplementation(query => ({
      matches: true,
      media: query,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }));
    window.matchMedia = matchMedia;

    const { result } = renderHook(() => useMediaQuery('(max-width: 600px)'));
    expect(result.current).toBe(true);
  });

  it('should add a listener on mount and remove it on unmount', () => {
    const addListenerMock = jest.fn();
    const removeListenerMock = jest.fn();

    matchMedia = jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      addListener: addListenerMock,
      removeListener: removeListenerMock,
    }));
    window.matchMedia = matchMedia;

    const { unmount } = renderHook(() => useMediaQuery('(max-width: 600px)'));
    expect(addListenerMock).toHaveBeenCalledTimes(1);

    unmount();
    expect(removeListenerMock).toHaveBeenCalledTimes(1);
  });

  it('should update matches when the media query status changes', () => {
    let listener;
    matchMedia = jest.fn().mockImplementation(query => {
      const mediaQueryList = {
        matches: false,
        media: query,
        addListener: jest.fn(cb => {
          listener = cb;
        }),
        removeListener: jest.fn(),
      };
      return mediaQueryList;
    });
    window.matchMedia = matchMedia;

    const { result } = renderHook(() => useMediaQuery('(max-width: 600px)'));
    expect(result.current).toBe(false);

    // Simulate media query change
    listener && listener({ matches: true });
    expect(result.current).toBe(true);

    // Simulate media query change back
    listener && listener({ matches: false });
    expect(result.current).toBe(false);
  });
});