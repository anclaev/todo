import s from './Board.module.sass'

import { ITodo } from '../../interfaces'

type BoardProps = {
  todos: ITodo[]
  onToggle: (id: number) => void
  onRemove: (id: number) => void
}

const Board: React.FC<BoardProps> = (props) => {
  return (
    <div className={s.w}>
      <ul className={s.t}>
        {props.todos.map((todo) => (
          <li className={s.i} key={todo.id}>
            <input
              type="checkbox"
              className={s.c}
              checked={todo.completed}
              onChange={props.onToggle.bind(null, todo.id)}
            />
            <span>{todo.title}</span>
            <i onClick={() => props.onRemove(todo.id)}>Remove</i>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Board
