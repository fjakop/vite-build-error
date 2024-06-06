import {describe, it, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import Authorized from './Authorized';

describe('Authorized Tests', () => {
  describe('with required roles', () => {
    it('displays nothing when no required role is present', () => {
      const elem = (
        <Authorized data-testid='authorized' requiredRoles={['a', 'b']} roles={['c', 'd']}>
          <div>child</div>
        </Authorized>
      );

      render(elem);
      expect(screen.queryByText('child')).toBeNull();
    });

    it('displays nothing when no role is present', () => {
      const elem = (
        <Authorized data-testid='authorized' requiredRoles={['a', 'b']} roles={[]}>
          <div>child</div>
        </Authorized>
      );

      render(elem);
      expect(screen.queryByText('child')).toBeNull();
    });
    it('displays unauthorized children when no role is present', () => {
      const elem = (
        <Authorized data-testid='authorized' requiredRoles={['a', 'b']} roles={[]} unauthorizedChildren={<div>unauthorized child</div>}>
          <div>child</div>
        </Authorized>
      );

      render(elem);
      expect(screen.getByText('unauthorized child')).toBeDefined();
    });

    it('displays child element when required role is present', () => {
      const elem = (
        <Authorized data-testid='authorized' requiredRoles={['a', 'b']} roles={['a']} unauthorizedChildren={<div>unauthorized child</div>}>
          <div>child</div>
        </Authorized>
      );

      render(elem);
      expect(screen.getByText('child')).toBeDefined();
      expect(screen.queryByText('unauthorized child')).toBeNull();
    });
  });
  describe('without required roles', () => {
    it('displays child element when any role is present', () => {
      const elem = (
        <Authorized data-testid='authorized' requiredRoles={[]} roles={['a']}>
          <div>child</div>
        </Authorized>
      );

      render(elem);
      expect(screen.getByText('child')).toBeDefined();
    });
    it('displays child element when no role is present', () => {
      const elem = (
        <Authorized data-testid='authorized' requiredRoles={[]} roles={[]}>
          <div>child</div>
        </Authorized>
      );

      render(elem);
      expect(screen.getByText('child')).toBeDefined();
    });
  });
});
