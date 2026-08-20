export interface ModalStore {
  openedModalId: string | null
  openModal: (modalId: string) => void
  closeModal: () => void
}
