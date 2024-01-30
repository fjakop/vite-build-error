import {describe, expect, it, vi} from 'vitest';
import useBacklink from './backlinkHook';

describe('useBacklink', () => {
  const backlink = 'https://foo.bar';

  const searchParams = new URLSearchParams({backlink: backlink});
  const setSearchParams = vi.fn();

  const props = {
    id: 'tmp',
    searchParams: searchParams,
    setSearchParams: setSearchParams,
  };

  vi.mock('react', () => ({
    ...vi.importActual('react'),
    useEffect: () => {},
  }));

  it('renders component', () => {
    const result = useBacklink({...props});
    expect(result).toEqual(backlink);
  });
});
