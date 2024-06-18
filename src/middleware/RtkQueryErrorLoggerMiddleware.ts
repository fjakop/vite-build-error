import {isRejectedWithValue, Middleware, PayloadAction} from '@reduxjs/toolkit';
import {FetchBaseQueryError} from '@reduxjs/toolkit/query/react';
import {isErrorWithMessage, isFetchBaseQueryError, isResultWithError} from './ErrorTypeGuard';
import {UnknownAction} from 'redux';
import {keycloakAuthClient} from '../keycloak-authz';
import {clientMessageService} from '../client-message';

/**
 * Behandelt rejected RTK-Query-Error-Responses.
 * Bei Status 401 wird ein Toaster angezeigt, der über den Ablauf der Session informiert.
 * Für Status > 401 wird ebenfalls ein Toaster angezeigt. Dabei wird versucht eine Fehlermeldung aus den verfügbaren
 * Daten zu ermitteln.
 */
const rtkQueryErrorLoggerMiddleware =
  (messageSessionTimeout: string): Middleware =>
  _api =>
  next =>
  action => {
    const handleRejectErrorMessage = (action: PayloadAction<unknown>) => {
      if (isFetchBaseQueryError(action.payload)) {
        handleFetchBaseQueryErrorMessage(action, action.payload);
      } else {
        errorMessageOrDefault(action);
      }
    };

    const handleFetchBaseQueryErrorMessage = (action: PayloadAction<unknown>, error: FetchBaseQueryError) => {
      if (error.status === 401 && keycloakAuthClient.tokenParsed) {
        clientMessageService.showWarningMessage(messageSessionTimeout);
      } else if (isNumber(error.status) && error.status > 401) {
        if (isErrorWithMessage(error.data)) {
          clientMessageService.showErrorMessage(error.data.message);
        } else {
          errorMessageOrDefault(action);
        }
      }
    };

    const errorMessageOrDefault = (action: UnknownAction) => {
      if (isResultWithError(action) && isErrorWithMessage(action.error)) {
        clientMessageService.showErrorMessage(action.error.message);
      } else {
        clientMessageService.showErrorMessage('Ein unerwarteter Fehler ist aufgetreten.');
      }
    };

    const isNumber = (x: any): x is number => {
      return typeof x === 'number';
    };

    if (isRejectedWithValue(action)) {
      handleRejectErrorMessage(action);
    }
    return next(action);
  };

export default rtkQueryErrorLoggerMiddleware;
