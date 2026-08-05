import { useState, type ReactNode } from 'react'

import { AppShell, Box } from '@mantine/core'

import { DashboardHeader } from '~/features/dashboard/ui/dashboard-heard'
import { palette } from '~/shared/config/palette'
import { PageTransition } from '~/shared/ui/page-transition'
import { Sidebar } from '~/widgets/sidebar/ui/sidebar'

interface DashboardLayoutProps {
  children: ReactNode
}

const HEADER_HEIGHT = {
  base: 64,
  sm: 68,
  md: 72,
}

const PADDING = {
  base: 'sm',
  sm: 'md',
  md: 'lg',
  lg: 'xl',
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [opened, setOpened] = useState(false)
  const [collapsed, setCollapsed] = useState(false)

  const navbarWidth = collapsed
    ? {
        base: 0,
        md: 88,
      }
    : {
        base: 280,
        sm: 290,
        md: 300,
        lg: 310,
        xl: 320,
      }

  return (
    <AppShell
      header={{ height: HEADER_HEIGHT }}
      navbar={{
        width: navbarWidth,
        breakpoint: 'md',
        collapsed: {
          mobile: !opened,
          desktop: false,
        },
      }}
      padding={PADDING}
      withBorder={false}
      styles={{
        root: {
          background: palette.page,
        },
        main: {
          background: palette.page,
          transition: 'all .25s ease',
        },
      }}
    >
      <AppShell.Header
        style={{
          zIndex: 200,
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: `1px solid ${palette.border}`,
          boxShadow: '0 2px 16px rgba(15,23,42,.05)',
        }}
      >
        <DashboardHeader
          opened={opened}
          collapsed={collapsed}
          toggle={() => setOpened(prev => !prev)}
          toggleCollapsed={() => setCollapsed(prev => !prev)}
        />
      </AppShell.Header>

      <AppShell.Navbar
        style={{
          overflow: 'hidden',
          transition: 'width .25s ease',
          borderRight: `1px solid ${palette.border}`,
          boxShadow: '4px 0 18px rgba(15,23,42,.04)',
        }}
      >
        <Sidebar collapsed={collapsed} />
      </AppShell.Navbar>

      <AppShell.Main
        pt={{
          base: 80,
          sm: 84,
          md: 92,
          lg: 96,
        }}
        style={{
          minHeight: '100vh',
        }}
      >
        <Box w="100%" maw={1600} mx="auto">
          <PageTransition>{children}</PageTransition>
        </Box>
      </AppShell.Main>
    </AppShell>
  )
}
