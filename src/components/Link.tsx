import { ReactNode, useState } from 'react'

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
}

function Link({ to, children }: { to: string, children: ReactNode }) {
  const [status, setStatus] = useState(STATUS.NORMAL)

  const onMouseEnter = () => {
    setStatus(STATUS.HOVERED)
  }

  const onMouseLeave = () => {
    setStatus(STATUS.NORMAL)
  }

  return (
    <a
      className={status}
      href={to || '#'}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </a>
  )
}

export default Link
