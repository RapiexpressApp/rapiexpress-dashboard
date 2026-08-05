import '@mantine/core/styles.css'
import '~/styles/global.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import { router } from '~/app/router'
import { AppThemeProvider } from '~/app/providers/mantine-provider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppThemeProvider>
      <RouterProvider router={router} />
    </AppThemeProvider>
  </StrictMode>,
)
