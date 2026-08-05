import {
  IconChartBar,
  IconHelpCircle,
  IconLayoutDashboard,
  IconLogout,
  IconPackage,
  IconSettings,
  IconTruck,
  IconUsers,
} from '@tabler/icons-react'
import type { NavItem } from '~/widgets/sidebar/types/sidebar.types'

export const primaryLinks: readonly NavItem[] = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: IconLayoutDashboard,
  },
  {
    label: 'Envíos',
    href: '/shipments',
    icon: IconPackage,
    badge: '12+',
  },
  {
    label: 'Rutas',
    href: '/routes',
    icon: IconTruck,
  },
  {
    label: 'Clientes',
    href: '/customers',
    icon: IconUsers,
  },
  {
    label: 'Analítica',
    href: '/analytics',
    icon: IconChartBar,
  },
]

export const generalLinks: readonly NavItem[] = [
  {
    label: 'Configuración',
    href: '/settings',
    icon: IconSettings,
  },
  {
    label: 'Ayuda',
    href: '/help',
    icon: IconHelpCircle,
  },
  {
    label: 'Cerrar sesión',
    href: '/logout',
    icon: IconLogout,
  },
]
