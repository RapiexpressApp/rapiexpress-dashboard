import { Box, Grid, Group, Paper, Stack, Text, ThemeIcon } from '@mantine/core'
import { IconChartLine, IconPackage } from '@tabler/icons-react'

import { ShipmentLineChart } from '~/features/dashboard/ui/shipment-line-chart'
import { ShipmentStatusChart } from '~/features/dashboard/ui/shipment-status-chart'

import { palette } from '~/shared/config/palette'

export function DashboardChart() {
  return (
    <Grid gap="lg">
      <Grid.Col
        span={{
          base: 12,
          lg: 7,
        }}
      >
        <Paper
          radius="xl"
          p="xl"
          withBorder
          style={{
            background: palette.surface,
            borderColor: palette.border,
            boxShadow: '0 10px 30px rgba(0,0,0,.04)',
            height: '100%',
          }}
        >
          <Group justify="space-between" align="center" mb="xl" wrap="wrap">
            <Group gap="md" wrap="nowrap">
              <ThemeIcon size={50} radius="md" variant="light" color="blue">
                <IconChartLine size={26} />
              </ThemeIcon>

              <Stack gap={2}>
                <Text fw={800} size="lg">
                  Envíos registrados
                </Text>

                <Text size="sm" c={palette.muted}>
                  Tendencia semanal de envíos
                </Text>
              </Stack>
            </Group>

            <Text
              size="sm"
              fw={700}
              c="blue"
              px="md"
              py={6}
              style={{
                background: 'rgba(37,99,235,.08)',
                borderRadius: 999,
              }}
            >
              Esta semana
            </Text>
          </Group>

          <Box
            style={{
              width: '100%',
              height: 'clamp(250px, 35vw, 380px)',
            }}
          >
            <ShipmentLineChart />
          </Box>
        </Paper>
      </Grid.Col>

      <Grid.Col
        span={{
          base: 12,
          lg: 5,
        }}
      >
        <Paper
          radius="xl"
          p="xl"
          withBorder
          style={{
            background: palette.surface,
            borderColor: palette.border,
            boxShadow: '0 10px 30px rgba(0,0,0,.04)',
            height: '100%',
          }}
        >
          <Group mb="xl" wrap="nowrap">
            <ThemeIcon size={50} radius="md" variant="light" color="green">
              <IconPackage size={26} />
            </ThemeIcon>

            <Stack gap={2}>
              <Text fw={800} size="lg">
                Estado actual
              </Text>

              <Text size="sm" c={palette.muted}>
                Distribución de pedidos
              </Text>
            </Stack>
          </Group>

          <Box
            style={{
              width: '100%',
              minHeight: 320,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ShipmentStatusChart />
          </Box>
        </Paper>
      </Grid.Col>
    </Grid>
  )
}
