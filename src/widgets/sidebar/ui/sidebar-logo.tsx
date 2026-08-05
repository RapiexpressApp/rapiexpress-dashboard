import { Box, Image } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import type { SidebarProps } from '~/widgets/sidebar/types/sidebar.types'

export function SidebarLogo({ collapsed }: SidebarProps) {
  const isMobile = useMediaQuery('(max-width: 768px)')

  let logoWidth = isMobile ? 130 : 165

  if (collapsed) {
    logoWidth = isMobile ? 40 : 50
  }

  return (
    <Box
      py={isMobile ? 'sm' : 'md'}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: isMobile ? 56 : 72,
      }}
    >
      <Image
        src={collapsed ? '/image/logo.webp' : '/image/logo.webp'}
        w={logoWidth}
        fit="contain"
        style={{
          transition: 'all .3s ease',
          userSelect: 'none',
        }}
      />
    </Box>
  )
}
