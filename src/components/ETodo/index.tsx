import s from './ETodo.module.sass'

import { TTodo } from '../../types'
import ECheck from '../ECheck'
import Icon from '../EIcon'

const ETodo: React.FC<TTodo> = (props) => {
  return (
    <div className={s.w}>
      <ECheck status={props.checked} switchStatus={props.switchStatus} />
      <input
        type="text"
        className={s.t}
        value={props.title}
        onChange={(e) => props.changeTitle(e.target.value)}
        placeholder="Задача"
      />
      <button className={s.i} onClick={() => props.removeHandler()}>
        <Icon name="close" />
      </button>
    </div>
  )
}

export default ETodo
