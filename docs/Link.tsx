import React, { ReactNode } from "react"

type Props = {
  children: ReactNode,
  onClick?: () => void,
  to?: Object
}

const Link: React.FC<Props> = ({ children, onClick, to }) => {
  console.log(to)
  return (
    <button onClick={onClick}>{children}</button>
  )
}

export default Link
