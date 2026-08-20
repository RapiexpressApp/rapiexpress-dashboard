import type { ReactNode } from 'react'
import {
  Badge,
  Button,
  Divider,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
} from '@mantine/core'
import {
  IconBox,
  IconCheck,
  IconDownload,
  IconMapPin,
  IconPackage,
  IconPhone,
  IconSettings,
  IconWorld,
} from '@tabler/icons-react'

export function ShipmentLabelPreview() {
  return (
    <Paper
      withBorder
      radius="lg"
      p="sm"
      bg="var(--mantine-color-blue-light)"
      w="100%"
      style={{
        minWidth: 0,
      }}
    >
      <Stack gap="sm" w="100%">
        {/* ============================================================
            PREVIEW HEADER
        ============================================================ */}

        <Group justify="space-between" align="center" gap="xs" wrap="wrap">
          <Group gap="xs" wrap="nowrap">
            <ThemeIcon size={30} radius="sm" variant="light" color="blue">
              <IconCheck size={16} />
            </ThemeIcon>

            <Stack gap={0}>
              <Text size="sm" fw={700}>
                Shipping label
              </Text>

              <Text size="xs" c="dimmed">
                International shipment preview
              </Text>
            </Stack>
          </Group>

          <Badge size="sm" variant="light" color="green">
            Ready
          </Badge>
        </Group>

        {/* ============================================================
            SHIPPING LABEL
        ============================================================ */}

        <Paper
          radius="md"
          bg="white"
          c="dark"
          w="100%"
          p="md"
          style={{
            minWidth: 0,
            border: '1px solid var(--mantine-color-gray-3)',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.06)',
          }}
        >
          <Stack gap="md">
            {/* ========================================================
                COURIER HEADER
            ======================================================== */}

            <Group justify="space-between" align="center" gap="sm" wrap="nowrap">
              <Stack
                gap={3}
                style={{
                  minWidth: 0,
                  flex: 1,
                }}
              >
                <Text
                  fw={900}
                  size="xl"
                  lh={1}
                  truncate
                  style={{
                    letterSpacing: '-0.03em',
                    fontSize: 'clamp(1.05rem, 4vw, 1.35rem)',
                  }}
                >
                  RAPIEXPRESS
                </Text>

                <Text size="xs" c="dimmed" truncate>
                  International Courier
                </Text>
              </Stack>

              <Paper
                radius="sm"
                bg="dark"
                px="sm"
                py={8}
                style={{
                  flexShrink: 0,
                }}
              >
                <Text fw={900} size="xs" c="white" lh={1}>
                  MIA
                </Text>
              </Paper>
            </Group>

            <Divider />

            {/* ========================================================
                SERVICE / ROUTE
            ======================================================== */}

            <Paper
              radius="sm"
              p="sm"
              bg="gray.0"
              style={{
                minWidth: 0,
                border: '1px solid var(--mantine-color-gray-2)',
              }}
            >
              <Group justify="space-between" align="center" gap="sm" wrap="wrap">
                <Group
                  gap="xs"
                  wrap="nowrap"
                  style={{
                    minWidth: 0,
                    flex: 1,
                  }}
                >
                  <ThemeIcon
                    size={30}
                    radius="sm"
                    variant="light"
                    color="blue"
                    style={{
                      flexShrink: 0,
                    }}
                  >
                    <IconWorld size={16} />
                  </ThemeIcon>

                  <Stack
                    gap={0}
                    style={{
                      minWidth: 0,
                    }}
                  >
                    <Text size="xs" fw={700} tt="uppercase" c="dimmed">
                      Service
                    </Text>

                    <Text
                      size="sm"
                      fw={800}
                      style={{
                        overflowWrap: 'anywhere',
                      }}
                    >
                      International Express
                    </Text>
                  </Stack>
                </Group>

                <Badge
                  size="sm"
                  variant="light"
                  color="blue"
                  style={{
                    flexShrink: 0,
                  }}
                >
                  COURIER
                </Badge>
              </Group>
            </Paper>

            {/* ========================================================
                GUIDE NUMBER
            ======================================================== */}

            <Paper radius="sm" p="sm" bg="dark" c="white">
              <Stack gap={4}>
                <Text size="xs" fw={700} tt="uppercase" c="gray.4">
                  Tracking / guía hija
                </Text>

                <Text
                  fw={900}
                  size="md"
                  ff="monospace"
                  style={{
                    fontSize: 'clamp(0.8rem, 3.5vw, 1rem)',
                    letterSpacing: '0.05em',
                    overflowWrap: 'anywhere',
                    wordBreak: 'break-word',
                  }}
                >
                  RX-EC-492188274
                </Text>
              </Stack>
            </Paper>

            {/* ========================================================
                SHIPPER
            ======================================================== */}

            <AddressBlock
              title="Shipper / Consignante"
              icon={<IconPackage size={16} />}
              name="Rapiexpress Logistics LLC"
              address="1200 NW 72nd Ave"
              city="Miami, FL 33126"
              country="United States"
              phone="+1 305 555 0182"
            />

            {/* ========================================================
                RECIPIENT
            ======================================================== */}

            <AddressBlock
              title="Recipient / Consignatario"
              icon={<IconMapPin size={16} />}
              name="Alejandro Rodriguez"
              address="Av. 10 de Agosto N34-120"
              city="Quito, Pichincha"
              country="Ecuador"
              phone="+593 99 123 4567"
            />

            {/* ========================================================
                PACKAGE INFORMATION
            ======================================================== */}

            <SimpleGrid cols={{ base: 2, xs: 4 }} spacing="xs">
              <InfoBlock label="Packages" value="1 / 1" />

              <InfoBlock label="Weight" value="4.5 lb" />

              <InfoBlock label="Origin" value="USA" />

              <InfoBlock label="Destination" value="EC" />
            </SimpleGrid>

            {/* ========================================================
                CONTENT
            ======================================================== */}

            <Paper
              withBorder
              radius="sm"
              p="sm"
              style={{
                minWidth: 0,
              }}
            >
              <Stack gap={4}>
                <Group gap={6} align="center">
                  <Text c="dimmed">
                    <IconBox size={15} />
                  </Text>

                  <Text size="xs" fw={700} tt="uppercase" c="dimmed">
                    Contents / Descripción
                  </Text>
                </Group>

                <Text
                  size="sm"
                  fw={700}
                  style={{
                    overflowWrap: 'anywhere',
                  }}
                >
                  Consumer electronics
                </Text>

                <Text size="xs" c="dimmed">
                  1 unit · Non-commercial shipment
                </Text>
              </Stack>
            </Paper>

            {/* ========================================================
                SHIPPING FLAGS
            ======================================================== */}

            <Group gap="xs" wrap="wrap">
              <Badge size="xs" variant="light" color="orange">
                FRAGILE
              </Badge>

              <Badge size="xs" variant="light" color="gray">
                NON-HAZARDOUS
              </Badge>

              <Badge size="xs" variant="light" color="blue">
                PERSONAL USE
              </Badge>
            </Group>

            <Divider />

            {/* ========================================================
                BARCODE
            ============================================================ */}

            <Stack gap={4}>
              <Barcode />

              <Text
                size="xs"
                ta="center"
                c="dimmed"
                ff="monospace"
                style={{
                  letterSpacing: '0.08em',
                  overflowWrap: 'anywhere',
                }}
              >
                RX-EC-492188274
              </Text>
            </Stack>

            <Divider variant="dashed" />

            {/* ========================================================
                FOOTER
            ======================================================== */}

            <Group justify="space-between" align="center" gap="xs" wrap="wrap">
              <Stack gap={1}>
                <Text size="xs" fw={700}>
                  SHIP DATE
                </Text>

                <Text size="xs" c="dimmed">
                  20/08/2026
                </Text>
              </Stack>

              <Stack gap={1} align="flex-end">
                <Text size="xs" fw={700}>
                  SERVICE
                </Text>

                <Text size="xs" c="dimmed">
                  EXPRESS
                </Text>
              </Stack>
            </Group>
          </Stack>
        </Paper>

        {/* ============================================================
            ACTIONS
        ============================================================ */}

        <Group grow gap="xs" wrap="wrap">
          <Button
            variant="white"
            color="dark"
            size="sm"
            leftSection={<IconDownload size={16} />}
            style={{
              flex: '1 1 150px',
              minWidth: 0,
            }}
          >
            Save PDF
          </Button>

          <Button
            variant="light"
            color="dark"
            size="sm"
            leftSection={<IconSettings size={16} />}
            style={{
              flex: '1 1 150px',
              minWidth: 0,
            }}
          >
            Configure
          </Button>
        </Group>
      </Stack>
    </Paper>
  )
}

/* ================================================================
   ADDRESS BLOCK
================================================================ */

interface AddressBlockProps {
  title: string
  icon: ReactNode
  name: string
  address: string
  city: string
  country: string
  phone: string
}

function AddressBlock({ title, icon, name, address, city, country, phone }: AddressBlockProps) {
  return (
    <Paper
      withBorder
      radius="sm"
      p="sm"
      style={{
        minWidth: 0,
      }}
    >
      <Stack gap="xs">
        <Group gap={6} align="center">
          <Text c="dimmed">{icon}</Text>

          <Text size="xs" fw={700} tt="uppercase" c="dimmed">
            {title}
          </Text>
        </Group>

        <Text
          fw={800}
          size="sm"
          style={{
            overflowWrap: 'anywhere',
          }}
        >
          {name}
        </Text>

        <Text
          size="xs"
          c="dimmed"
          style={{
            overflowWrap: 'anywhere',
          }}
        >
          {address}
        </Text>

        <Text size="xs" c="dimmed">
          {city}
        </Text>

        <Text size="xs" fw={700}>
          {country}
        </Text>

        <Group gap={5} wrap="nowrap">
          <IconPhone size={13} color="var(--mantine-color-dimmed)" />

          <Text
            size="xs"
            c="dimmed"
            style={{
              overflowWrap: 'anywhere',
            }}
          >
            {phone}
          </Text>
        </Group>
      </Stack>
    </Paper>
  )
}

/* ================================================================
   INFO BLOCK
================================================================ */

interface InfoBlockProps {
  label: string
  value: string
}

function InfoBlock({ label, value }: InfoBlockProps) {
  return (
    <Paper
      radius="sm"
      p="xs"
      bg="gray.0"
      style={{
        minWidth: 0,
        border: '1px solid var(--mantine-color-gray-2)',
      }}
    >
      <Stack gap={2}>
        <Text size="xs" fw={700} tt="uppercase" c="dimmed" truncate>
          {label}
        </Text>

        <Text
          fw={800}
          size="sm"
          style={{
            overflowWrap: 'anywhere',
            wordBreak: 'break-word',
          }}
        >
          {value}
        </Text>
      </Stack>
    </Paper>
  )
}

/* ================================================================
   BARCODE
================================================================ */

function Barcode() {
  return (
    <div
      role="img"
      aria-label="Shipment barcode"
      style={{
        width: '100%',
        height: 'clamp(40px, 9vw, 60px)',
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'center',
        gap: 2,
        overflow: 'hidden',
        paddingInline: 4,
      }}
    >
      {Array.from({ length: 56 }).map((_, index) => {
        const width = index % 9 === 0 ? 3 : index % 4 === 0 ? 2 : 1

        return (
          <span
            key={index}
            style={{
              width,
              minWidth: width,
              backgroundColor: '#111',
            }}
          />
        )
      })}
    </div>
  )
}
