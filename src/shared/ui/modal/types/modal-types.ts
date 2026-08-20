import type { ReactNode } from 'react'

export interface ModalBaseProps {
  opened: boolean
  onClose: () => void
  title: string
  size?: string
  children: ReactNode
}
