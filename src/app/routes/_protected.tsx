import { createFileRoute, Outlet } from '@tanstack/react-router'
import { DashboardLayout } from '~/app/layout/dashboard-layout'

export const Route = createFileRoute('/_protected')({
  component: ProtectedLayout,
})

function ProtectedLayout() {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  )
}
