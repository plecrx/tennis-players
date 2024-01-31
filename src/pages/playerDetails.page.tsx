import { useParams } from 'react-router-dom'
import { usePlayerDetails } from '../features/players/usePlayerDetails.ts'
import { PageLayout } from '../layouts/page.layout.tsx'
import { formatFullname, formatNumericValue } from '../utils/formats.ts'

export const PlayerDetailsPage = () => {
  const { playerId } = useParams()
  const { currentPlayer } = usePlayerDetails(playerId)

  const fullName = formatFullname({
    lastName: currentPlayer?.lastname || '',
    firstname: currentPlayer?.firstname || '',
  })

  return (
    <PageLayout>
      <span
        className='text-2xl font-bold p-8'
        data-testid='player-details-page-title'
      >
        User Informations
      </span>
      {currentPlayer && (
        <div className='flex items-center justify-center h-full'>
          <div className='flex flex-col p-8 rounded-2xl gap-8 border bg-neutral-900 text-neutral-200'>
            <div className='flex gap-4'>
              <img
                className='w-16 h-10'
                src={`${currentPlayer.country.picture}`}
                alt={`${currentPlayer.country.code}`}
              />
              <span className='text-2xl font-bold'>{fullName}</span>
              <span>({currentPlayer.shortname})</span>
            </div>

            <section className='relative'>
              <div
                className='absolute inset-0 bg-repeat'
                style={{
                  backgroundImage: `url(${currentPlayer.picture})`,
                  opacity: 0.15,
                }}
              />
              <img
                src={currentPlayer.picture}
                alt={`${fullName} picture`}
              />
            </section>

            <section>
              <ul>
                {Object.entries(currentPlayer.data).map(([key, value]) => (
                  <li className='flex justify-between'>
                    <span className='font-bold capitalize text-lg'>{key}:</span>
                    <span>{formatNumericValue(key, value)}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      )}
    </PageLayout>
  )
}
