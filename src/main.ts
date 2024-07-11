// Возможные роли пользователя - user/moderator/admin
// Tags: Enum, Union, Type, Interface

enum Roles {
  user = "user",
  moderator = "moderator",
  admin = "admin"
}

interface User {
  id: number;
  login: string;
  role: Roles;
}

const user: User = {
  id: 1,
  login: 'test',
  role: Roles.user,
}

const checkPermissionsDecorator = (roles: Array<Roles>): ((user: User) => Boolean) => {
  return (user: User): Boolean => {
    return roles.includes(user.role);
  }
}
const checkPermission = checkPermissionsDecorator([Roles.admin]);
const hasPermissions = checkPermission(user);
console.log(hasPermissions);