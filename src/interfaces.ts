export interface ITodo {
  id: number
  title: string
  completed: boolean
}

export interface ITodoNew {
  onAdd(title: string): void
}
