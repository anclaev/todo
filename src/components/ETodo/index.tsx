import s from './ETodo.module.sass'

import { useState } from 'react'

import { TTodo } from '../../types'
import ECheck from '../ECheck'
import Icon from '../EIcon'

const ETodo: React.FC<TTodo> = (props) => {
  const [focus, setFocus] = useState<boolean>(false)

  return (
    <div className={s.w}>
      <ECheck status={props.checked} switchStatus={props.switchStatus} />
      <div className={`${s.t} ${focus ? s.tf : ''}`}>
        <input
          type="text"
          value={props.title}
          onChange={(e) => props.changeTitle(e.target.value)}
          placeholder="Задача"
          onFocus={() => setFocus(!focus)}
          onBlur={() => setFocus(!focus)}
        />
      </div>
      <button className={s.i} onClick={() => props.removeHandler()}>
        <Icon name="close" />
      </button>
    </div>
  )
}

export default ETodo
