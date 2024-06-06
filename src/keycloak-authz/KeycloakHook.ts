import Keycloak from 'keycloak-js';

/**
 * Extrahiert das Attribut 'preferred_username' aus dem übergebenen jwt (keycloak)
 * @param keycloak enthält den jwt
 */
export const usePreferredUsername = ({keycloak}: {keycloak: Keycloak}) => {
  const preferredUsername: string | undefined = keycloak.tokenParsed?.preferred_username;
  return {preferredUsername};
};
