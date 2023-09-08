import Link from './Link'
import { NavLink, NavLinkProps } from 'react-router-dom'

const Navbar = () => {
  const handleClass: NavLinkProps["className"] = ({ isActive }) => {
    return `b-b-2 b-b-solid line-height-7` + (isActive ? ` b-b-green-600`: ' b-b-transparent')
  }
  return (
    <header className="h-15 fixed top-0 right-0 left-0" border-b="1px solid light-700">
      <div className="px-6 flex items-center h-100%">
        <div className="w[calc(var(--sidebar-width)-var(--navbar-padding))]">
          <Link className="link" to="/">
            <span className="c-initial" font="size-5.5 700">🍌 Banana UI</span>
          </Link>
        </div>
        <nav className="h-100% px-6 flex items-center gap-6">
          <NavLink className={handleClass}  to="/">首页</NavLink>
          <NavLink className={handleClass}  to="/docs">文档</NavLink>
          <NavLink className={handleClass}  to="/start">Start</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar