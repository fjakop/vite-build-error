import React from 'react';
import {Button, ButtonProps} from 'react-bootstrap';
import styled from 'styled-components';

export default (props: ButtonProps) => {
  const myProps: ButtonProps = {...props, variant: 'link'};
  return <StyledSubmitButton {...myProps}>{props.children}</StyledSubmitButton>;
};

/**
 * Styles
 */
const StyledSubmitButton = styled(Button)`
  text-decoration: none;
  padding: 0px;
  margin: 0px;
  border: 0px;
  &:focus {
    box-shadow: none !important;
    color: var(--bs-btn-hover-color);
  }
`;
