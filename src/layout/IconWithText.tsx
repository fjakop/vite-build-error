import React from 'react';
import {Image} from 'react-bootstrap';

export default ({iconSrc, text}: {iconSrc: string; text: string}) => {
  return (
    <div className='d-flex align-items-end' data-testid='icon-with-text'>
      <Image thumbnail alt='icon' src={iconSrc} className='me-2 mb-1' /> <h5>{text}</h5>
    </div>
  );
};
