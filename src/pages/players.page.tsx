import { useEffect, useMemo } from 'react'
import { PlayersMatch } from '../components/match.component.tsx'
import { useRandomOpponents } from '../features/players/useRandomOpponents.ts'
import { PageLayout } from '../layouts/page.layout.tsx'

export const PlayersPage = () => {
  const { opponents, getOpponents } = useRandomOpponents()
  const title = useMemo(() => (opponents ? 'VS' : 'No match'), [opponents])

  useEffect(() => {
    if (!opponents) {
      getOpponents()
    }
  }, [opponents])

  return (
    <PageLayout>
      <span
        className='text-2xl font-bold p-8'
        data-testid='players-page-title'
      >
        {title}
      </span>
      {opponents && (
        <PlayersMatch
          data-testid='random-players-match'
          opponents={opponents}
        />
      )}
    </PageLayout>
  )
}
