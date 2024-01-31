import { FC, PropsWithChildren } from 'react'
import { AppHeader } from '../components/appHeader.component.tsx'

export const PageLayout: FC<PropsWithChildren> = ({ children }) => (
  <div className='flex flex-col h-screen bg-neutral-200'>
    <AppHeader title='EuroStat' />
    <div className='flex items-center flex-col grow'>{children}</div>
  </div>
)
