import s from './Navbar.module.sass'

const Navbar: React.FC = () => (
  <nav className={s.n}>
    <ul className={s.w}>
      <li className={s.i}>Главная</li>
      <li className={s.i}>Задачи</li>
      <li className={s.i}>Информация</li>
    </ul>
  </nav>
)

export default Navbar
