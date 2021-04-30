import s from './Navbar.module.sass'

import { NavLink } from 'react-router-dom'

const Navbar: React.FC = () => (
  <nav className={s.n}>
    <ul className={s.w}>
      <NavLink exact to="/" activeClassName={s.l}>
        <li className={s.i}>Задачи</li>
      </NavLink>
      <NavLink to="/chaos" activeClassName={s.l}>
        <li className={s.i}>Свалка</li>
      </NavLink>
      <NavLink to="/schemes" activeClassName={s.l}>
        <li className={s.i}>Проекты</li>
      </NavLink>
    </ul>
  </nav>
)

export default Navbar
