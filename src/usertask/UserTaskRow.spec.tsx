import UserTaskRow from './UserTaskRow';
import {act, render, screen} from '@testing-library/react';
import React from 'react';
import {UserTask} from './UserTask';
import {describe, it, vi} from 'vitest';


const userTask: UserTask = {
  id: 'id',
  description: 'Bestätigung Mitarbeiter',
  taskDefinitionKey: 'taskDefinitionKey',
  createTime: new Date().toISOString(),
  assignee: 'assignee',
};

const editUserTaskMock = vi.fn();

const component = (art: 'Assigned' | 'Candidate' | 'Owner') => {
  switch (art) {
    case 'Assigned':
      return (
        <UserTaskRow
          variant={'assignee'}
          userId={'assignee'}
          userTask={{...userTask, assignee: userTask.assignee ?? null}}
          editUserTask={editUserTaskMock}
          userTaskAssignmentComponent={<></>}
        />
      );
    case 'Candidate':
      return (
        <UserTaskRow
          variant={'candidate'}
          userId={'assignee'}
          userTask={{...userTask, assignee: userTask.assignee ?? null}}
          editUserTask={editUserTaskMock}
          userTaskAssignmentComponent={<></>}
        />
      );
    case 'Owner':
      return (
        <UserTaskRow
          variant={'owner'}
          userId={'assignee'}
          userTask={{...userTask, assignee: userTask.assignee ?? null}}
          userTaskAssignmentComponent={<></>}
        />
      );
  }
};

const findAndClickLink = () => {
  const link = screen.getByTestId('linkToUserTaskEdit');
  expect(link).toBeInTheDocument();
  act(() => link.click());
  expect(editUserTaskMock).toBeCalledWith({...userTask, assignee: userTask.assignee ?? null});
};

describe('UserTaskRow', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('should render', () => {
    userTask.assignee = 'assignee';
    render(component('Candidate'));
    expect(screen.getByText('Bestätigung Mitarbeiter')).toBeInTheDocument();
  });

  it('should render task claimed', () => {
    userTask.assignee = 'assignee';
    render(component('Assigned'));
    expect(screen.getByText('Bearbeitung fortsetzen')).toBeInTheDocument();
    findAndClickLink();
  });

  it('should render task candidate', () => {
    userTask.assignee = null;
    render(component('Candidate'));
    expect(screen.getByText('Bearbeitung starten')).toBeInTheDocument();
    findAndClickLink();
  });

  it('should render task owner', () => {
    userTask.assignee = null;
    render(component('Owner'));
    expect(screen.getByText('Name')).toBeInTheDocument();
  });
});
