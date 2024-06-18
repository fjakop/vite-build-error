import rtkQueryErrorLoggerMiddleware from './RtkQueryErrorLoggerMiddleware';
import {beforeEach, describe, expect, it, Mock, vi} from 'vitest';
import {clientMessageService} from '../client-message';
import {configureStore} from '@reduxjs/toolkit';

vi.mock('../keycloak-authz', async () => ({
  __esModule: true,
  keycloakAuthClient: {tokenParsed: 'tokenParsed'},
}));

vi.mock('../client-message', async () => ({
  __esModule: true,
  clientMessageService: {
    showErrorMessage: vi.fn(),
    showWarningMessage: vi.fn(),
  },
}));

const fakeNext = vi.fn();
const testAction = {
  meta: {
    arg: {},
    requestId: '',
    requestStatus: 'rejected',
    aborted: false,
    condition: false,
    rejectedWithValue: true,
  },
  payload: undefined,
  type: '',
  error: {},
};

const showErrorMessageMock = clientMessageService.showErrorMessage as Mock;
const showWarningMessageMock = clientMessageService.showWarningMessage as Mock;
const store = configureStore({reducer: {}});
const messageSessionTimeout = 'Session Timeout';

describe('RtkQueryErrorLoggerMiddleware', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });
  it('should handle unexpected reject result', () => {
    rtkQueryErrorLoggerMiddleware(messageSessionTimeout)(store)(fakeNext)(testAction);
    expect(showErrorMessageMock).toBeCalledWith('Ein unerwarteter Fehler ist aufgetreten.');
  });
  it('should handle unexpected reject result with error message', () => {
    rtkQueryErrorLoggerMiddleware(messageSessionTimeout)(store)(fakeNext)({
      ...testAction,
      error: {message: 'error message'},
    });
    expect(showErrorMessageMock).toBeCalledWith('error message');
  });
  it('should handle session timeout', () => {
    rtkQueryErrorLoggerMiddleware(messageSessionTimeout)(store)(fakeNext)({...testAction, payload: {status: 401}});
    expect(showWarningMessageMock).toBeCalledWith(messageSessionTimeout);
  });
  it('should handle response error with message', () => {
    rtkQueryErrorLoggerMiddleware(messageSessionTimeout)(store)(fakeNext)({
      ...testAction,
      payload: {status: 500, data: {message: 'error message'}},
    });
    expect(showErrorMessageMock).toBeCalledWith('error message');
  });
  it('should handle unexpected response error', () => {
    rtkQueryErrorLoggerMiddleware(messageSessionTimeout)(store)(fakeNext)({...testAction, payload: {status: 500}});
    expect(showErrorMessageMock).toBeCalledWith('Ein unerwarteter Fehler ist aufgetreten.');
  });
});
