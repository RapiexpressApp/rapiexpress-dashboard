import { useState, type ReactNode } from 'react'

import { AppShell, Box } from '@mantine/core'

import { DashboardHeader } from '~/features/dashboard/ui/dashboard-heard'
import { palette } from '~/shared/config/palette'
import { PageTransition } from '~/shared/ui/page-transition/page-transition'
import { Sidebar } from '~/widgets/sidebar/ui/sidebar'

interface DashboardLayoutProps {
  children: ReactNode
}

const HEADER_HEIGHT = 72
const SIDEBAR_WIDTH = 300
const SIDEBAR_COLLAPSED_WIDTH = 84

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [opened, setOpened] = useState(false)
  const [collapsed, setCollapsed] = useState(false)

  return (
    <AppShell
      header={{
        height: {
          base: 64,
          sm: 68,
          md: HEADER_HEIGHT,
        },
      }}
      navbar={{
        width: collapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_WIDTH,
        breakpoint: 'md',
        collapsed: {
          mobile: !opened,
          desktop: false,
        },
      }}
      padding={0}
      withBorder={false}
      styles={{
        root: {
          background: palette.page,
          overflowX: 'hidden',
        },

        main: {
          minHeight: '100vh',
          background: palette.page,
          overflowX: 'hidden',
        },
      }}
    >
      <AppShell.Header
        style={{
          zIndex: 200,
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          borderBottom: `1px solid ${palette.border}`,
          boxShadow: '0 2px 16px rgba(15, 23, 42, 0.05)',
        }}
      >
        <DashboardHeader
          opened={opened}
          collapsed={collapsed}
          toggle={() => setOpened(value => !value)}
          toggleCollapsed={() => setCollapsed(value => !value)}
        />
      </AppShell.Header>

      <AppShell.Navbar
        style={{
          overflow: 'hidden',
          borderRight: `1px solid ${palette.border}`,
          transition: 'width 0.25s ease',
          boxShadow: '4px 0 18px rgba(15, 23, 42, 0.04)',
        }}
      >
        <Sidebar collapsed={collapsed} />
      </AppShell.Navbar>

      <AppShell.Main
        pt={{
          base: 80,
          sm: 84,
          md: 92,
        }}
      >
        <Box
          w="100%"
          px={{
            base: 12,
            sm: 16,
            md: 20,
            lg: 24,
          }}
          pb={{
            base: 24,
            md: 40,
          }}
        >
          <PageTransition>{children}</PageTransition>
        </Box>
      </AppShell.Main>
    </AppShell>
  )
}
