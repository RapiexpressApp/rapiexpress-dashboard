import { Group, Select, TextInput } from '@mantine/core'
import { IconAdjustmentsHorizontal, IconPlus, IconSearch } from '@tabler/icons-react'

import { DataTableToolbar } from '~/shared/ui/data-table-toolbar/data-table-toolbar'

interface ShipmentsToolbarProps {
  onCreate: () => void
}

export function ShipmentsToolbar({ onCreate }: ShipmentsToolbarProps) {
  return (
    <DataTableToolbar
      filters={
        <Group flex={1} gap="sm" wrap="wrap">
          <TextInput
            flex={1}
            miw={{ base: '100%', sm: 280 }}
            placeholder="Buscar cliente o tracking..."
            leftSection={<IconSearch size={16} />}
            radius="md"
          />

          <Select
            placeholder="Filtrar por estado"
            data={[
              { value: 'received', label: 'Recibidos' },
              { value: 'sorting', label: 'En clasificación' },
              { value: 'ready', label: 'Listos' },
            ]}
            clearable
            searchable
            leftSection={<IconAdjustmentsHorizontal size={16} />}
            leftSectionWidth={38}
            w={{ base: '100%', xs: 190 }}
            radius="md"
            variant="default"
            comboboxProps={{
              shadow: 'md',
              radius: 'md',
            }}
          />

          <Select
            placeholder="Filtrar por categoría"
            data={[
              { value: 'electronics', label: 'Electrónica' },
              { value: 'clothing', label: 'Ropa' },
              { value: 'documents', label: 'Documentos' },
              { value: 'other', label: 'Otros' },
            ]}
            clearable
            searchable
            leftSection={<IconAdjustmentsHorizontal size={16} />}
            leftSectionWidth={38}
            w={{ base: '100%', xs: 190 }}
            radius="md"
            variant="default"
            comboboxProps={{
              shadow: 'md',
              radius: 'md',
            }}
          />
        </Group>
      }
      action={{
        label: 'Registrar envío',
        icon: <IconPlus size={17} />,
        onClick: onCreate,
      }}
    />
  )
}
