import {ReactNode} from 'react';
import {Card, Col, Row} from 'react-bootstrap';
import {ButtonLink} from '../layout';
import {formatDateAndTime} from '../datetime';
import styled from 'styled-components';
import {UserTask} from './UserTask';

export type UserTaskRowVariant = 'owner' | 'assignee' | 'candidate' | 'observer';

export const UserTaskColor = {
  assignee: 'primary',
  candidate: 'success',
  observer: 'warning',
  owner: 'secondary',
};

type UserTaskRowPops = {
  userTask: UserTask;
  userId: string;
  userTaskAssignmentComponent: ReactNode;
  editUserTask?: (userTask: UserTask) => void;
  variant: UserTaskRowVariant;
};

const StyledOwner = styled(Card)`
    border-left: 6px solid var(--bs-${UserTaskColor.owner});
`;

const StyledCandidate = styled(Card)`
    border-left: 6px solid var(--bs-${UserTaskColor.candidate});
`;

const StyledAssignee = styled(Card)`
    border-left: 6px solid var(--bs-${UserTaskColor.assignee});
`;

const StyledObserver = styled(Card)`
    border-left: 6px solid var(--bs-${UserTaskColor.observer});
`;

const StyledUserTaskContent = ({children, variant}: {children: ReactNode; variant: UserTaskRowVariant}) => {
  switch (variant) {
    case 'assignee':
      return <StyledAssignee>{children}</StyledAssignee>;
    case 'owner':
      return <StyledOwner>{children}</StyledOwner>;
    case 'candidate':
      return <StyledCandidate>{children}</StyledCandidate>;
    case 'observer':
      return <StyledObserver>{children}</StyledObserver>;
    default:
      return <></>;
  }
};

const UserTaskRow = ({userTask, editUserTask, userTaskAssignmentComponent, userId, variant}: UserTaskRowPops) => {
  const userTaskName = userTask.description;

  const getBearbeitungLabel = () => {
    if (!userTask.assignee) {
      return 'Bearbeitung starten';
    }
    if (userTask.assignee === userId) {
      return 'Bearbeitung fortsetzen';
    }
    return 'Name';
  };

  return (
    <StyledUserTaskContent variant={variant}>
      <Card.Body>
        <Row>
          <Col>
            <div>
              <small className='text-muted mb-1'>#</small>
            </div>
            <div>{userTask.rootProcessBusinessKey}</div>
          </Col>
          <Col xxl={7} xl={6} lg={5}>
            <div>
              <small className='text-muted mb-1'> {editUserTask ? getBearbeitungLabel() : 'Name'}</small>
            </div>
            {(!userTask.assignee || userTask.assignee === userId) && editUserTask ? (
              <ButtonLink onClick={() => editUserTask(userTask)} data-testid='linkToUserTaskEdit'>
                {userTaskName}
              </ButtonLink>
            ) : (
              <div>{userTaskName}</div>
            )}
          </Col>
          <Col>
            <div>
              <small className='text-muted mb-1'>erstellt am</small>
            </div>
            <div data-testid='userTaskCreateTime'>{formatDateAndTime(new Date(userTask.createTime))}</div>
          </Col>
          <Col>
            <div>
              <small className='text-muted mb-1'>in Bearbeitung von</small>
            </div>
            {userTaskAssignmentComponent}
          </Col>
        </Row>
      </Card.Body>
    </StyledUserTaskContent>
  );
};

export default UserTaskRow;
