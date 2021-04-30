import s from './ETodo.module.sass'

import { TTodo } from '../../types'
import ECheck from '../ECheck'
import Icon from '../EIcon'

const ETodo: React.FC<TTodo> = (props) => {
  return (
    <div className={s.w} key={props.key}>
      <ECheck status={props.checked} switchStatus={props.switchStatus} />
      <input
        type="text"
        className={s.t}
        value={props.title}
        onChange={(e) => props.changeTitle(e.target.value)}
      />
      <Icon name="close" className={s.i} />
    </div>
  )
}

export default ETodo
