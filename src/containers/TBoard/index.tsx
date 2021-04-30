import s from './TBoard.module.sass'

import { TBoard } from '../../types'
import ETodo from '../../components/ETodo'

const Board: React.FC<TBoard> = (props) => {
  return (
    <div className={s.w}>
      {props.todos.map((todo) => (
        <ETodo
          key={todo.id}
          checked={todo.completed}
          className={s.i}
          title={todo.title}
          switchStatus={() => props.onToggle(todo.id)}
        />
      ))}
    </div>
  )
}

export default Board
