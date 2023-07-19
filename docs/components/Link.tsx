import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

type Props = {
  to: string
  className?: string
  children: ReactNode
}

const Link: React.FC<Props> = ({ to, className, children }) => {
  return (
    <NavLink className={className ? `link ${className}` : 'link'} to={to}>
      {children}
    </NavLink>
  )
}

export default Link
