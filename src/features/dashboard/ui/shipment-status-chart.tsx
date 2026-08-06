import { DonutChart } from '@mantine/charts'
import { Box, useMatches } from '@mantine/core'

const data = [
  {
    name: 'Entregados',
    value: 120,
    color: 'green.6',
  },
  {
    name: 'En tránsito',
    value: 60,
    color: 'blue.6',
  },
  {
    name: 'Pendientes',
    value: 30,
    color: 'yellow.6',
  },
]

export function ShipmentStatusChart() {
  const size = useMatches({
    base: 220,
    xs: 240,
    sm: 260,
    md: 300,
    lg: 340,
    xl: 380,
  })

  const thickness = useMatches({
    base: 30,
    xs: 34,
    sm: 40,
    md: 46,
    lg: 52,
    xl: 58,
  })

  const withLabels = useMatches({
    base: false,
    sm: true,
  })

  return (
    <Box
      w="100%"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <DonutChart
        data={data}
        size={size}
        thickness={thickness}
        withLegend
        withTooltip
        withLabels={withLabels}
        chartLabel="210 envíos"
        tooltipDataSource="segment"
      />
    </Box>
  )
}
