import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

const Sidebar: React.FC<Props> = ({ children }) => {
  return (
    <header className="mg-sidebar">{children}</header>
  )
}

export default Sidebar