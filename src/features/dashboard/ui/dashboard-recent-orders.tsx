import { useState } from 'react'
import { Avatar, Badge, Button, Group } from '@mantine/core'
import { IconArrowRight, IconEye } from '@tabler/icons-react'

import { DataTable, type DataTableAction, type DataTableColumn } from '~/shared/ui/data-table'

interface RecentOrder {
  id: string
  client: string
  status: string
}

const orders: RecentOrder[] = [
  {
    id: '#1001',
    client: 'Carlos Gómez',
    status: 'Entregado',
  },
  {
    id: '#1002',
    client: 'María López',
    status: 'En tránsito',
  },
  {
    id: '#1003',
    client: 'Juan Pérez',
    status: 'Pendiente',
  },
  {
    id: '#1004',
    client: 'Ana Torres',
    status: 'Entregado',
  },
  {
    id: '#1005',
    client: 'Pedro Ruiz',
    status: 'Pendiente',
  },
  {
    id: '#1006',
    client: 'Laura Díaz',
    status: 'En tránsito',
  },
]

const columns: DataTableColumn<RecentOrder>[] = [
  {
    key: 'id',
    label: 'ID',
  },

  {
    key: 'client',
    label: 'Cliente',

    render: order => (
      <Group gap="sm" wrap="nowrap">
        <Avatar size={34} radius="xl" color="gray">
          {order.client.charAt(0)}
        </Avatar>

        {order.client}
      </Group>
    ),
  },

  {
    key: 'status',
    label: 'Estado',

    render: order => {
      const colors: Record<string, string> = {
        Entregado: 'green',
        'En tránsito': 'blue',
        Pendiente: 'yellow',
      }

      return (
        <Badge color={colors[order.status] ?? 'gray'} variant="light" radius="xl">
          {order.status}
        </Badge>
      )
    },
  },
]

const actions: DataTableAction<RecentOrder>[] = [
  {
    label: 'Ver detalles',
    icon: <IconEye size={16} />,
    onClick: order => {
      console.log('Ver:', order)
    },
  },
]

export function DashboardRecentOrders() {
  const [page, setPage] = useState(1)

  const pageSize = 3

  return (
    <DataTable
      title="Últimos envíos"
      description="Seguimiento de pedidos recientes"
      data={orders}
      columns={columns}
      actions={actions}
      pagination={{
        page,
        pageSize,
        total: orders.length,
        onChange: setPage,
      }}
      headerAction={
        <Button variant="subtle" rightSection={<IconArrowRight size={16} />}>
          Ver todos
        </Button>
      }
    />
  )
}
