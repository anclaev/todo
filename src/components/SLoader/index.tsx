import s from './SLoader.module.sass'

import { useEffect, useState } from 'react'

import { TLoader } from '../../types'

const Loader: React.FC<TLoader> = ({ status }) => {
  const [loader, setLoader] = useState<boolean>(status || false)

  useEffect(() => {
    setTimeout(() => {
      setLoader(status)
    }, 500)
  }, [status])

  return loader ? (
    <div className={`${s.w} ${!status ? s.h : ''}`} data-type="loader">
      <div className={s.l}></div>
    </div>
  ) : null
}

export default Loader
