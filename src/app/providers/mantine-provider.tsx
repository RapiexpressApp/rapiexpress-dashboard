import { MantineProvider } from '@mantine/core'
import type { ReactNode } from 'react'
import { theme } from '~/shared/theme'

export function AppThemeProvider({ children }: { children: ReactNode }) {
  return (
    <MantineProvider theme={theme} defaultColorScheme="light">
      {children}
    </MantineProvider>
  )
}
