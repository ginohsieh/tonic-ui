import { renderHook, act } from '@testing-library/react-hooks';
import useMediaQuery from './useMediaQuery';

describe('useMediaQuery', () => {
  beforeEach(() => {
    // Mock matchMedia
    window.matchMedia = jest.fn().mockImplementation(query => {
      return {
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
      };
    });
  });

  it('should be defined', () => {
    expect(useMediaQuery).toBeDefined();
  });

  it('should return false when media query does not match', () => {
    const { result } = renderHook(() => useMediaQuery('(max-width: 600px)'));
    expect(result.current).toBe(false);
  });

  it('should return true when media query matches', () => {
    window.matchMedia = jest.fn().mockImplementation(query => {
      return {
        matches: true,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
      };
    });
    const { result } = renderHook(() => useMediaQuery('(max-width: 600px)'));
    expect(result.current).toBe(true);
  });

  it('should update value when media query changes', () => {
    let listener = null;
    window.matchMedia = jest.fn().mockImplementation(query => {
      const mql = {
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(fn => {
          listener = fn;
        }),
        removeListener: jest.fn(),
      };
      return mql;
    });

    const { result } = renderHook(() => useMediaQuery('(max-width: 600px)'));

    expect(result.current).toBe(false);

    // Simulate a media query change
    act(() => {
      listener && listener({ matches: true });
    });

    expect(result.current).toBe(true);
  });
});