import s from './Todo.module.sass'

import React, { useState } from 'react'

enum labelStatus {
  valid = 'valid',
  focus = 'focus',
  none = '',
}

interface ITodo {
  onAdd(title: string): void
}

const Todo: React.FC<ITodo> = (props) => {
  const [status, setStatus] = useState<string>(labelStatus.none)
  const [title, setTitle] = useState<string>('')

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)

    if (event.target.value !== '') setStatus(labelStatus.valid)
    else setStatus(labelStatus.none)
  }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      props.onAdd(title)
      setTitle('')
      setStatus(labelStatus.none)
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
