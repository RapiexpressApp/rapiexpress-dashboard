import { Box, Button, Grid, Group, Stack, Text, Title } from '@mantine/core'
import { IconPlus, IconUpload } from '@tabler/icons-react'
import { StatCard } from '~/features/dashboard/ui/stat-card'
import { palette } from '~/shared/config/palette'

export function DashboardPage() {
  return (
    <Stack gap="lg">
      <Group justify="space-between" align="flex-start" wrap="wrap">
        <Box>
          <Title order={2} c={palette.ink} style={{ fontSize: 30 }}>
            Dashboard
          </Title>
          <Text c={palette.muted} mt={4}>
            Planifica, prioriza y completa tus tareas con facilidad.
          </Text>
        </Box>
        <Group gap="sm">
          <Button radius="xl" color={palette.primary} leftSection={<IconPlus size={18} />}>
            Agregar proyecto
          </Button>
          <Button
            radius="xl"
            variant="default"
            leftSection={<IconUpload size={18} />}
            styles={{ root: { borderColor: palette.border, color: palette.text } }}
          >
            Importar datos
          </Button>
        </Group>
      </Group>

      <Grid gutter="lg">
        <Grid.Col span={{ base: 12, xs: 6, lg: 3 }}>
          <StatCard
            active
            title="Envíos totales"
            value="1,240"
            caption="Aumentó respecto al mes pasado"
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 6, lg: 3 }}>
          <StatCard
            title="Entregas completadas"
            value="980"
            caption="Aumentó respecto al mes pasado"
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 6, lg: 3 }}>
          <StatCard title="En tránsito" value="210" caption="Aumentó respecto al mes pasado" />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 6, lg: 3 }}>
          <StatCard title="Pendientes" value="50" caption="En revisión" trend="none" />
        </Grid.Col>
      </Grid>
    </Stack>
  )
}
