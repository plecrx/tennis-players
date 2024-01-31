import { FC, PropsWithChildren } from 'react'

interface IButton extends PropsWithChildren {
  onClick: () => void
}
export const Button: FC<IButton> = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className='flex items-baseline gap-1'
  >
    {children}
  </button>
)
