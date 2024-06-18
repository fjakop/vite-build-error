import {FetchBaseQueryError} from '@reduxjs/toolkit/query';

export const isFetchBaseQueryError = (error: unknown): error is FetchBaseQueryError => {
  return typeof error === 'object' && error != null && 'status' in error;
};

export const isResultWithError = (result: unknown): result is {error: unknown} => {
  return typeof result === 'object' && result != null && 'error' in result;
};

export const isErrorWithMessage = (error: unknown): error is {message: string} => {
  return typeof error === 'object' && error != null && 'message' in error && typeof (error as any).message === 'string';
};

export const isErrorWithData = (result: unknown): result is {data: unknown} => {
  return typeof result === 'object' && result != null && 'data' in result;
};

export const isErrorWithViolations = (error: unknown): error is {violations: {field: string; message: string}[]} => {
  return (
    typeof error === 'object' &&
    error != null &&
    'violations' in error &&
    Array.isArray(error.violations) &&
    error.violations.length > 0 &&
    error.violations.every(violation => isViolation(violation))
  );
};

const isViolation = (violation: unknown): violation is {field: string; message: string} => {
  return typeof violation === 'object' && violation != null && 'field' in violation && 'message' in violation;
};
