import {describe, expect, it} from 'vitest';
import {render, screen} from '@testing-library/react';
import ISODateTimeDisplay from './ISODateTimeDisplay';
import {formatDateAndTime} from './index';

describe('ISODateTimeDisplay', () => {
  it('should render localized date', () => {
    const isoDatetimeString = '2024-10-31T15:00:00Z';
    render(<ISODateTimeDisplay isoDateTimeString={isoDatetimeString}/>)
    expect(
      screen.getAllByText(
         formatDateAndTime(new Date(isoDatetimeString))
      )
    ).toHaveLength(1);
  });
  it('should render fallback value', () => {
    render(<ISODateTimeDisplay displayValueForUndefined='unbefristet' isoDateTimeString={undefined}/>)
    expect(screen.getByText('unbefristet')).toBeDefined();
  })
});
