import React from 'react';
import {Col, Row, RowProps} from 'react-bootstrap';

import styled from 'styled-components';
import ButtonCancel from './ButtonCancel';
import ButtonSubmit from './ButtonSubmit';

const UserTaskNavigationRow = ({
  pending,
  onCancel,
  readonly = false,
  ...rowProps
}: RowProps & {pending: boolean; onCancel: () => void; readonly?: boolean}) => {
  return (
    <Row {...rowProps} data-testid='user-task-navigation-row'>
      <Col xl={2} lg={3} md={4} sm={6} xs={12}>
        <StyledCancelButton className='w-100' onClick={onCancel} disabled={pending} data-testid='cancel-button-user-task-navigation-row'>
          <span className='text-nowrap'>{readonly ? 'Zurück zur Aufgabenliste' : 'Bearbeitung abbrechen'}</span>
        </StyledCancelButton>
      </Col>
      {!readonly && (
        <Col xl={2} lg={3} md={4} sm={6} xs={12} className={'mt-2 mt-sm-0'}>
          <StyledSubmitButton className='w-100' disabled={pending} data-testid='submit-button-user-task-navigation-row'>
            <span className='text-nowrap'>Aufgabe abschließen</span>
          </StyledSubmitButton>
        </Col>
      )}
    </Row>
  );
};
export default UserTaskNavigationRow;

const StyledSubmitButton = styled(ButtonSubmit)`
  background: white;
`;
const StyledCancelButton = styled(ButtonCancel)`
  background: white;
`;
