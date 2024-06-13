import {describe, it, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import {keycloakAuthClient, KeycloakAuthorized} from '.';

const component = (
  <KeycloakAuthorized
    keycloak={keycloakAuthClient}
    applicationId={'personal'}
    requiredRoles={['foo']}
    unauthorizedChildren={<div data-testid='unauthorizedChild'>unauthorizedChild</div>}
  >
    <div data-testid='child'>child</div>
  </KeycloakAuthorized>
);

describe('KeycloakAuthorized', () => {
  it('should show children', () => {
    keycloakAuthClient.tokenParsed = {
      resource_access: {
        personal: {
          roles: ['foo'],
        },
      },
    };
    render(component);
    expect(screen.getByTestId('child')).toBeDefined();
  });

  it('should not show children', () => {
    keycloakAuthClient.tokenParsed = {};
    render(component);
    expect(screen.queryByTestId('child')).toBeNull();
  });

  it('should show unauthorized children', () => {
    keycloakAuthClient.tokenParsed = {};
    render(component);
    expect(screen.getByTestId('unauthorizedChild')).toBeDefined();
  });
});
