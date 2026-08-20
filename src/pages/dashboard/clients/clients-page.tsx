import { Stack } from '@mantine/core'
import { ClientsToolbar } from '~/features/clients/ui/clients-toolbar'
import { PageHeader } from '~/shared/ui/page-header/page-header'
import { ClientsTable } from '~/features/clients/ui/clients-table'

export function ClientsPage() {
  return (
    <Stack gap="xl" w="100%">
      <PageHeader title="Clientes" description="Gestiona y consulta los clientes registrados." />
      <ClientsToolbar />
      <ClientsTable />
    </Stack>
  )
}
