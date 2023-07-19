import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

const Header: React.FC<Props> = ({ children }) => {
  return (
    <header className="mg-header">{children}</header>
  )
}

export default Header