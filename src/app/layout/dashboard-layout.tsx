import { useState } from 'react'
import type { ReactNode } from 'react'

import { AppShell } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import { DashboardHeader } from '~/features/dashboard/ui/dashboard-heard'
import { palette } from '~/shared/config/palette'
import { Sidebar } from '~/widgets/sidebar/ui/sidebar'
import { PageTransition } from '~/shared/ui/page-transition'

interface DashboardLayoutProps {
  children: ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const isMobile = useMediaQuery('(max-width: 768px)')

  const [opened, setOpened] = useState(false)
  const [collapsed, setCollapsed] = useState(false)

  return (
    <AppShell
      header={{ height: 72 }}
      navbar={{
        width: isMobile ? 280 : collapsed ? 88 : 290,
        breakpoint: 'md',
        collapsed: {
          desktop: false,
          mobile: !opened,
        },
      }}
      padding={isMobile ? 'md' : 'xl'}
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
          toggle={() => setOpened(value => !value)}
          toggleCollapsed={() => setCollapsed(value => !value)}
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
        pt={isMobile ? 88 : 96}
        style={{
          minHeight: '100vh',
        }}
      >
        <PageTransition>{children}</PageTransition>
      </AppShell.Main>
    </AppShell>
  )
}
