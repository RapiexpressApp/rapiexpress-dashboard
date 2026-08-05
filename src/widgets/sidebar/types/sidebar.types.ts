import type { ComponentType } from 'react'

export type IconComponent = ComponentType<{
  size?: number
  stroke?: number
}>

export interface SidebarProps {
  readonly collapsed: boolean
}

export interface NavItem {
  readonly label: string
  readonly href: string
  readonly icon: IconComponent
  readonly badge?: string
}
