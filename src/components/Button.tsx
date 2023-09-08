import React, { MouseEventHandler, ReactNode } from "react"
import { AttributifyAttributes } from "@unocss/preset-attributify"
import { withProps } from "../shared/withProps"

interface Props extends Omit<AttributifyAttributes, 'children' | 'disabled' | 'content'> { 
  className: string,
  onClick: MouseEventHandler<HTMLButtonElement>
  children: ReactNode
}

const Button: React.FC<Props> = (props) => {
  const attrs = withProps(props, {
    className: "px-4 py-1 h-10 cursor-pointer transition-color",
    border: "none rd-1",
    font: "size-4"
  })
  return (
    <button {...attrs}>{props.children}</button>
  )
}

export default Button
