import { FC } from 'react'

interface IAppHeader {
  title: string
}

export const AppHeaderComponent: FC<IAppHeader> = ({ title }) => (
  <div className='h-12 w-full bg-neutral-900 flex items-center justify-center'>
    <span
      className='text-white text-xl'
      data-testid='app-header-title'
    >
      {title}
    </span>
  </div>
)
