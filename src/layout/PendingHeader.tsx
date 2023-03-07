import React, {ReactElement} from 'react';
import PendingSpinner from './PendingSpinner';

export interface PendingHeaderProps {
  headerContent: string | ReactElement;
  pending: boolean;
  headerContentEnd?: string | ReactElement;
}

export default ({headerContent, pending, headerContentEnd}: PendingHeaderProps) => {
  return (
    <div className='d-flex justify-content-between align-items-end'>
      <div className='d-flex align-items-baseline'>
        <div className='mt-2'>{headerContent}</div>
        {pending && (
          <div className='ms-2'>
            <PendingSpinner />
          </div>
        )}
      </div>
      <div>{headerContentEnd}</div>
    </div>
  );
};
