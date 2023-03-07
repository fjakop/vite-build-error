import React from 'react';
import {Button, ButtonProps} from 'react-bootstrap';

export default (props: ButtonProps) => {
  const type: ButtonProps['type'] = 'submit';
  const myProps = {...props, variant: 'outline-primary', type};
  return <Button {...myProps} />;
};
