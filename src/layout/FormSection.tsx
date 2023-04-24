import React, {ReactNode} from 'react';
import {Card, CardProps} from 'react-bootstrap';

const FormSection = ({cardBody, title, highlighted = false, ...cardProps}: CardProps & {cardBody: ReactNode; highlighted?: boolean}) => {
    const myProps = {...cardProps, className: `my-3 ${highlighted ? 'border-primary' : ''}`};
    return (
      <Card {...myProps}>
          <Card.Header className={`${highlighted ? 'text-white bg-primary' : ''}`}>{title}</Card.Header>
          <Card.Body>{cardBody}</Card.Body>
      </Card>
    );
};
export default FormSection;