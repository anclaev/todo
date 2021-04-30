import s from './Check.module.sass'

import Icon from './success.svg'
import { TCheck } from '../../types'

const setBackground = (status: boolean): object => {
  if (status) return { backgroundImage: `url(${Icon})`, backgroundSize: '70%' }
  else return { backgroundImage: `url(${Icon})`, backgroundSize: 0 }
}

const Check: React.FC<TCheck> = ({ status, switchStatus }) => (
  <div
    className={`${s.i}`}
    onClick={() => switchStatus(!status)}
    style={setBackground(status)}
  ></div>
)

export default Check
