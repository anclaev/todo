import { useState } from 'react'
import Board from './components/Board/Board'

import Navbar from './components/Navbar/Navbar'
import Todo from './components/Todo/Todo'

const App: React.FC = () => {
  const [TodoList, setTodoList] = useState([])

  const addHandler = (title: string) => {
    console.log('Add new todo: ', title)
  }

  return (
    <>
      <Navbar />
      <Todo onAdd={addHandler} />
      <Board />
    </>
  )
}
export default App
