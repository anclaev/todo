import s from './Check.module.sass'

import Icon from './success.svg'
import { TCheck } from '../../types'

const setBackground = (status: boolean): object => {
  if (status) return { background: `url(${Icon}) no-repeat center center` }
  else return { background: 'none' }
}

const Check: React.FC<TCheck> = ({ status, switchStatus }) => (
  <div
    className={`${s.i}`}
    onClick={() => switchStatus(!status)}
    style={setBackground(status)}
  ></div>
)

export default Check
