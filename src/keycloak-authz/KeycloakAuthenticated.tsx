import {ReactNode} from 'react';
import Keycloak from 'keycloak-js';

interface KeycloakAuthenticatedProps {
  /**
   * Keycloak Client
   */
  keycloak: Keycloak;
  /**
   * Kindelemente, die angezeigt werden, falls eine Authentifizierung vorliegt.
   */
  children?: ReactNode;
  /**
   * Kindelemente, die angezeigt werden, falls keine Authentifizierung vorliegt.
   */
  otherwise?: ReactNode;
}

const KeycloakAuthenticated = ({keycloak, children, otherwise}: KeycloakAuthenticatedProps) => {
  const isLoggedIn = keycloak.authenticated;

  return isLoggedIn ? <>{children}</> : <>{otherwise}</>;
};

export default KeycloakAuthenticated;
