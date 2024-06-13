import Keycloak from 'keycloak-js';
import {useHasAnyRole} from '../authorized';

/**
 * Extrahiert das Attribut 'preferred_username' aus dem übergebenen JWT (keycloak)
 * @param keycloak enthält den JWT
 */
export const usePreferredUsername = ({keycloak}: {keycloak: Keycloak}) => {
  const preferredUsername: string | undefined = keycloak.tokenParsed?.preferred_username;
  return {preferredUsername};
};

/**
 * Extrahiert das Attribut 'roles' aus dem übergebenen JWT (keycloak) für die betreffende applicationId
 * @param keycloak enthält den JWT
 * @param applicationId die applicationId
 */
export const useKeycloakRoles = ({keycloak, applicationId}: {keycloak: Keycloak; applicationId: string}) => {
  const keycloakRoles =
    (keycloak.tokenParsed?.resource_access &&
      keycloak.tokenParsed?.resource_access[applicationId] &&
      keycloak.tokenParsed.resource_access[applicationId].roles) ||
    [];
  return {keycloakRoles};
};

/**
 * Prüft ob mindestens eine Rolle von requiredRoles im aktuellen JWT (keycloak) für die betreffende applicationId enthalten ist.
 * @param keycloak enthält den JWT
 * @param applicationId die applicationId
 * @param requiredRoles die benötigten Rollen
 */
export const useHasAnyKeycloakRole = ({
  keycloak,
  applicationId,
  requiredRoles,
}: {
  keycloak: Keycloak;
  applicationId: string;
  requiredRoles: string[];
}) => {
  const {keycloakRoles: roles} = useKeycloakRoles({keycloak, applicationId});
  const {hasAnyRole: hasAnyKeycloakRole} = useHasAnyRole({roles, requiredRoles});
  return {hasAnyKeycloakRole};
};
