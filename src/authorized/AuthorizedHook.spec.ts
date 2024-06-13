import {describe, expect, it} from 'vitest';
import {renderHook} from '@testing-library/react';
import {useHasAnyRole} from './AuthorizedHook';

describe('AuthorizedHook', () => {
  describe('useHasAnyRole', () => {
    it('should return true for matching role', () => {
      const {result} = renderHook(() => useHasAnyRole({requiredRoles: ['foo'], roles: ['foo']}));
      expect(result.current.hasAnyRole).toBe(true);
    });
    it('should return false for not matching role', () => {
      const {result} = renderHook(() => useHasAnyRole({requiredRoles: ['foo'], roles: ['bar']}));
      expect(result.current.hasAnyRole).toBe(false);
    });
  });
})