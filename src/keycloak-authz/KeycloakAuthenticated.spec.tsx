import {keycloakAuthClient, KeycloakAuthenticated} from '.';
import {render, screen} from '@testing-library/react';

const component = (
  <KeycloakAuthenticated keycloak={keycloakAuthClient}>
    <div data-testid='child'>child</div>
  </KeycloakAuthenticated>
);
describe('KeycloakAuthenticated', () => {
  it('should show children', () => {
    keycloakAuthClient.authenticated = true;
    render(component);
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  it('should not show children', () => {
    keycloakAuthClient.authenticated = false;
    render(component);
    expect(screen.queryByTestId('child')).not.toBeInTheDocument();
  });
});
