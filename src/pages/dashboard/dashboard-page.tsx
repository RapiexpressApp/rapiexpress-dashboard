import { Box, Stack } from '@mantine/core'

import { DashboardChart } from '~/features/dashboard/ui/dashboard-chart'
import { DashboardStats } from '~/features/dashboard/ui/dashboard-stats'
import { DashboardTable } from '~/features/dashboard/ui/dashboard-table'

export function DashboardPage() {
  return (
    <Box w="100%" maw={1600} mx="auto">
      <Stack gap="xl">
        <DashboardStats />

        <DashboardChart />

        <DashboardTable />
      </Stack>
    </Box>
  )
}
