import type { ReactNode } from 'react'

export interface DataTableColumn<TData> {
  key: keyof TData | string
  label: string
  width?: number | string
  align?: 'left' | 'center' | 'right'
  render?: (row: TData) => ReactNode
}

export interface DataTableAction<TData> {
  label: string
  icon?: ReactNode
  color?: string
  onClick: (row: TData) => void
  visible?: (row: TData) => boolean
  disabled?: (row: TData) => boolean
}

export interface DataTablePaginationProps {
  page: number
  pageSize: number
  total: number
  onChange: (page: number) => void
}

export interface DataTableProps<TData> {
  data: TData[]
  columns: DataTableColumn<TData>[]
  actions?: DataTableAction<TData>[]
  pagination?: DataTablePaginationProps
  title?: string
  description?: string
  headerAction?: ReactNode
  loading?: boolean
  emptyMessage?: string
  minWidth?: number
  rowKey?: (row: TData, index: number) => string
}
