import { createFileRoute } from '@tanstack/react-router'
import { ClientsPage } from '~/pages/dashboard/clients/clients-page'

export const Route = createFileRoute('/_protected/clients')({
  component: ClientsPage,
})
