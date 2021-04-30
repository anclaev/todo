import s from './ETodo.module.sass'

type TTodo = {
  key: number
  checked: boolean
  className: string
  title: string
  onChange: React.ChangeEventHandler
  onClick: React.MouseEventHandler
}

const ETodo: React.FC<TTodo> = (props) => (
  <li className={s.i} key={props.key}>
    <input type="checkbox" checked={props.checked} onChange={props.onChange} />
    <span>{props.title}</span>
    <i onClick={props.onClick}>Remove</i>
  </li>
)

export default ETodo
