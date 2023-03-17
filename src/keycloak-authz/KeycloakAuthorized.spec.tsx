import {render, screen} from '@testing-library/react';
import {keycloakAuthClient, KeycloakAuthorized} from '.';

const component = (
  <KeycloakAuthorized keycloak={keycloakAuthClient} applicationId={'personal'} requiredRoles={['foo']}>
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
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  it('should not show children', () => {
    keycloakAuthClient.tokenParsed = {};
    render(component);
    expect(screen.queryByTestId('child')).not.toBeInTheDocument();
  });
});
