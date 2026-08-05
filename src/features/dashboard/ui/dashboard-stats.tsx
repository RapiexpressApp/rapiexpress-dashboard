import { Grid } from '@mantine/core'

import { StatCard } from '~/features/dashboard/ui/stat-card'

export function DashboardStats() {
  return (
    <Grid
      gap={{
        base: 'md',
        sm: 'lg',
        lg: 'xl',
      }}
    >
      <Grid.Col
        span={{
          base: 12,
          sm: 6,
          lg: 3,
        }}
      >
        <StatCard
          active
          title="Envíos totales"
          value="1,240"
          caption="Aumentó respecto al mes pasado"
        />
      </Grid.Col>

      <Grid.Col
        span={{
          base: 12,
          sm: 6,
          lg: 3,
        }}
      >
        <StatCard
          title="Entregas completadas"
          value="980"
          caption="Aumentó respecto al mes pasado"
        />
      </Grid.Col>

      <Grid.Col
        span={{
          base: 12,
          sm: 6,
          lg: 3,
        }}
      >
        <StatCard title="En tránsito" value="210" caption="Actualmente en ruta" />
      </Grid.Col>

      <Grid.Col
        span={{
          base: 12,
          sm: 6,
          lg: 3,
        }}
      >
        <StatCard title="Pendientes" value="50" caption="Requieren revisión" trend="none" />
      </Grid.Col>
    </Grid>
  )
}
