import { ActionIcon, Box, Group, Pagination, Text } from '@mantine/core'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'

import type { DataTablePaginationProps } from '~/shared/ui/data-table/types/data-table-types'

export function DataTablePagination({ page, pageSize, total, onChange }: DataTablePaginationProps) {
  const totalPages = Math.ceil(total / pageSize)

  if (totalPages <= 1) return null

  const firstItem = (page - 1) * pageSize + 1
  const lastItem = Math.min(page * pageSize, total)

  const handlePrevious = () => (page > 1 ? onChange(page - 1) : undefined)

  const handleNext = () => (page < totalPages ? onChange(page + 1) : undefined)

  return (
    <Box w="100%">
      <Group justify="space-between" align="center" gap="md" wrap="wrap">
        {/* Información */}
        <Text
          size="sm"
          c="dimmed"
          style={{
            flex: '1 1 180px',
          }}
        >
          Mostrando{' '}
          <Text component="span" fw={600} c="var(--mantine-color-text)">
            {firstItem}–{lastItem}
          </Text>{' '}
          de{' '}
          <Text component="span" fw={600} c="var(--mantine-color-text)">
            {total}
          </Text>
        </Text>

        {/* Navegación */}
        <Group
          gap={6}
          justify="center"
          style={{
            flexShrink: 0,
          }}
        >
          <ActionIcon
            variant="default"
            size={36}
            radius="md"
            disabled={page === 1}
            onClick={handlePrevious}
            aria-label="Página anterior"
          >
            <IconChevronLeft size={18} stroke={1.8} />
          </ActionIcon>

          <Pagination
            value={page}
            onChange={onChange}
            total={totalPages}
            size="sm"
            radius="md"
            siblings={1}
            boundaries={1}
            withEdges={false}
          />

          <ActionIcon
            variant="default"
            size={36}
            radius="md"
            disabled={page === totalPages}
            onClick={handleNext}
            aria-label="Página siguiente"
          >
            <IconChevronRight size={18} stroke={1.8} />
          </ActionIcon>
        </Group>
      </Group>
    </Box>
  )
}
