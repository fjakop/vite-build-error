import {describe, it, expect} from 'vitest';
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
    expect(screen.getByTestId('child')).toBeDefined();
  });

  it('should not show children', () => {
    keycloakAuthClient.authenticated = false;
    render(component);
    expect(screen.queryByTestId('child')).toBeNull();
  });
});
