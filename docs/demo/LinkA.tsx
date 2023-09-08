import React, { ReactNode } from "react"

type Props = {
  children: ReactNode
}

const Link: React.FC<Props> = () => {
  return (
    <div className="link-a">
      <h2>我的 link a</h2>
    </div>
  )
}

export default Link
