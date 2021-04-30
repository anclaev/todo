export interface ITodo {
  id: number
  title: string
  completed: boolean
}

export interface INTodo {
  onAdd(title: string): void
}
