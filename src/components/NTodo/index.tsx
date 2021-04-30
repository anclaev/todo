import s from './NTodo.module.sass'

import { ELabelStatus as labelStatus, INTodo } from '../../types'
import React, { useRef, useState } from 'react'
import { toast } from 'materialize-css'

const Todo: React.FC<INTodo> = ({ onAdd }) => {
  const [status, setStatus] = useState<string>(labelStatus.none)
  const [title, setTitle] = useState<string>('')
  const [toastStatus, setToastStatus] = useState<boolean>(false)

  const ref = useRef<HTMLInputElement>(null)

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)

    if (event.target.value !== '') setStatus(labelStatus.valid)
    else setStatus(labelStatus.none)
  }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    // Проверка нажатия Enter
    if (event.key === 'Enter') {
      // Проверка на пустоту поля
      if (ref.current!.value) {
        onAdd(title)
        setTitle('')
        setStatus(labelStatus.none)
      } else {
        // Проверка на активный тост
        if (!toastStatus) {
          toast({ html: `Задача не может быть пустой` })
          setToastStatus(true)

          // Таймер на следующие тосты
          let toastTimer = setTimeout(() => {
            setToastStatus(false)
            clearTimeout(toastTimer)
          }, 4000)
        }
      }
    }
  }

  const labelFocusHandler = () => {
    if (status !== 'valid') setStatus(labelStatus.focus)
  }
  const labelBlurHandler = () => {
    if (status !== 'valid') setStatus(labelStatus.none)
  }
  const labelClasses = (): string => {
    let classes: string[] = [s.l]

    switch (status) {
      case 'focus':
        classes.push(s.lf)
        break
      case 'valid':
        classes.push(s.lv)
        break
    }

    return classes.join(' ')
  }

  return (
    <div className={s.w}>
      <div className={s.f}>
        <label className={labelClasses()}>Имя задачи</label>
        <input
          type="text"
          value={title}
          ref={ref}
          onChange={changeHandler}
          onFocus={labelFocusHandler}
          onBlur={labelBlurHandler}
          onKeyPress={keyPressHandler}
          className={`${s.i} ${status === 'valid' ? s.iv : ''}`}
        />
      </div>
    </div>
  )
}

export default Todo
