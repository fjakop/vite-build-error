import KeycloakAuthenticated from './KeycloakAuthenticated';
import KeycloakAuthorized from './KeycloakAuthorized';
import Keycloak from 'keycloak-js';

// client-config wird geladen von: <page-origin>/keycloak.json
const keycloakAuthClient = new Keycloak();

export {keycloakAuthClient, KeycloakAuthenticated, KeycloakAuthorized};
