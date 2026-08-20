import { Drawer } from '@mantine/core'

import { CreateShipmentForm } from './create-shipment-form'

interface CreateShipmentDrawerProps {
  opened: boolean
  onClose: () => void
  onSuccess: () => void
}

export function CreateShipmentDrawer({ opened, onClose, onSuccess }: CreateShipmentDrawerProps) {
  return (
    <Drawer
      opened={opened}
      onClose={onClose}
      title="Registrar envío"
      position="right"
      size="lg"
      overlayProps={{
        backgroundOpacity: 0.35,
        blur: 2,
      }}
    >
      <CreateShipmentForm onSuccess={onSuccess} />
    </Drawer>
  )
}
