import {Image, Nav, NavLink, OverlayTrigger, Tooltip} from 'react-bootstrap';
import useBacklink, {BacklinkProps} from './backlinkHook';
import portalIcon from './bup-icon.svg';

/**
 * Ein Rücksprung-Link auf das Bankunterstützungsportal. Wenn in der aufgerufenen URL im Fragment ein Parameter 'backlink' vorhanden ist,
 * wird der Wert des Parameters im Session Storage abgelegt und ein Button mit diesem Ziel erzeugt.
 */
const PortalBacklink = (props: BacklinkProps) => {
  const backlink = useBacklink(props);

  return (
    <>
      {backlink && (
        <Nav>
          <NavLink href={backlink}>
            <OverlayTrigger placement='bottom-end' overlay={<Tooltip className='tooltip-info'>{'Bankunterstützungsportal'}</Tooltip>}>
              <Image src={portalIcon} width={20} className={'mb-2'} data-testid='portalbacklink-icon' />
            </OverlayTrigger>
          </NavLink>
        </Nav>
      )}
    </>
  );
};

export default PortalBacklink;
