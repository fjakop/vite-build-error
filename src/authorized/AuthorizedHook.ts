/**
 * Prüft, ob eine Rolle gesetzt ist
 */
export const useHasAnyRole = ({requiredRoles, roles}:{requiredRoles: Iterable<string> | ArrayLike<string>; roles: Iterable<string> | ArrayLike<string>}) => {
  const requiredRolesArray = Array.from(requiredRoles);
  const rolesArray = Array.from(roles);
  return {hasAnyRole: requiredRolesArray.length === 0 || rolesArray.some(r => requiredRolesArray.includes(r))};
}