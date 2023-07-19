import React, { MouseEventHandler, ReactNode } from "react"

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>
  children?: ReactNode
}

const Button: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button className="mg-button" onClick={onClick}>{children}</button>
  )
}

export default Button
