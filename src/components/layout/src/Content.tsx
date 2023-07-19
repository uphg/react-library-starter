import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

const Content: React.FC<Props> = ({ children }) => {
  return (
    <header className="mg-content">{children}</header>
  )
}

export default Content