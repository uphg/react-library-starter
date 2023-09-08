import React, { ReactNode } from "react"

type Props = {
  children: ReactNode
  component: ReactNode
  path?: string
  code?: string
}

const Link: React.FC<Props> = ({ path, children }) => {
  return (
    <div className="">
      <div className="">{children}</div>
      <div className="">
        <div dangerouslySetInnerHTML={{ __html: path! }}></div>
      </div>
    </div>
  )
}

export default Link
