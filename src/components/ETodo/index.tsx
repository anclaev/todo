import s from './ETodo.module.sass'

import { TTodo } from '../../types'
import ECheck from '../ECheck'

const ETodo: React.FC<TTodo> = (props) => {
  return (
    <div className={s.w} key={props.key}>
      <ECheck status={props.checked} switchStatus={props.switchStatus} />
      {/* <span>{props.title}</span>
      <i>Remove</i> */}
    </div>
  )
}

export default ETodo
