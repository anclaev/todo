import s from './Chaos.module.sass'

import { useStateIfMounted } from 'use-state-if-mounted'
import { useEffect } from 'react'

import Helmet from '../../components/SHelmet'
import Loader from '../../components/SLoader'

const Chaos: React.FC = () => {
  const [loader, setLoader] = useStateIfMounted<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 300)
  })

  return (
    <div className={`${s.w} ${loader ? s.wh : ''}`}>
      <Loader status={loader} />
      <Helmet title="Свалка" />
      Chaos page
    </div>
  )
}

export default Chaos
