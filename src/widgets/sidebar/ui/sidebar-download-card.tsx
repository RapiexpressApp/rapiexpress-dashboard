import { Box, Button, Text } from '@mantine/core'
import { IconDeviceMobile } from '@tabler/icons-react'
import { useMediaQuery } from '@mantine/hooks'

import { palette } from '~/shared/config/palette'
import type { SidebarProps } from '~/widgets/sidebar/types/sidebar.types'

export function SidebarDownloadCard({ collapsed }: SidebarProps) {
  const isMobile = useMediaQuery('(max-width: 768px)')

  if (collapsed || isMobile) return null

  return (
    <Box mt="auto">
      <Box
        p="lg"
        style={{
          borderRadius: 18,
          background: 'linear-gradient(135deg,#2563EB,#1D4ED8)',
          color: '#fff',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <Box
          style={{
            width: 46,
            height: 46,
            borderRadius: 14,
            background: 'rgba(255,255,255,.15)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backdropFilter: 'blur(10px)',
          }}
        >
          <IconDeviceMobile size={22} color="white" />
        </Box>

        <Text mt="md" fw={700} size="sm" c="white">
          Descarga nuestra App
        </Text>

        <Text mt={4} size="xs" c="rgba(255,255,255,.75)" lh={1.5}>
          Gestiona tus envíos desde cualquier lugar de forma rápida y segura.
        </Text>

        <Button fullWidth mt="lg" radius="md" color="white" c={palette.primary}>
          Descargar
        </Button>
      </Box>
    </Box>
  )
}
