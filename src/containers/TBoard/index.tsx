import s from './TBoard.module.sass'

import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { TBoard } from '../../types'
import ETodo from '../../components/ETodo'

const Board: React.FC<TBoard> = (props) => {
  return (
    <TransitionGroup className={s.w}>
      {props.todos.map((todo) => (
        <CSSTransition key={todo.id} timeout={400} classNames="trg">
          <ETodo
            checked={todo.completed}
            title={todo.title}
            switchStatus={() => props.onToggle(todo.id)}
            changeTitle={(title: string) => props.onChange(todo.id, title)}
            removeHandler={() => props.onRemove(todo.id)}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  )
}

export default Board
