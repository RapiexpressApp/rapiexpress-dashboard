import { Box, Divider, ScrollArea, Stack } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { motion } from 'motion/react'

import { palette } from '~/shared/config/palette'

import { generalLinks, primaryLinks } from '~/widgets/sidebar/data/sidebar.data'
import type { SidebarProps } from '~/widgets/sidebar/types/sidebar.types'
import { SidebarDownloadCard } from '~/widgets/sidebar/ui/sidebar-download-card'
import { SidebarLogo } from '~/widgets/sidebar/ui/sidebar-logo'
import { SidebarSection } from '~/widgets/sidebar/ui/sidebar-section'

const MotionDiv = motion.div

export function Sidebar({ collapsed }: SidebarProps) {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <MotionDiv
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        background: '#fff',
        borderRight: `1px solid ${palette.border}`,
      }}
      initial={{
        opacity: 0,
        x: -20,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.25,
        ease: 'easeOut',
      }}
    >
      <ScrollArea h="100%" type="never" scrollbarSize={4} offsetScrollbars>
        <Stack
          h="100%"
          gap={isMobile ? 'md' : 'xl'}
          px={collapsed ? 8 : isMobile ? 'sm' : 'md'}
          py={isMobile ? 'md' : 'lg'}
        >
          <SidebarLogo collapsed={collapsed} />

          <Divider color={palette.border} opacity={0.6} />

          <MotionDiv
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.1,
              duration: 0.25,
            }}
          >
            <SidebarSection title="MENÚ PRINCIPAL" items={primaryLinks} collapsed={collapsed} />
          </MotionDiv>

          <MotionDiv
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.15,
              duration: 0.25,
            }}
          >
            <SidebarSection title="GENERAL" items={generalLinks} collapsed={collapsed} />
          </MotionDiv>

          {!isMobile && (
            <Box mt="auto">
              <SidebarDownloadCard collapsed={collapsed} />
            </Box>
          )}
        </Stack>
      </ScrollArea>
    </MotionDiv>
  )
}
