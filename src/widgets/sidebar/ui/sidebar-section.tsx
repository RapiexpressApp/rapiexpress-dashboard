import { Box, Stack, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import { palette } from '~/shared/config/palette'

import type { NavItem } from '~/widgets/sidebar/types/sidebar.types'
import { SidebarNavItem } from '~/widgets/sidebar/ui/sidebar-nav-item'

interface SidebarSectionProps {
  title: string
  items: readonly NavItem[]
  collapsed: boolean
}

export function SidebarSection({ title, items, collapsed }: SidebarSectionProps) {
  const isMobile = useMediaQuery('(max-width: 768px)')

  const showTitle = !collapsed

  return (
    <Box>
      {showTitle && (
        <Text size="xs" fw={700} c={palette.faint} px="sm" mb="sm" tt="uppercase">
          {title}
        </Text>
      )}

      <Stack gap={4}>
        {items.map(item => (
          <SidebarNavItem key={item.label} item={item} collapsed={collapsed && !isMobile} />
        ))}
      </Stack>
    </Box>
  )
}
