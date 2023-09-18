import React from 'react';
import {FaCheckCircle} from 'react-icons/fa';

const SuccessPanel = ({message, details}: {message: string; details?: string}) => {
  return (
    <div className='d-flex m-2'>
      <FaCheckCircle className='text-success me-2 mt-1' />
      <div>
        <div>{message}</div>
        {details && <div>{details}</div>}
      </div>
    </div>
  );
};
export default SuccessPanel;
