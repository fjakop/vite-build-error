import React from 'react';
import {Spinner} from 'react-bootstrap';

export default () => {
  return (
    <Spinner animation='border' role='status' size='sm' className='mt-1'>
      <span className='visually-hidden'>Lade...</span>
    </Spinner>
  );
};
