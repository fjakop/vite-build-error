import React, {ReactNode} from 'react';
import {FaExclamationCircle} from 'react-icons/fa';

export default ({message, details}: {message: string; details?: string | ReactNode}) => {
  return (
    <div className='d-flex m-2'>
      <i>
        <FaExclamationCircle className='text-warning me-2 mb-1' size={'1.1em'} />
      </i>
      <div>
        <strong>{message}</strong>
        {details && <div>{details}</div>}
      </div>
    </div>
  );
};
