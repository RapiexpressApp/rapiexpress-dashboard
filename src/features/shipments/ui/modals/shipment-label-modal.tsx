import { ShipmentLabelPreview } from '~/features/shipments/ui/shipment-label-preview'
import { MODAL_IDS } from '~/features/shipments/constants/modal-ids'
import { ModalBase } from '~/shared/ui/modal/modal-base'
import { useModalStore } from '~/app/store/modal-store'

export function ShipmentLabelModal() {
  const { openedModalId, closeModal } = useModalStore()
  console.log('openedModalId', openedModalId)

  return (
    <ModalBase
      opened={openedModalId === MODAL_IDS.SHIPMENT_LABEL}
      onClose={closeModal}
      title="Etiqueta del envío"
    >
      <ShipmentLabelPreview />
    </ModalBase>
  )
}
