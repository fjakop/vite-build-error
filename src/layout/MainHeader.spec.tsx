import {describe, expect, it} from 'vitest';
import {render, screen} from '@testing-library/react';
import React from 'react';
import MainHeader from './MainHeader';

describe('MainHeader', () => {
  it('renders with main-header-content', () => {
    render(<MainHeader pending={false} title={'title'} />);

    const icon = screen.getByTestId('main-header-content');
    expect(icon).toBeDefined();
  });

  it('renders with main-header-content and main-header-back-button', () => {
    render(<MainHeader pending={false} title={'title'} backButton={{action:() => {}, tooltip: ''}}/>);

    const content = screen.getByTestId('main-header-content');
    expect(content).toBeDefined();

    const backButton = screen.getByTestId('main-header-back-button');
    expect(backButton).toBeDefined();
  });
});