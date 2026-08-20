import { Badge, Button, Divider, Group, Modal, Paper, SimpleGrid, Stack, Text } from '@mantine/core'
import {
  IconCheck,
  IconDownload,
  IconFileInvoice,
  IconPackage,
  IconPrinter,
  IconTruck,
} from '@tabler/icons-react'
import type { Shipment } from '~/features/shipments/ui/shipments-table'

interface ShipmentInvoiceModalProps {
  opened: boolean
  onClose: () => void
  shipment: Shipment | null
}

export function ShipmentInvoiceModal({ opened, onClose, shipment }: ShipmentInvoiceModalProps) {
  if (!shipment) {
    return null
  }

  const invoiceNumber = `INV-${shipment.id.replace('#ENV-', '')}`

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Factura del envío"
      centered
      size="lg"
      radius="md"
      padding="md"
    >
      <Stack gap="md">
        {/* ============================================================
            INVOICE
        ============================================================ */}

        <Paper
          withBorder
          radius="md"
          p="md"
          bg="white"
          style={{
            minWidth: 0,
          }}
        >
          <Stack gap="md">
            {/* ========================================================
                HEADER
            ======================================================== */}

            <Group justify="space-between" align="flex-start" gap="md" wrap="wrap">
              {/* COMPANY */}
              <Group
                gap="sm"
                wrap="nowrap"
                style={{
                  minWidth: 0,
                  flex: '1 1 220px',
                }}
              >
                <Paper
                  radius="sm"
                  bg="dark"
                  p="sm"
                  style={{
                    flexShrink: 0,
                  }}
                >
                  <IconFileInvoice size={22} color="white" />
                </Paper>

                <Stack
                  gap={2}
                  style={{
                    minWidth: 0,
                  }}
                >
                  <Text
                    fw={900}
                    size="xl"
                    lh={1}
                    truncate
                    style={{
                      letterSpacing: '-0.03em',
                    }}
                  >
                    RAPIEXPRESS
                  </Text>

                  <Text size="xs" c="dimmed">
                    Comprobante de servicio
                  </Text>
                </Stack>
              </Group>

              {/* INVOICE NUMBER */}
              <Stack
                gap={4}
                align="flex-end"
                style={{
                  flex: '0 1 auto',
                }}
              >
                <Text size="xs" fw={700} tt="uppercase" c="dimmed">
                  Factura
                </Text>

                <Text
                  fw={900}
                  size="md"
                  ff="monospace"
                  style={{
                    overflowWrap: 'anywhere',
                  }}
                >
                  {invoiceNumber}
                </Text>

                <Badge
                  size="sm"
                  variant="light"
                  color="green"
                  leftSection={<IconCheck size={12} />}
                >
                  Pagada
                </Badge>
              </Stack>
            </Group>

            <Divider />

            {/* ========================================================
                BILLING INFORMATION
            ======================================================== */}

            <SimpleGrid cols={{ base: 1, xs: 2 }} spacing="sm">
              <InvoiceInfo
                label="Cliente"
                value={shipment.customer}
                secondary={shipment.customerId}
              />

              <InvoiceInfo label="Fecha de emisión" value={shipment.date} />
            </SimpleGrid>

            {/* ========================================================
                SHIPMENT REFERENCE
            ======================================================== */}

            <Paper
              radius="sm"
              p="sm"
              bg="gray.0"
              style={{
                border: '1px solid var(--mantine-color-gray-2)',
              }}
            >
              <Group justify="space-between" align="center" gap="sm" wrap="wrap">
                <Group gap="xs" wrap="nowrap">
                  <Paper radius="sm" p={6} bg="white">
                    <IconTruck size={17} color="var(--mantine-color-blue-6)" />
                  </Paper>

                  <Stack gap={1}>
                    <Text size="xs" fw={700} tt="uppercase" c="dimmed">
                      Envío asociado
                    </Text>

                    <Text size="sm" fw={700}>
                      {shipment.id}
                    </Text>
                  </Stack>
                </Group>

                <Badge size="sm" variant="light" color="blue">
                  Shipment
                </Badge>
              </Group>
            </Paper>

            {/* ========================================================
                SERVICE DETAIL
            ======================================================== */}

            <Stack gap="xs">
              <Text size="xs" fw={700} tt="uppercase" c="dimmed">
                Detalle del servicio
              </Text>

              <Paper withBorder radius="sm" p="sm">
                <Group justify="space-between" align="flex-start" gap="md" wrap="wrap">
                  <Group
                    gap="sm"
                    wrap="nowrap"
                    style={{
                      minWidth: 0,
                      flex: '1 1 220px',
                    }}
                  >
                    <Paper
                      radius="sm"
                      p={7}
                      bg="gray.0"
                      style={{
                        flexShrink: 0,
                      }}
                    >
                      <IconPackage size={18} color="var(--mantine-color-gray-7)" />
                    </Paper>

                    <Stack
                      gap={2}
                      style={{
                        minWidth: 0,
                      }}
                    >
                      <Text fw={700} size="sm">
                        Servicio de envío
                      </Text>

                      <Text
                        size="xs"
                        c="dimmed"
                        style={{
                          overflowWrap: 'anywhere',
                        }}
                      >
                        Tracking: {shipment.tracking}
                      </Text>
                    </Stack>
                  </Group>

                  <Text
                    fw={800}
                    size="sm"
                    style={{
                      whiteSpace: 'nowrap',
                    }}
                  >
                    $45.00
                  </Text>
                </Group>
              </Paper>
            </Stack>

            {/* ========================================================
                TOTALS
            ======================================================== */}

            <Group justify="flex-end" align="flex-start" gap="xl">
              <Stack gap={5} align="flex-end">
                <Text size="sm" c="dimmed">
                  Subtotal
                </Text>

                <Text size="sm" c="dimmed">
                  Impuestos
                </Text>

                <Text fw={800} size="lg">
                  Total
                </Text>
              </Stack>

              <Stack gap={5} align="flex-end">
                <Text size="sm">$45.00</Text>

                <Text size="sm">$0.00</Text>

                <Text fw={900} size="lg">
                  $45.00
                </Text>
              </Stack>
            </Group>

            <Divider />

            {/* ========================================================
                PAYMENT STATUS
            ======================================================== */}

            <Group justify="space-between" align="center" gap="sm" wrap="wrap">
              <Stack gap={1}>
                <Text size="xs" fw={700} tt="uppercase" c="dimmed">
                  Método de pago
                </Text>

                <Text size="sm" fw={600}>
                  Tarjeta / Pago electrónico
                </Text>
              </Stack>

              <Badge size="sm" variant="light" color="green">
                Pago confirmado
              </Badge>
            </Group>
          </Stack>
        </Paper>

        {/* ============================================================
            ACTIONS
        ============================================================ */}

        <Group grow gap="xs" wrap="wrap">
          <Button
            variant="default"
            size="sm"
            leftSection={<IconDownload size={17} />}
            style={{
              flex: '1 1 160px',
              minWidth: 0,
            }}
          >
            Descargar PDF
          </Button>

          <Button
            size="sm"
            leftSection={<IconPrinter size={17} />}
            style={{
              flex: '1 1 160px',
              minWidth: 0,
            }}
          >
            Imprimir factura
          </Button>
        </Group>
      </Stack>
    </Modal>
  )
}

/* ================================================================
   INVOICE INFO
================================================================ */

interface InvoiceInfoProps {
  label: string
  value: string
  secondary?: string
}

function InvoiceInfo({ label, value, secondary }: InvoiceInfoProps) {
  return (
    <Paper
      withBorder
      radius="sm"
      p="sm"
      style={{
        minWidth: 0,
      }}
    >
      <Stack gap={3}>
        <Text size="xs" fw={700} tt="uppercase" c="dimmed">
          {label}
        </Text>

        <Text
          fw={800}
          size="sm"
          style={{
            overflowWrap: 'anywhere',
          }}
        >
          {value}
        </Text>

        {secondary && (
          <Text
            size="xs"
            c="dimmed"
            style={{
              overflowWrap: 'anywhere',
            }}
          >
            {secondary}
          </Text>
        )}
      </Stack>
    </Paper>
  )
}
