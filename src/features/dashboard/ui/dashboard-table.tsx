import { Avatar, Badge, Group, Paper, ScrollArea, Table, Text } from '@mantine/core'
import { IconPackage } from '@tabler/icons-react'

import { palette } from '~/shared/config/palette'

const rows = [
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
]

function StatusBadge({ status }: { status: string }) {
  const config = {
    Entregado: {
      color: 'green',
      label: 'Entregado',
    },
    'En tránsito': {
      color: 'blue',
      label: 'En tránsito',
    },
    Pendiente: {
      color: 'yellow',
      label: 'Pendiente',
    },
  }

  const current = config[status as keyof typeof config] ?? {
    color: 'gray',
    label: status,
  }

  return (
    <Badge color={current.color} variant="light" radius="xl">
      {current.label}
    </Badge>
  )
}

export function DashboardTable() {
  return (
    <Paper
      radius="xl"
      p="lg"
      withBorder
      style={{
        width: '100%',
        overflow: 'hidden',
        background: '#fff',
        borderColor: palette.border,
      }}
    >
      <Group justify="space-between" align="center" mb="lg" wrap="wrap">
        <Group gap="sm" wrap="nowrap">
          <Avatar radius="md" size={38} color="blue">
            <IconPackage size={20} />
          </Avatar>

          <div>
            <Text fw={700} size="lg">
              Últimos envíos
            </Text>

            <Text size="sm" c="dimmed">
              Seguimiento de pedidos recientes
            </Text>
          </div>
        </Group>

        <Badge variant="light" color="blue" radius="xl">
          {rows.length} envíos
        </Badge>
      </Group>

      <ScrollArea type="auto" offsetScrollbars>
        <Table
          miw={650}
          highlightOnHover
          verticalSpacing="md"
          styles={{
            th: {
              fontWeight: 700,
              color: '#6b7280',
              background: '#f8fafc',
              whiteSpace: 'nowrap',
            },
            td: {
              borderBottom: '1px solid #f1f5f9',
              whiteSpace: 'nowrap',
            },
          }}
        >
          <Table.Thead>
            <Table.Tr>
              <Table.Th>ID</Table.Th>
              <Table.Th>Cliente</Table.Th>
              <Table.Th>Estado</Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>
            {rows.map(row => (
              <Table.Tr key={row.id}>
                <Table.Td>
                  <Text fw={600}>{row.id}</Text>
                </Table.Td>

                <Table.Td>
                  <Group gap="sm" wrap="nowrap">
                    <Avatar radius="xl" color="gray" size={34}>
                      {row.client.charAt(0)}
                    </Avatar>

                    <Text fw={500}>{row.client}</Text>
                  </Group>
                </Table.Td>

                <Table.Td>
                  <StatusBadge status={row.status} />
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </ScrollArea>
    </Paper>
  )
}
