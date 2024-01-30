import {describe, it, vi, vitest} from 'vitest';
import {render, screen} from '@testing-library/react';
import React from 'react';
import Backlink from './Backlink';
import {HashRouter} from 'react-router-dom';

describe('Backlink', () => {
  vitest.mock('./backlinkHook.ts', () => {
    return {default: () => 'linktext'};
  });

  const props = {
    id: 'myId',
    useSearchParams: vi.fn()
  }
  it('renders component', () => {
    render(
      <HashRouter>
        <Backlink {...props} />
      </HashRouter>
    );
    expect(screen.getByTestId('backlink-chevron')).toBeInTheDocument();
  });
});
