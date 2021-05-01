import s from './Todos.module.sass'

import { useStateIfMounted } from 'use-state-if-mounted'
import { useState, useEffect } from 'react'

import Board from '../../containers/TBoard'
import Todo from '../../components/NTodo'
import Helmet from '../../components/SHelmet'
import Loader from '../../components/SLoader'
import { ITodo } from '../../types'

const Todos: React.FC = () => {
  const [TodoList, setTodoList] = useState<ITodo[]>([
    {
      id: 0,
      title: 'Тест 1',
      completed: false,
    },
    {
      id: 1,
      title: 'Тест 2',
      completed: true,
    },
    {
      id: 3,
      title: 'Тест 3',
      completed: false,
    },
  ])

  const [loader, setLoader] = useStateIfMounted<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 300)
  })

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
        if (todo.id === id) todo.completed = !todo.completed
        return todo
      })
    )

  const changeHandler = (id: number, title: string) => {
    setTodoList((prev) =>
      prev.map((todo) => {
        if (todo.id === id) todo.title = title
        return todo
      })
    )
  }

  const removeHandler = (id: number) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id))
  }

  return (
    <div className={`${s.w} ${loader ? s.wh : ''}`}>
      <Loader status={loader} />
      <Helmet title="Задачи" />
      <Todo onAdd={addHandler} />
      <Board
        todos={TodoList}
        onRemove={removeHandler}
        onToggle={toggleHandler}
        onChange={changeHandler}
      />
    </div>
  )
}

export default Todos
