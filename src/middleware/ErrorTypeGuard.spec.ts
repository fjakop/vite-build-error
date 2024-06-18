import {describe, expect, it} from 'vitest';
import {isErrorWithData, isErrorWithMessage, isErrorWithViolations, isFetchBaseQueryError, isResultWithError} from './ErrorTypeGuard';

describe('ErrorTypeGuard', () => {
  it('isFetchBaseQueryError', () => {
    expect(isFetchBaseQueryError('')).toBeFalsy();
    expect(isFetchBaseQueryError({})).toBeFalsy();
    expect(isFetchBaseQueryError({status: {}})).toBeTruthy();
    expect(isFetchBaseQueryError({status: 'foo'})).toBeTruthy();
  });

  it('isResultWithError', () => {
    expect(isResultWithError('')).toBeFalsy();
    expect(isResultWithError({})).toBeFalsy();
    expect(isResultWithError({bla: 'blubb'})).toBeFalsy();
    expect(isResultWithError({error: 'foo'})).toBeTruthy();
    expect(isResultWithError({error: {}})).toBeTruthy();
  });

  it('isErrorWithMessage', () => {
    expect(isErrorWithMessage('{}')).toBeFalsy();
    expect(isErrorWithMessage({})).toBeFalsy();
    expect(isErrorWithMessage({bla: 'blubb'})).toBeFalsy();
    expect(isErrorWithMessage({message: {}})).toBeFalsy();
    expect(isErrorWithMessage({message: 'message'})).toBeTruthy();
  });

  it('isErrorWithData', () => {
    expect(isErrorWithData('')).toBeFalsy();
    expect(isErrorWithData({})).toBeFalsy();
    expect(isErrorWithData({bla: 'blubb'})).toBeFalsy();
    expect(isErrorWithData({data: {}})).toBeTruthy();
    expect(isErrorWithData({data: 'data'})).toBeTruthy();
  });

  it('isErrorWithViolations', () => {
    expect(isErrorWithViolations('')).toBeFalsy();
    expect(isErrorWithViolations({})).toBeFalsy();
    expect(isErrorWithViolations({bla: 'blubb'})).toBeFalsy();
    expect(isErrorWithViolations({violations: {}})).toBeFalsy();
    expect(isErrorWithViolations({violations: ''})).toBeFalsy();
    expect(isErrorWithViolations({violations: []})).toBeFalsy();
    expect(isErrorWithViolations({violations: [{}]})).toBeFalsy();
    expect(isErrorWithViolations({violations: ['']})).toBeFalsy();
    expect(isErrorWithViolations({violations: [{}]})).toBeFalsy();
    expect(isErrorWithViolations({violations: [{field: ''}]})).toBeFalsy();
    expect(isErrorWithViolations({violations: [{message: ''}]})).toBeFalsy();
    expect(isErrorWithViolations({violations: [{field: '', message: ''}, 'wasanderes']})).toBeFalsy();
    expect(isErrorWithViolations({violations: [{field: '', message: ''}]})).toBeTruthy();
  });
});
