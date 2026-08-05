import { ActionIcon, Group, Paper, Text } from '@mantine/core'
import { IconArrowUpRight, IconTrendingUp } from '@tabler/icons-react'
import { palette } from '~/shared/config/palette'

interface Props {
  title: string
  value: string
  caption: string
  active?: boolean
  trend?: 'up' | 'none'
}

export function StatCard({ title, value, caption, active = false, trend = 'up' }: Props) {
  return (
    <Paper
      radius="lg"
      p="lg"
      withBorder={!active}
      style={{
        height: '100%',
        borderColor: palette.border,
        background: active
          ? `linear-gradient(150deg, ${palette.primary}, ${palette.primaryDark})`
          : palette.surface,
      }}
    >
      <Group justify="space-between" align="flex-start" wrap="nowrap">
        <Text size="sm" fw={600} c={active ? 'rgba(255,255,255,.85)' : palette.muted}>
          {title}
        </Text>
        <ActionIcon
          variant={active ? 'white' : 'default'}
          radius="xl"
          size={30}
          style={active ? undefined : { borderColor: palette.border }}
        >
          <IconArrowUpRight size={16} color={active ? palette.primary : palette.muted} />
        </ActionIcon>
      </Group>

      <Text
        mt="md"
        fw={800}
        c={active ? '#fff' : palette.ink}
        style={{ fontSize: 40, lineHeight: 1 }}
      >
        {value}
      </Text>

      <Group gap={6} mt="md" wrap="nowrap">
        {trend === 'up' && <IconTrendingUp size={16} color={active ? '#fff' : palette.success} />}
        <Text size="xs" c={active ? 'rgba(255,255,255,.75)' : palette.muted}>
          {caption}
        </Text>
      </Group>
    </Paper>
  )
}
