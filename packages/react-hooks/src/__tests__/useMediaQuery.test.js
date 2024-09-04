import { renderHook } from '@testing-library/react-hooks';
import useMediaQuery from '@tonic-ui/react-hooks/src/useMediaQuery';

const createMockMediaMatcher = (matches) => (query) => ({
  matches: matches[query] ?? false,
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
});

describe('useMediaQuery', () => {
  const originalMatchMedia = global.window.matchMedia;

  beforeEach(() => {
    // Clear mock function called times
    jest.clearAllMocks();

    global.window.matchMedia = createMockMediaMatcher({
      '(min-width: 640px)': true,
      '(min-width: 1024px)': false,
    });
  });

  afterEach(() => {
    global.window.matchMedia = originalMatchMedia;

    // restore the spy created with spyOn
    jest.restoreAllMocks();
  });

  it('should be defined', () => {
    expect(useMediaQuery).toBeDefined();
  });

  it('should return true if media query matches', () => {
    const { result } = renderHook(() => useMediaQuery('(min-width: 640px)'));
    expect(result.current).toBe(true);
  });

  it('should return false if media query does not match', () => {
    const { result } = renderHook(() => useMediaQuery('(min-width: 1280px)'));
    expect(result.current).toBe(false);
  });
});