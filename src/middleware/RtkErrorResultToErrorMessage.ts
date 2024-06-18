import {isErrorWithMessage, isFetchBaseQueryError} from './ErrorTypeGuard';
import {FetchBaseQueryError} from '@reduxjs/toolkit/query';
import {SerializedError} from '@reduxjs/toolkit';

const rtkErrorResultToErrorMessage = (error: FetchBaseQueryError | SerializedError | undefined) => {
  if (!error) {
    return undefined;
  }

  if (isErrorWithMessage(error)) {
    return error.message;
  }
  if (isFetchBaseQueryError(error)) {
    return 'fetch error ' + error.status;
  }
  return 'unexpected error';
};

export default rtkErrorResultToErrorMessage;
