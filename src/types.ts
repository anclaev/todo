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

export enum EAuthStatus {
  hide = 'hide',
  visible = 'visible',
}

// Types

export type TTodo = {
  checked: boolean
  className?: string
  title: string
  changeTitle: (title: string) => void
  switchStatus: (status: boolean) => void
  removeHandler: () => void
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
  onChange: (id: number, title: string) => void
}

export type TIcon = {
  name: string
  className?: string
}

export type TCheck = {
  status: boolean
  switchStatus: (status: boolean) => void
}

export type TLoader = {
  status: boolean
}

// Interfaces

export interface ITodo {
  id: number
  title: string
  completed: boolean
}

export interface IAuth {
  isLogin?: boolean
}

export interface INTodo {
  onAdd(title: string): void
}
