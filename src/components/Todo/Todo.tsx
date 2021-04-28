import s from './Todo.module.sass'

const Todo: React.FC = () => (
  <div className={s.f}>
    <input type="text" id="title" className={s.i} />
    <label htmlFor="title" className={s.l}>
      Имя задачи
    </label>
  </div>
)
export default Todo
