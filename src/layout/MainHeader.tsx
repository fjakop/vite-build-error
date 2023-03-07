import React, {ReactElement} from 'react';
import PendingHeader from './PendingHeader';

export default ({
  title,
  pending,
  subTitle,
  headerContentEnd,
}: {
  title: string;
  pending: boolean;
  subTitle?: string | ReactElement;
  headerContentEnd?: string | ReactElement;
}) => {
  return (
    <PendingHeader
      headerContent={
        <h5 data-testid='main-header-content'>
          {title} <small className='text-muted'>{subTitle}</small>
        </h5>
      }
      pending={pending}
      headerContentEnd={headerContentEnd}
    />
  );
};
