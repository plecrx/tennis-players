import { FC, PropsWithChildren } from 'react'
import { AppHeader } from '../components/appHeader.tsx'

export const PageLayout: FC<PropsWithChildren> = ({ children }) => (
  <div className='flex flex-col h-screen bg-neutral-200 gap-8'>
    <AppHeader title='EuroStat' />
    <div className='flex justify-center grow'>{children}</div>
  </div>
)
