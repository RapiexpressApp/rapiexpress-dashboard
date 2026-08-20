import { Button, Group, Paper } from '@mantine/core'
import { motion } from 'motion/react'

import type { DataTableToolbarProps } from '~/shared/ui/data-table-toolbar/types/data-table-toolbar-types'

export function DataTableToolbar({ filters, action }: DataTableToolbarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Paper withBorder radius="md" p="sm" bg="var(--mantine-color-body)">
        <Group justify="space-between" align="center" gap="sm" wrap="wrap">
          <Group flex={1} gap="sm" wrap="wrap">
            {filters}
          </Group>

          {action && (
            <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
              <Button leftSection={action.icon} radius="md" size="sm" onClick={action.onClick}>
                {action.label}
              </Button>
            </motion.div>
          )}
        </Group>
      </Paper>
    </motion.div>
  )
}
