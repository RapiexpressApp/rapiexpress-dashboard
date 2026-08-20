import { Avatar, Badge, Group } from '@mantine/core'
import { IconEye } from '@tabler/icons-react'
import { useState } from 'react'
import { DataTable } from '~/shared/ui/data-table/datatable'

import type {
  DataTableAction,
  DataTableColumn,
} from '~/shared/ui/data-table/types/data-table-types'

interface Client {
  id: string
  name: string
  email: string
  status: string
}

const clients: Client[] = [
  {
    id: '#1001',
    name: 'Carlos Gómez',
    email: 'carlos@gmail.com',
    status: 'Activo',
  },
  {
    id: '#1002',
    name: 'María López',
    email: 'maria@gmail.com',
    status: 'Activo',
  },
  {
    id: '#1003',
    name: 'Juan Pérez',
    email: 'juan@gmail.com',
    status: 'Inactivo',
  },
  {
    id: '#1004',
    name: 'Ana Torres',
    email: 'ana@gmail.com',
    status: 'Activo',
  },
  {
    id: '#1005',
    name: 'Pedro Ruiz',
    email: 'pedro@gmail.com',
    status: 'Inactivo',
  },
  {
    id: '#1006',
    name: 'Laura Díaz',
    email: 'laura@gmail.com',
    status: 'Activo',
  },
]

const columns: DataTableColumn<Client>[] = [
  {
    key: 'id',
    label: 'ID',
  },

  {
    key: 'name',
    label: 'Cliente',

    render: client => (
      <Group gap="sm" wrap="nowrap">
        <Avatar size={34} radius="xl" color="gray">
          {client.name.charAt(0)}
        </Avatar>

        {client.name}
      </Group>
    ),
  },

  {
    key: 'email',
    label: 'Correo',
  },

  {
    key: 'status',
    label: 'Estado',

    render: client => {
      const colors: Record<string, string> = {
        Activo: 'green',
        Inactivo: 'red',
      }

      return (
        <Badge color={colors[client.status] ?? 'gray'} variant="light" radius="xl">
          {client.status}
        </Badge>
      )
    },
  },
]

const actions: DataTableAction<Client>[] = [
  {
    label: 'Ver cliente',
    icon: <IconEye size={16} />,
    onClick: client => {
      console.log('Ver cliente:', client)
    },
  },
]

export function ClientsTable() {
  const [page, setPage] = useState(1)
  const pageSize = 3

  return (
    <DataTable
      title="Clientes"
      description="Consulta y administra los clientes registrados."
      data={clients}
      columns={columns}
      actions={actions}
      pagination={{
        page,
        pageSize,
        total: clients.length,
        onChange: setPage,
      }}
    />
  )
}
