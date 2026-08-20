import { create } from 'zustand'

import type { ModalStore } from '~/app/store/types/modal-types'

export const useModalStore = create<ModalStore>(set => ({
  openedModalId: null,

  openModal: modalId => set({ openedModalId: modalId }),

  closeModal: () => set({ openedModalId: null }),
}))
