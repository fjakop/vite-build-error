import {Authorized} from '../authorized';
import {ReactElement, ReactNode} from 'react';
import Keycloak from 'keycloak-js';

const KeycloakAuthorized = ({
  keycloak,
  requiredRoles,
  children,
}: {
  keycloak: Keycloak;
  requiredRoles: string[];
  children: ReactNode[] | ReactElement;
}) => {
  const roles = (keycloak.tokenParsed?.resource_access?.personal && keycloak.tokenParsed.resource_access.personal.roles) || [];

  return (
    <Authorized roles={roles} requiredRoles={requiredRoles}>
      {children}
    </Authorized>
  );
};

export default KeycloakAuthorized;
