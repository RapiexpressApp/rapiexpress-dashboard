import { Badge, Button, Divider, Drawer, Group, Paper, Stack, Text } from '@mantine/core'
import { IconFileInvoice, IconTag } from '@tabler/icons-react'
import type { Shipment } from '~/features/shipments/ui/shipments-table'

interface ShipmentDetailsDrawerProps {
  opened: boolean
  onClose: () => void
  shipment: Shipment | null
  onViewLabel: () => void
  onViewInvoice: () => void
}

export function ShipmentDetailsDrawer({
  opened,
  onClose,
  shipment,
  onViewLabel,
  onViewInvoice,
}: ShipmentDetailsDrawerProps) {
  if (!shipment) {
    return null
  }

  const statusColors: Record<Shipment['status'], string> = {
    Recibido: 'green',
    'En clasificación': 'orange',
    Listo: 'blue',
  }

  return (
    <Drawer opened={opened} onClose={onClose} position="right" size="md" title="Detalle del envío">
      <Stack gap="lg">
        <Stack gap={2}>
          <Text size="xs" c="dimmed">
            IDENTIFICADOR
          </Text>

          <Text fw={700}>{shipment.id}</Text>
        </Stack>

        <Paper withBorder p="md" radius="md">
          <Stack gap="md">
            <Text fw={700}>Información del cliente</Text>

            <InfoRow label="Cliente" value={shipment.customer} />

            <InfoRow label="ID de cliente" value={shipment.customerId} />
          </Stack>
        </Paper>

        <Paper withBorder p="md" radius="md">
          <Stack gap="md">
            <Text fw={700}>Información del paquete</Text>

            <InfoRow label="Tracking" value={shipment.tracking} />

            <InfoRow label="Warehouse" value={shipment.warehouseId} />

            <InfoRow label="Peso" value={shipment.weight} />

            <InfoRow label="Categoría" value={shipment.category} />

            <Group justify="space-between">
              <Text size="sm" c="dimmed">
                Estado
              </Text>

              <Badge color={statusColors[shipment.status]} variant="light">
                {shipment.status}
              </Badge>
            </Group>

            <InfoRow label="Registrado" value={shipment.date} />
          </Stack>
        </Paper>

        <Divider />

        <Stack gap="sm">
          <Text fw={700}>Documentos</Text>

          <Button
            variant="light"
            leftSection={<IconTag size={18} />}
            onClick={onViewLabel}
            fullWidth
          >
            Ver etiqueta
          </Button>

          <Button
            variant="light"
            leftSection={<IconFileInvoice size={18} />}
            onClick={onViewInvoice}
            fullWidth
          >
            Ver factura
          </Button>
        </Stack>
      </Stack>
    </Drawer>
  )
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <Group justify="space-between" align="flex-start">
      <Text size="sm" c="dimmed">
        {label}
      </Text>

      <Text size="sm" fw={600} ta="right" maw={220}>
        {value}
      </Text>
    </Group>
  )
}
