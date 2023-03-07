import React from 'react';
import {FaExclamationTriangle} from 'react-icons/fa';

export default ({message, details}: {message: string; details?: string}) => {
  return (
    <div className='d-flex m-2'>
      <FaExclamationTriangle className='text-danger me-2 mt-1' />
      <div>
        <div>{message}</div>
        {details && <div>{details}</div>}
      </div>
    </div>
  );
};
