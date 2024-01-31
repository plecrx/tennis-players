import { useEffect, useState } from 'react'
import { useMatches } from 'react-router-dom'
import { getPlayerDetails } from '../features/players/getPlayerDetails.ts'
import { PageLayout } from '../layouts/page.layout.tsx'
import { Player } from '../types/player.ts'
import { formatFullname, formatNumericValue } from '../utils/formats.ts'

export const PlayerDetailsPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [player, setPlayer] = useState<Player | null>(null)
  const [match] = useMatches()
  const playerId = match.params.playerId
  const fullName = formatFullname({
    lastName: player?.lastname || '',
    firstname: player?.firstname || '',
  })

  useEffect(() => {
    const getPlayer = async (playerId: string) => {
      const playerDetails = await getPlayerDetails(playerId)
      setPlayer(playerDetails)
      setIsLoading(false)
    }

    if (!player && playerId) {
      getPlayer(playerId)
    }
  })

  if (isLoading) {
    return 'Loading...'
  }

  if (!player) {
    return 'An error occurred !'
  }

  return (
    <PageLayout>
      <div className='flex items-center justify-center h-full'>
        <div className='flex flex-col p-8 rounded-2xl gap-8 border bg-neutral-900 text-neutral-200'>
          <div className='flex gap-4'>
            <img
              className='w-16 h-10'
              src={`${player?.country.picture}`}
              alt={`${player?.country.code}`}
            />
            <span className='text-2xl font-bold'>{fullName}</span>
            <span>({player.shortname})</span>
          </div>

          <section className='relative'>
            <div
              className='absolute inset-0 bg-repeat'
              style={{
                backgroundImage: `url(${player.picture})`,
                opacity: 0.15,
              }}
            />
            <img
              src={player?.picture}
              alt={`${fullName} picture`}
            />
          </section>

          <section>
            <ul>
              {Object.entries(player.data).map(([key, value]) => (
                <li className='flex justify-between'>
                  <span className='font-bold capitalize text-lg'>{key}:</span>
                  <span>{formatNumericValue(key, value)}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </PageLayout>
  )
}
