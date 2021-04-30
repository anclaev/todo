import s from './TBoard.module.sass'

import { TBoard } from '../../types'
import ETodo from '../../components/ETodo'

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