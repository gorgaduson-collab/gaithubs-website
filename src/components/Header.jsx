import { NavLink } from 'react-router-dom'
import { navItems } from '../data/siteData'
import Logo from './Logo'

export default function Header() {
  return (
    <header className="header">
      <div className="container nav-wrap">
        <NavLink to="/">
          <Logo compact />
        </NavLink>
        <nav className="nav-links">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => (isActive ? 'nav-link nav-link-active' : 'nav-link')}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <NavLink to="/contact" className="btn btn-primary">
          تحدث معنا
        </NavLink>
      </div>
    </header>
  )
}
