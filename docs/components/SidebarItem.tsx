import { AttributifyAttributes } from '@unocss/preset-attributify'
import Link from './Link'
import { ReactNode } from 'react'

interface Props extends Omit<AttributifyAttributes, 'children' | 'disabled' | 'content'> { 
  to: string
  children?: ReactNode
}

const SidebarItem: React.FC<Props> = (props) => (
  <Link to={props.to}>
    <span className="flex py-1.5 pl-8 pr-4" border-l="4 solid transparent">{props.children}</span>
  </Link>
)

export default SidebarItem
