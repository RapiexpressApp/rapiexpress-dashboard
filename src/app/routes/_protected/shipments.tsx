import { createFileRoute } from '@tanstack/react-router'
import { ShipmentsPage } from '~/pages/dashboard/shipments/shipments-page'

export const Route = createFileRoute('/_protected/shipments')({
  component: ShipmentsPage,
})
