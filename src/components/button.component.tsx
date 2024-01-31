import { FC, PropsWithChildren } from 'react'

type ButtonProps = PropsWithChildren & {
  onClick: () => void
}
export const Button: FC<ButtonProps> = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className='flex items-baseline gap-1'
  >
    {children}
  </button>
)
