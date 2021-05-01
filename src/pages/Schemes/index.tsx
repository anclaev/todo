import s from './Schemes.module.sass'

import { useStateIfMounted } from 'use-state-if-mounted'
import { useEffect } from 'react'

import Helmet from '../../components/SHelmet'
import Loader from '../../components/SLoader'

const Schemes: React.FC = () => {
  const [loader, setLoader] = useStateIfMounted<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 500)
  })

  return (
    <div className={`${s.w} ${loader ? s.wh : ''}`}>
      <Helmet title="Проекты" />
      <Loader status={loader} />
      Schemes Page
    </div>
  )
}

export default Schemes
