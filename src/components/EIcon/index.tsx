import { ReactComponent as Success } from './src/success.svg'
import { ReactComponent as Close } from './src/close.svg'
import { TIcon } from '../../types'

const Icon: React.FC<TIcon> = (props) => {
  switch (props.name.toLowerCase()) {
    case 'success':
      return <Success className={props.className || ''} />
    case 'close':
      return <Close className={props.className || ''} />
    default:
      return <span>Icon</span>
  }
}

export default Icon
