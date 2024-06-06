import {Authorized} from '../authorized';
import {ReactElement, ReactNode} from 'react';
import Keycloak from 'keycloak-js';

interface KeycloakAuthorizedProps {
  /**
   * Keycloak Client
   */
  keycloak: Keycloak;
  /**
   * Name der Anwendung, in der die Rollen existieren
   */
  applicationId: string;
  /**
   * Liste der Rollen, von denen der Benutzer mindestens eine besitzen muss, um auf die Ressource zuzugreifen
   */
  requiredRoles: string[];
  /**
   * Kindelemente, die angezeigt werden, falls eine Autorisierung vorliegt.
   */
  children: ReactNode[] | ReactElement;
  /**
   * Element wird angezeigt, wenn keine Autorisierung vorliegt.
   */
  unauthorizedChildren?: ReactNode;
}

const KeycloakAuthorized = ({keycloak, applicationId, requiredRoles, children, unauthorizedChildren}: KeycloakAuthorizedProps) => {
  const roles = (keycloak.tokenParsed?.resource_access && keycloak.tokenParsed?.resource_access[applicationId] && keycloak.tokenParsed.resource_access[applicationId].roles) || [];

  return (
    <Authorized roles={roles} requiredRoles={requiredRoles} unauthorizedChildren={unauthorizedChildren}>
      {children}
    </Authorized>
  );
};

export default KeycloakAuthorized;
