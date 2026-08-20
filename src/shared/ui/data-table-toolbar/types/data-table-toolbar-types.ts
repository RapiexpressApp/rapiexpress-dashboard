import type { ReactNode } from 'react'

export interface DataTableToolbarAction {
  label: string
  icon?: ReactNode
  onClick?: () => void
}

export interface DataTableToolbarProps {
  filters: ReactNode
  action?: DataTableToolbarAction
}
