import React from 'react';
import {Button, ButtonProps} from 'react-bootstrap';

const ButtonCancel = (props: ButtonProps) => {
  const type: ButtonProps['type'] = 'button';
  const myProps = {...props, variant: 'outline-secondary', type};
  return <Button {...myProps} />;
};
export default ButtonCancel;
