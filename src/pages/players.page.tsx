import { useEffect, useState } from 'react'
import { PlayersMatch } from '../components/match.component.tsx'
import { getRandomOpponents } from '../features/players/getRandomOpponents.ts'
import { PageLayout } from '../layouts/page.layout.tsx'
import { Player } from '../types/player.ts'

export const PlayersPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [randomOpponents, setRandomOpponents] = useState<{
    player_one: Player
    player_two: Player
  } | null>(null)

  useEffect(() => {
    const fetchOpponents = async () => {
      const { opponents } = await getRandomOpponents()
      setRandomOpponents(opponents)
      setIsLoading(false)
    }

    if (!randomOpponents) {
      fetchOpponents()
    }
  })

  const renderContent = () => {
    if (isLoading) return 'Loading...'

    if (!randomOpponents) return 'An error occurred !'

    return (
      <PlayersMatch
        data-testid='random-players-match'
        opponents={randomOpponents}
      />
    )
  }

  return (
    <PageLayout>
      <span
        className='text-2xl font-bold p-8'
        data-testid='players-page-title'
      >
        VS
      </span>
      {renderContent()}
    </PageLayout>
  )
}
