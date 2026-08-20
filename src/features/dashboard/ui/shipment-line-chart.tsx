import { LineChart } from '@mantine/charts'
import { Box, useMatches } from '@mantine/core'

const data = [
  {
    day: 'Lun',
    shipments: 80,
  },
  {
    day: 'Mar',
    shipments: 120,
  },
  {
    day: 'Mié',
    shipments: 95,
  },
  {
    day: 'Jue',
    shipments: 160,
  },
  {
    day: 'Vie',
    shipments: 140,
  },
  {
    day: 'Sáb',
    shipments: 200,
  },
]

export function ShipmentLineChart() {
  const height = useMatches({
    base: 220,
    xs: 240,
    sm: 280,
    md: 320,
    lg: 360,
    xl: 400,
  })

  const withDots = useMatches({
    base: false,
    sm: true,
  })

  const withXAxis = useMatches({
    base: true,
    sm: true,
  })

  const withYAxis = useMatches({
    base: false,
    sm: true,
  })

  return (
    <Box w="100%">
      <LineChart
        h={height}
        data={data}
        dataKey="day"
        curveType="natural"
        withLegend={false}
        withTooltip
        withDots={withDots}
        withXAxis={withXAxis}
        withYAxis={withYAxis}
        gridAxis="xy"
        tickLine="none"
        strokeWidth={3}
        series={[
          {
            name: 'shipments',
            color: 'blue.6',
          },
        ]}
      />
    </Box>
  )
}
