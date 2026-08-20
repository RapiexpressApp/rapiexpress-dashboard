import { createRootRoute, Outlet } from '@tanstack/react-router'
import { NotFoundPage, ServerErrorPage } from '~/pages/error'

export const Route = createRootRoute({
  component: () => <Outlet />,
  notFoundComponent: NotFoundPage,
  errorComponent: ServerErrorPage,
})
