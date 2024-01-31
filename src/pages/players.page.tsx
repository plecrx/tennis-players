import { useMemo } from 'react'
import { PlayersMatch } from '../components/match.component.tsx'
import { useRandomOpponents } from '../features/players/useRandomOpponents.ts'
import { PageLayout } from '../layouts/page.layout.tsx'

export type PlayersPageDependencies = {
  _useRandomOpponents?: typeof useRandomOpponents
}
export const PlayersPage = ({
  _useRandomOpponents = useRandomOpponents,
}: PlayersPageDependencies) => {
  const { opponents } = _useRandomOpponents()
  const title = useMemo(
    () => (opponents !== null ? 'VS' : 'No match'),
    [opponents]
  )

  return (
    <PageLayout>
      <span
        className='text-2xl font-bold p-8'
        data-testid='players-page-title'
      >
        {title}
      </span>
      {opponents !== null && (
        <PlayersMatch
          data-testid='random-players-match'
          opponents={opponents}
        />
      )}
    </PageLayout>
  )
}
