import React from 'react';
import {render, screen, within} from '@testing-library/react';
import IconWithText from '../layout/IconWithText';
import {describe, expect, it} from 'vitest';

describe('IconWithText', () => {
  it('renders as expected', () => {
    render(<IconWithText text={'foo'} iconSrc={'bar'} />);

    const icon = screen.getByTestId('icon-with-text');
    expect(icon).toHaveClass('d-flex align-items-end');

    const image = within(icon).getByRole('img');
    expect(image).toHaveClass('me-2 img-thumbnail');
    expect(image).toHaveAttribute('alt', 'icon');
    expect(image).toHaveAttribute('src', 'bar');

    const text = within(icon).getByRole('heading');
    expect(text).toHaveTextContent('foo');
  });
});
