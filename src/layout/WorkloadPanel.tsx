import React, {ReactNode} from 'react';
import {Card} from 'react-bootstrap';
import styled from 'styled-components';
import MainHeader from './MainHeader';
import ErrorPanel from './ErrorPanel';
import ButtonLink from './ButtonLink';
import UserTaskNavigationRow from './UserTaskNavigationRow';

const WorkloadPanel = ({
  title,
  subTitle,
  pending,
  error,
  onEndEdit,
  readonly = false,
  formElements,
}: {
  title: string;
  subTitle: string;
  pending: boolean;
  onEndEdit: () => void;
  readonly?: boolean;
  formElements?: ReactNode;
  error?: string;
}) => {
  return (
    <Card style={{height: 'calc(100vh - 92px)'}}>
      <Card.Header>
        <MainHeader title={title} subTitle={subTitle} pending={pending} />
      </Card.Header>
      <ScrollContainer>
        {error ? (
          <div className='pt-2'>
            <ErrorPanel message={error} />
            <ButtonLink onClick={onEndEdit} data-testid='cancel-button-workload-panel'>
              Zurück zur Aufgabenliste
            </ButtonLink>
          </div>
        ) : (
          formElements
        )}
      </ScrollContainer>
      {!error && (
        <Card.Footer>
          <UserTaskNavigationRow pending={pending} onCancel={onEndEdit} readonly={readonly} />
        </Card.Footer>
      )}
    </Card>
  );
};
export default WorkloadPanel;

/*
 * Styles
 */

const ScrollContainer = styled(Card.Body)`
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0 var(--bs-card-spacer-y);
`;
