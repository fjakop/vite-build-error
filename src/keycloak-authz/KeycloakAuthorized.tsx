import {Authorized} from '../authorized';
import {ReactElement, ReactNode} from 'react';
import Keycloak from 'keycloak-js';
import {useKeycloakRoles} from './KeycloakHook';

interface KeycloakAuthorizedProps {
  /**
   * Keycloak Client enthält den JWT
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
  const {keycloakRoles} = useKeycloakRoles({keycloak, applicationId});
  return (
    <Authorized roles={keycloakRoles} requiredRoles={requiredRoles} unauthorizedChildren={unauthorizedChildren}>
      {children}
    </Authorized>
  );
};

export default KeycloakAuthorized;
