// Возможные роли пользователя - user/moderator/admin
// Tags: Enum, Union, Type, Interface

enum Roles {
  user = "user",
  moderator = "moderator",
  admin = "admin"
}

interface User {
  id: number | string;
  login: string;
  role: Roles;
}

const user: User = {
  id: 1,
  login: 'test',
  role: Roles.user,
}

const checkPermissionsDecorator = (roles: Array<string>):(user: User) => boolean => {
  return (user) => {
    return roles.includes(user.role);
  }
}
const checkPermission = checkPermissionsDecorator(['admin']);
const hasPermissions = checkPermission(user);
console.log(hasPermissions);