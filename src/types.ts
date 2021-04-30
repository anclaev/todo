// Enums

enum ELinkRels {
  css = 'stylesheet',
  icon = 'shortcut icon',
}

export enum ELabelStatus {
  valid = 'valid',
  focus = 'focus',
  none = '',
}

// Types

export type TTodo = {
  key: number
  checked: boolean
  className: string
  title: string
  onChange: React.ChangeEventHandler
  onClick: React.MouseEventHandler
}

export type THelmet = {
  title?: string
  description?: string
  link?: {
    rel: ELinkRels
    href: string
    type?: string
  }
}

export type TBoard = {
  todos: ITodo[]
  onToggle: (id: number) => void
  onRemove: (id: number) => void
}

// Interfaces

export interface ITodo {
  id: number
  title: string
  completed: boolean
}

export interface INTodo {
  onAdd(title: string): void
}
