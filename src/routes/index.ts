import { adminRoutes } from './adminRoutes'

export const menuItems = {
  ADMIN: adminRoutes,
}

export const getNavItemsByRole = (role: string) => {
  switch (role) {
    case 'ADMIN':
      return adminRoutes

    default:
      return []
  }
}
