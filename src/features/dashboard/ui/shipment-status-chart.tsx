import { DonutChart } from '@mantine/charts'

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
  return (
    <DonutChart
      size={320}
      thickness={55}
      data={data}
      withLegend
      withTooltip
      withLabels
      chartLabel="210 envíos"
      tooltipDataSource="segment"
      mx="auto"
    />
  )
}
