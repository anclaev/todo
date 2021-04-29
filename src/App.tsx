import { useState } from 'react'
import Board from './components/Board/Board'

import Navbar from './components/Navbar/Navbar'
import Todo from './components/Todo/Todo'
import { ITodo } from './interfaces'

const App: React.FC = () => {
  const [TodoList, setTodoList] = useState<ITodo[]>([])

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      id: Date.now(),
      title: title,
      completed: false,
    }

    setTodoList((prev) => [newTodo, ...prev])
  }

  const toggleHandler = (id: number) =>
    setTodoList((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          console.log('Last status: ', todo.completed)
          let status = !todo.completed
          console.log('New status: ', status)
          todo.completed = status
        }
        return todo
      })
    )

  const removeHandler = (id: number) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id))
  }

  return (
    <>
      <Navbar />
      <Todo onAdd={addHandler} />
      <Board
        todos={TodoList}
        onRemove={removeHandler}
        onToggle={toggleHandler}
      />
    </>
  )
}
export default App
