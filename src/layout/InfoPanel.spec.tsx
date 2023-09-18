import React from 'react';
import {describe, it} from 'vitest';
import {render, screen} from '@testing-library/react';
import InfoPanel from './InfoPanel';

describe('InfoPanel', () => {
  it('renders expected components with details', () => {
    render(<InfoPanel message={'my message'} details={'my details'} />);

    expect(screen.getByText('my message')).toBeInTheDocument();
    expect(screen.getByText('my details')).toBeInTheDocument();
  });

  it('renders expected components without details', () => {
    render(<InfoPanel message={'my message'} />);

    expect(screen.getByText('my message')).toBeInTheDocument();
  });
});
