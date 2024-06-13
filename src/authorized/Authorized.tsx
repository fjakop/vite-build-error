import React, {ReactNode} from 'react';
import {useHasAnyRole} from './AuthorizedHook';

interface AuthorizedProps {
  /**
   * Liste der Rollen, von denen der Benutzer mindestens eine besitzen muss, um auf die Ressource zuzugreifen
   */
  requiredRoles: Array<string>;
  /**
   * Kindelemente, die angezeigt werden, falls eine Autorisierung vorliegt.
   */
  children?: ReactNode[] | ReactNode;
  /**
   * Element wird angezeigt, wenn keine Autorisierung vorliegt.
   */
  unauthorizedChildren?: ReactNode;
}

interface StateProps {
  /**
   * Die Rolle(n) des Benutzers
   */
  roles: Array<string>;
}

type Props = StateProps & AuthorizedProps;

/**
 * Prüft, ob der Benutzer die passende Rolle hat. Falls ja, kann er den Inhalt der Webseite sehen.
 * Falls nicht, werden die 'unauthorizedChildren' angezeigt.
 */
const Authorized = ({children, requiredRoles, roles, unauthorizedChildren}:Props) => {
  const {hasAnyRole} = useHasAnyRole({requiredRoles, roles});
  return <>{hasAnyRole ? children : unauthorizedChildren}</>;
};

export default Authorized;
