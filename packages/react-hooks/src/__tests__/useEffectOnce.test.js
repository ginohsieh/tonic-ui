import { renderHook } from '@testing-library/react-hooks';
import useEffectOnce from '../useEffectOnce';

describe('useEffectOnce', () => {
  it('should call the effect function only once', () => {
    const effect = jest.fn();
    const { rerender, unmount } = renderHook(() => useEffectOnce(effect));
    
    // Initial render
    expect(effect).toHaveBeenCalledTimes(1);

    // Re-render the component
    rerender();
    expect(effect).toHaveBeenCalledTimes(1);

    // Unmount the component
    unmount();
    expect(effect).toHaveBeenCalledTimes(1);
  });

  it('should clean up effect on unmount', () => {
    const cleanup = jest.fn();
    const effect = jest.fn(() => cleanup);
    const { unmount } = renderHook(() => useEffectOnce(effect));
    
    // Initial render
    expect(effect).toHaveBeenCalledTimes(1);
    expect(cleanup).not.toHaveBeenCalled();

    // Unmount the component
    unmount();
    expect(cleanup).toHaveBeenCalledTimes(1);
  });
});