import {ReactNode} from 'react';

/**
 * Prüft, ob eine Rolle gesetzt ist
 */
const hasAnyRole = (requiredRoles: Iterable<string> | ArrayLike<string>, roles: Iterable<string> | ArrayLike<string>) => {
  const requiredRolesArray = Array.from(requiredRoles);
  const rolesArray = Array.from(roles);
  return requiredRolesArray.length === 0 || rolesArray.some(r => requiredRolesArray.includes(r));
};

interface AuthorizedProps {
  /**
   * Liste der Rollen, von denen der Benutzer mindestens eine besitzen muss, um auf die Ressource zuzugreifen
   */
  requiredRoles: Array<string>;
  /**
   * Kindelemente, die angezeigt werden, falls eine Authentifizierung vorliegt.
   */
  children?: ReactNode[] | ReactNode;
}

interface StateProps {
  /**
   * Die Rolle(n) des Benutzers
   */
  roles: Array<string>;
}

type Props = StateProps & AuthorizedProps;

/**
 * Prüft, ob der Benutzer die passende Rolle hat. Falls ja, kann er den Inhalt der Webseite sehen. Falls nicht,...
 */
const Authorized: React.FC<Props> = ({children, requiredRoles, roles}) => {
  return <>{hasAnyRole(requiredRoles, roles) && children}</>;
};

export default Authorized;
