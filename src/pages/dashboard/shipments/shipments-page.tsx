import { Stack } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import { CreateShipmentDrawer } from '~/features/shipments/ui/create-shipment-drawer'
import { ShipmentLabelModal } from '~/features/shipments/ui/modals/shipment-label-modal'
import { ShipmentStats } from '~/features/shipments/ui/shipment-stats'
import { ShipmentsTable } from '~/features/shipments/ui/shipments-table'
import { ShipmentsToolbar } from '~/features/shipments/ui/shipments-toolbar'
import { PageHeader } from '~/shared/ui/page-header/page-header'

export function ShipmentsPage() {
  const [createOpened, { open: openCreate, close: closeCreate }] = useDisclosure(false)

  const handleShipmentCreated = () => {
    closeCreate()
  }

  return (
    <Stack gap="xl" w="100%">
      {/* Encabezado */}
      <PageHeader
        title="Envíos"
        description="Registra y gestiona los paquetes que ingresan al almacén."
      />

      {/* Resumen */}
      <ShipmentStats />

      {/* Filtros y acciones */}
      <ShipmentsToolbar onCreate={openCreate} />

      {/* Tabla */}
      <ShipmentsTable />

      {/* Crear envío */}
      <CreateShipmentDrawer
        opened={createOpened}
        onClose={closeCreate}
        onSuccess={handleShipmentCreated}
      />

      {/* Etiqueta del envío */}
      <ShipmentLabelModal />
    </Stack>
  )
}
