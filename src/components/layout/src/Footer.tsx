import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

const Footer: React.FC<Props> = ({ children }) => {
  return (
    <header className="mg-footer">{children}</header>
  )
}

export default Footer