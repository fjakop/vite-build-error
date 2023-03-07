import {ReactNode} from 'react';
import Keycloak from 'keycloak-js';

const KeycloakAuthenticated = ({keycloak, children, otherwise}: {keycloak: Keycloak; children?: ReactNode; otherwise?: ReactNode}) => {
  const isLoggedIn = keycloak.authenticated;

  return isLoggedIn ? <>{children}</> : <>{otherwise}</>;
};

export default KeycloakAuthenticated;
