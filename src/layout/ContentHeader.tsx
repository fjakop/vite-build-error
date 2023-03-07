import React, {ReactNode} from 'react';
import PendingHeader from '../layout/PendingHeader';

interface StateProps {
  pending: boolean;
}

interface ContentHeaderProps {
  title: ReactNode;
}

export type Props = StateProps & ContentHeaderProps;

export default ({pending, title}: Props) => {
  return <PendingHeader headerContent={<div className='d-flex align-items-center'>{title}</div>} pending={pending} />;
};
