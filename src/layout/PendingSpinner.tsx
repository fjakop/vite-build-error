import React from 'react';
import {Spinner} from 'react-bootstrap';

const PendingSpinner = () => {
  return (
    <Spinner animation='border' role='status' size='sm' className='mt-1'>
      <span className='visually-hidden'>Lade...</span>
    </Spinner>
  );
};
export default PendingSpinner;
