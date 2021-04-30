import s from './TBoard.module.sass'

import { ITodo } from '../../interfaces'
import ETodo from '../../components/ETodo'

type TBoard = {
  todos: ITodo[]
  onToggle: (id: number) => void
  onRemove: (id: number) => void
}

const Board: React.FC<TBoard> = (props) => {
  return (
    <div className={s.w}>
      <ul className={s.t}>
        {props.todos.map((todo) => (
          <ETodo
            key={todo.id}
            checked={todo.completed}
            className={s.i}
            title={todo.title}
            onChange={props.onToggle.bind(null, todo.id)}
            onClick={() => props.onRemove(todo.id)}
          />
        ))}
      </ul>
    </div>
  )
}

export default Board
