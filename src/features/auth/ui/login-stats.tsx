import { Flex, Paper, Text } from '@mantine/core'

const stats = [
  {
    value: '+10K',
    label: 'Envíos gestionados',
  },
  {
    value: '24/7',
    label: 'Disponibilidad',
  },
  {
    value: '100%',
    label: 'Control operativo',
  },
]

export function LoginStats() {
  return (
    <Flex gap="xl" wrap="wrap">
      {stats.map(item => (
        <Paper
          key={item.label}
          p="lg"
          radius="xl"
          style={{
            minWidth: 150,
            background: 'rgba(255,255,255,.08)',
            backdropFilter: 'blur(18px)',
            border: '1px solid rgba(255,255,255,.18)',
          }}
        >
          <Text
            c="white"
            fw={800}
            style={{
              fontSize: 34,
            }}
          >
            {item.value}
          </Text>

          <Text c="rgba(255,255,255,.70)">{item.label}</Text>
        </Paper>
      ))}
    </Flex>
  )
}
