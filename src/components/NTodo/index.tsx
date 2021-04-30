import s from './NTodo.module.sass'

import { ELabelStatus as labelStatus, INTodo } from '../../types'
import React, { useRef, useState } from 'react'
import { toast } from 'materialize-css'

const Todo: React.FC<INTodo> = ({ onAdd }) => {
  const [status, setStatus] = useState<string>(labelStatus.none)
  const [title, setTitle] = useState<string>('')
  const [toastTimer, setToastTimer] = useState<boolean>(false)
  const [todoTimer, setTodoTimer] = useState<boolean>(false)

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
      if (ref.current!.value && !todoTimer) {
        onAdd(title)
        setTitle('')
        setStatus(labelStatus.none)
        setTodoTimer(true)

        // Таймер на следующие задачи
        let todoTimer = setTimeout(() => {
          setTodoTimer(false)
          clearTimeout(todoTimer)
        }, 2000)
      } else {
        // Проверка на активный тост
        if (!toastTimer) {
          toast({ html: `Задача не может быть безымянной` })
          setToastTimer(true)

          // Таймер на следующие тосты
          let toastTimer = setTimeout(() => {
            setToastTimer(false)
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
        <label className={labelClasses()}>Новая задача</label>
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
