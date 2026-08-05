import { Badge, NavLink, Tooltip } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { useLocation } from '@tanstack/react-router'
import { motion } from 'motion/react'

import { palette } from '~/shared/config/palette'
import type { NavItem } from '~/widgets/sidebar/types/sidebar.types'

interface SidebarNavItemProps {
  item: NavItem
  collapsed: boolean
}

const MotionDiv = motion.div

export function SidebarNavItem({ item, collapsed }: SidebarNavItemProps) {
  const location = useLocation()
  const isMobile = useMediaQuery('(max-width: 768px)')

  const active = location.pathname === item.href

  return (
    <Tooltip
      label={item.label}
      position="right"
      withArrow
      disabled={!collapsed}
      openDelay={150}
      transitionProps={{
        transition: 'fade-right',
        duration: 150,
      }}
    >
      <MotionDiv
        whileHover={{
          x: isMobile || collapsed ? 0 : 4,
        }}
        transition={{
          duration: 0.2,
        }}
      >
        <NavLink
          href={item.href}
          active={active}
          label={collapsed ? null : item.label}
          leftSection={<item.icon size={20} stroke={1.8} />}
          rightSection={
            !collapsed && item.badge ? (
              <Badge size="sm" radius="xl" variant="filled" color={palette.primary}>
                {item.badge}
              </Badge>
            ) : null
          }
          styles={{
            root: {
              height: isMobile ? 46 : 52,
              display: 'flex',
              justifyContent: collapsed ? 'center' : 'flex-start',

              marginBottom: 6,
              borderRadius: 14,

              border: active ? `1px solid ${palette.primary}` : '1px solid transparent',

              background: active ? 'linear-gradient(90deg,#EFF6FF,#DBEAFE)' : 'transparent',

              boxShadow: active ? '0 6px 16px rgba(37,99,235,.12)' : 'none',
            },

            body: {
              justifyContent: collapsed ? 'center' : 'flex-start',
            },

            section: {
              color: active ? palette.primary : palette.faint,

              marginRight: collapsed ? 0 : 12,
              transition: 'color .2s ease',
            },

            label: {
              fontSize: isMobile ? 14 : 15,
              fontWeight: 600,
              color: active ? palette.primary : palette.text,

              whiteSpace: 'nowrap',
            },
          }}
        />
      </MotionDiv>
    </Tooltip>
  )
}
