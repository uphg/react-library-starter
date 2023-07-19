import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="mg-layout">{children}</div>
  )
}

export default Layout