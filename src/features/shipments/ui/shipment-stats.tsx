import { SimpleGrid } from '@mantine/core'

import { StatCard } from '~/shared/ui/stat-card/stat-card'

const stats = [
  {
    title: 'Envíos totales',
    value: '1,240',
    caption: 'Aumentó respecto al mes pasado',
    active: true,
  },
  {
    title: 'Entregas completadas',
    value: '980',
    caption: 'Aumentó respecto al mes pasado',
  },
  {
    title: 'En tránsito',
    value: '210',
    caption: 'Actualmente en ruta',
  },
  {
    title: 'Pendientes',
    value: '50',
    caption: 'Requieren revisión',
    trend: 'none' as const,
  },
]

export function ShipmentStats() {
  return (
    <SimpleGrid
      cols={{
        base: 1,
        sm: 2,
        lg: 4,
      }}
      spacing="lg"
    >
      {stats.map(stat => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </SimpleGrid>
  )
}
