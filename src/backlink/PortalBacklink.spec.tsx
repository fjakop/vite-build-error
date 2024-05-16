import {describe, it, expect, vitest} from 'vitest';
import {render, screen} from '@testing-library/react';
import React from 'react';
import PortalBacklink from './PortalBacklink';
import {HashRouter} from 'react-router-dom';

describe('Backlink', () => {
  vitest.mock('./backlinkHook.ts', () => {
    return {default: () => 'linktext'};
  });

  const props = {
    id: 'myId',
    searchParams: new URLSearchParams(),
    setSearchParams: () => {}
  }
  it('renders component', () => {
    render(
      <HashRouter>
        <PortalBacklink {...props} />
      </HashRouter>
    );
    expect(screen.getByTestId('portalbacklink-icon')).toBeDefined();
  });
});
