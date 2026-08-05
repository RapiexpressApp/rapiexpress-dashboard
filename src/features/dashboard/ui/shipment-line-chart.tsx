import { LineChart } from '@mantine/charts'

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
  return (
    <LineChart
      h="100%"
      data={data}
      dataKey="day"
      curveType="natural"
      withLegend={false}
      gridAxis="xy"
      series={[
        {
          name: 'shipments',
          color: 'blue.6',
        },
      ]}
    />
  )
}
