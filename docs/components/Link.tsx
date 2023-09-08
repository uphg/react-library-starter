import { ReactNode } from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'

type Props = {
  to: string
  className?: NavLinkProps['className']
  children: ReactNode
}

const Link: React.FC<Props> = ({ to, children, className }) => {
  return (
    <NavLink className={className} to={to}>
      {children}
    </NavLink>
  )
}

export default Link
