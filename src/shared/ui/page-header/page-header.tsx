import { Box, Group, Stack, Text, Title } from '@mantine/core'
import type { PageHeaderProps } from '~/shared/ui/page-header/types/page-header-types'

export function PageHeader({ title, description, actions }: PageHeaderProps) {
  return (
    <Box w="100%">
      <Group justify="space-between" align="flex-end" gap="xl" wrap="wrap">
        <Stack gap={10}>
          <Group gap={10} align="center">
            <Box
              w={4}
              h={32}
              style={{
                borderRadius: 999,
                background: 'var(--rx-blue)',
              }}
            />

            <Title
              order={1}
              fw={700}
              lh={1.15}
              c="var(--mantine-color-text)"
              style={{
                fontSize: 'clamp(1.65rem, 2vw, 2rem)',
                letterSpacing: '-0.03em',
              }}
            >
              {title}
            </Title>
          </Group>

          {description && (
            <Text size="sm" c="dimmed" lh={1.6} maw={620} pl={14}>
              {description}
            </Text>
          )}
        </Stack>

        {actions && (
          <Group gap="sm" wrap="wrap">
            {actions}
          </Group>
        )}
      </Group>
    </Box>
  )
}
