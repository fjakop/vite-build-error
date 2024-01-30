import {Nav, NavLink} from 'react-bootstrap';
import {FaChevronLeft} from 'react-icons/fa6';
import useBacklink, {BacklinkProps} from './backlinkHook';

/**
 * Ein Rücksprung-Link auf eine URL. Wenn in der aufgerufenen URL im Fragment ein Parameter 'backlink' vorhanden ist,
 * wird der Wert des Parameters im Session Storage abgelegt und ein Button mit diesem Ziel erzeugt.
 */
const Backlink = (props: BacklinkProps) => {
  const backlink = useBacklink(props);

  return (
    <Nav>
      <NavLink href={backlink}>
        <FaChevronLeft className='mb-1' data-testid='backlink-chevron' />
      </NavLink>
    </Nav>
  );
};

export default Backlink;
