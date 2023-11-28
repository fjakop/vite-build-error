import React, {ReactElement} from 'react';
import PendingHeader from './PendingHeader';
import {FaChevronLeft} from 'react-icons/fa6';
import {ButtonLink} from './index';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';

const MainHeader = ({
  title,
  pending,
  subTitle,
  headerContentEnd,
  backButton,
}: {
  title: string;
  pending: boolean;
  subTitle?: string | ReactElement;
  headerContentEnd?: string | ReactElement;
  backButton?: {action: () => void; tooltip: string};
}) => {
  return (
    <PendingHeader
      headerContent={
        <>
          {backButton && (
            <OverlayTrigger overlay={<Tooltip>{backButton.tooltip}</Tooltip>}>
              <div>
                <ButtonLink data-testid='main-header-back-button' className='me-2' onClick={backButton.action}>
                  <FaChevronLeft size={20} className='mb-1' />
                </ButtonLink>
              </div>
            </OverlayTrigger>
          )}
          <h5 className='my-0' data-testid='main-header-content'>
            {title} <small className='text-muted'>{subTitle}</small>
          </h5>
        </>
      }
      pending={pending}
      headerContentEnd={headerContentEnd}
    />
  );
};
export default MainHeader;
