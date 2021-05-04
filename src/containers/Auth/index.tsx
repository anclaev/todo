import s from './Auth.module.sass'
import Icon from './key.svg'

import { IAuth, EAuthStatus as status } from '../../types'
import { useState } from 'react'

const Auth: React.FunctionComponent<IAuth> = ({ isLogin }) => {
  const [state, setState] = useState<status>(status.hide)

  const onKeyClick = () => setState(status.visible)

  switch (state) {
    case 'hide':
      return (
        <button
          className={s.b}
          style={{ backgroundImage: `url(${Icon})` }}
          onClick={onKeyClick}
        ></button>
      )

    case 'visible':
      return <h1>Visible!</h1>

    default:
      return <div></div>
  }
}

export default Auth
