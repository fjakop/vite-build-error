import {describe, expect, it} from 'vitest';
import {keycloakAuthClient, useHasAnyKeycloakRole, usePreferredUsername} from './index';
import {renderHook} from '@testing-library/react';
import {useKeycloakRoles} from './KeycloakHook';

describe('KeycloakHook', () => {
  describe('usePreferredUsername', () => {
    it('should extract the expected preferred_username', () => {
      keycloakAuthClient.tokenParsed = {
        preferred_username: 'username',
      };
      const {result} = renderHook(() => usePreferredUsername({keycloak: keycloakAuthClient}));
      expect(result.current.preferredUsername).toBe('username');
    });
  });
  describe('useKeycloakRoles', () => {
    it('should extract the expected roles', () => {
      keycloakAuthClient.tokenParsed = {
        resource_access: {
          testapp: {
            roles: ['foo'],
          },
        },
      };
      const {result} = renderHook(() => useKeycloakRoles({keycloak: keycloakAuthClient, applicationId: 'testapp'}));
      expect(result.current.keycloakRoles).toContain('foo');
      expect(result.current.keycloakRoles).toHaveLength(1);
    });
  });
  describe('useHasAnyKeycloakRole', () => {
    it('should return true for matching role', () => {
      keycloakAuthClient.tokenParsed = {
        resource_access: {
          testapp: {
            roles: ['foo'],
          },
        },
      };
      const {result} = renderHook(() => useHasAnyKeycloakRole({keycloak: keycloakAuthClient, applicationId: 'testapp', requiredRoles:['foo']}));
      expect(result.current.hasAnyKeycloakRole).toBe(true);
    });
    it('should return false for not matching role', () => {
      keycloakAuthClient.tokenParsed = {
        resource_access: {
          testapp: {
            roles: ['foo'],
          },
        },
      };
      const {result} = renderHook(() => useHasAnyKeycloakRole({keycloak: keycloakAuthClient, applicationId: 'testapp', requiredRoles:['bar']}));
      expect(result.current.hasAnyKeycloakRole).toBe(false);
    });
  });
});
