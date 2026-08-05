import { Divider, ScrollArea, Stack } from '@mantine/core'
import { motion } from 'motion/react'

import { palette } from '~/shared/config/palette'

import { generalLinks, primaryLinks } from '~/widgets/sidebar/data/sidebar.data'
import type { SidebarProps } from '~/widgets/sidebar/types/sidebar.types'
// import { SidebarDownloadCard } from '~/widgets/sidebar/ui/sidebar-download-card'
import { SidebarLogo } from '~/widgets/sidebar/ui/sidebar-logo'
import { SidebarSection } from '~/widgets/sidebar/ui/sidebar-section'

const MotionDiv = motion.div

export function Sidebar({ collapsed }: SidebarProps) {
  return (
    <MotionDiv
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
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        background: '#fff',
        borderRight: `1px solid ${palette.border}`,
      }}
    >
      <ScrollArea h="100%" type="never" scrollbarSize={4} offsetScrollbars>
        <Stack h="100%" gap="lg" px={collapsed ? 8 : 'md'} py="lg">
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

          {/*
          <Box mt="auto">
            <SidebarDownloadCard collapsed={collapsed} />
          </Box>
          */}
        </Stack>
      </ScrollArea>
    </MotionDiv>
  )
}
