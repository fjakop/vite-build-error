import {describe, expect, it} from 'vitest';
import {FetchBaseQueryError} from '@reduxjs/toolkit/query';
import {SerializedError} from '@reduxjs/toolkit';
import rtkErrorResultToErrorMessage from './RtkErrorResultToErrorMessage';

describe('RtkErrorResultToErrorMessage', () => {
  it('should return undefined when error is undefined', () => {
    const result = rtkErrorResultToErrorMessage(undefined);
    expect(result).toBeUndefined();
  });

  it('should return status when error is FetchBaseQueryError', () => {
    const error: FetchBaseQueryError = {status: 500, data: ''};
    const result = rtkErrorResultToErrorMessage(error);
    expect(result).toEqual('fetch error 500');
  });

  it('should return message value when error is SerializedError', () => {
    const error: SerializedError = {message: 'error message'};
    const result = rtkErrorResultToErrorMessage(error);
    expect(result).toEqual('error message');
  });

  it('should return unexpected error if no other matches', () => {
    const error = {};
    const result = rtkErrorResultToErrorMessage(error);
    expect(result).toEqual('unexpected error');
  });
});
