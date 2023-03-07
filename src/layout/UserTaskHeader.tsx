import React, {ReactNode} from 'react';
import PendingHeader from '../layout/PendingHeader';

interface StateProps {
  pending: boolean;
}

interface UserTasksHeaderProps {
  title: ReactNode;
}

export type Props = StateProps & UserTasksHeaderProps;

export default ({title, pending}: Props) => {
  return <PendingHeader headerContent={<div className='d-flex flex-column'>{title}</div>} pending={pending} />;
};
