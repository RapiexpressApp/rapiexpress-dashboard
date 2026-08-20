import { Autocomplete, Group, Select } from '@mantine/core'
import { IconAdjustmentsHorizontal, IconSearch } from '@tabler/icons-react'

import { DataTableToolbar } from '~/shared/ui/data-table-toolbar/data-table-toolbar'

const clientSuggestions = [
  'Kevin Villegas',
  'Carlos Pérez',
  'María González',
  'Juan Rodríguez',
  'Laura Martínez',
]

export function ClientsToolbar() {
  return (
    <DataTableToolbar
      filters={
        <Group flex={1} gap="sm" wrap="wrap" align="center">
          <Autocomplete
            flex={1}
            miw={{ base: '100%', sm: 300 }}
            placeholder="Buscar cliente..."
            data={clientSuggestions}
            leftSection={<IconSearch size={17} stroke={1.8} />}
            radius="md"
            size="sm"
            limit={5}
            comboboxProps={{
              shadow: 'sm',
              radius: 'md',
            }}
          />

          <Select
            placeholder="Estado"
            data={[
              { value: 'active', label: 'Activos' },
              { value: 'inactive', label: 'Inactivos' },
            ]}
            clearable
            leftSection={<IconAdjustmentsHorizontal size={17} stroke={1.8} />}
            w={{ base: '100%', xs: 180 }}
            radius="md"
            size="sm"
            comboboxProps={{
              shadow: 'sm',
              radius: 'md',
            }}
          />
        </Group>
      }
    />
  )
}
