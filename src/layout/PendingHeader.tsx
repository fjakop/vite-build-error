import React, {ReactElement} from 'react';
import PendingSpinner from './PendingSpinner';

export interface PendingHeaderProps {
  headerContent: string | ReactElement;
  pending: boolean;
  headerContentEnd?: string | ReactElement;
}

const PendingHeader = ({headerContent, pending, headerContentEnd}: PendingHeaderProps) => {
  return (
    <div className='d-flex align-items-start my-1'>
      <div className='d-flex'>
        {headerContent}
        {pending && (
          <h5 className='my-0'>
            <small className='mx-2 text-muted'>
              <PendingSpinner />
            </small>
          </h5>
        )}
      </div>
      <div className='d-flex justify-content-end flex-grow-1'>{headerContentEnd}</div>
    </div>
  );
};
export default PendingHeader;