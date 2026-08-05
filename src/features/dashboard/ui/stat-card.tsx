import { ActionIcon, Box, Group, Paper, Text } from '@mantine/core'
import { IconArrowUpRight, IconTrendingUp } from '@tabler/icons-react'
import { motion } from 'motion/react'

import { palette } from '~/shared/config/palette'

interface Props {
  title: string
  value: string
  caption: string
  active?: boolean
  trend?: 'up' | 'none'
}

const MotionDiv = motion.div

export function StatCard({ title, value, caption, active = false, trend = 'up' }: Props) {
  return (
    <MotionDiv
      whileHover={{
        y: -4,
      }}
      transition={{
        duration: 0.2,
      }}
      style={{
        height: '100%',
      }}
    >
      <Paper
        radius="xl"
        p="lg"
        style={{
          height: '100%',
          minHeight: 170,

          background: active
            ? `linear-gradient(
                135deg,
                ${palette.primary},
                ${palette.primaryDark}
              )`
            : '#fff',

          border: active ? 'none' : `1px solid ${palette.border}`,

          boxShadow: active ? '0 12px 30px rgba(37,99,235,.18)' : '0 4px 20px rgba(15,23,42,.04)',

          transition: 'all .25s ease',
        }}
      >
        {/* HEADER */}

        <Group justify="space-between" align="center">
          <Text size="sm" fw={600} c={active ? 'rgba(255,255,255,.8)' : palette.muted}>
            {title}
          </Text>

          <ActionIcon
            size={34}
            radius="xl"
            variant={active ? 'white' : 'light'}
            color={active ? palette.primary : 'gray'}
          >
            <IconArrowUpRight size={17} />
          </ActionIcon>
        </Group>

        {/* VALUE */}

        <Text
          mt="lg"
          fw={800}
          c={active ? 'white' : palette.ink}
          style={{
            fontSize: 38,
            lineHeight: 1,
            letterSpacing: '-1px',
          }}
        >
          {value}
        </Text>

        {/* FOOTER */}

        <Group gap={8} mt="lg" wrap="nowrap">
          {trend === 'up' && (
            <Box
              style={{
                width: 26,
                height: 26,
                borderRadius: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',

                background: active ? 'rgba(255,255,255,.18)' : '#DCFCE7',
              }}
            >
              <IconTrendingUp size={15} color={active ? '#fff' : palette.success} />
            </Box>
          )}

          <Text size="xs" fw={500} c={active ? 'rgba(255,255,255,.75)' : palette.muted}>
            {caption}
          </Text>
        </Group>
      </Paper>
    </MotionDiv>
  )
}
