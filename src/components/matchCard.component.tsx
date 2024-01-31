import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Player } from '../types/player.ts'
import { formatFullname, formatNumericValue } from '../utils/formats.ts'
import { Button } from './button.component.tsx'
import { ChevronRight } from './chevronRight.component.tsx'
import { ClockIcon } from './clockIcon.component.tsx'

export const MatchCard: FC<{ player: Player }> = ({ player }) => {
  const navigate = useNavigate()

  const fullName = formatFullname({
    firstname: player.firstname,
    lastName: player.lastname,
  })

  const playerStats: Pick<
    typeof player.data,
    'points' | 'weight' | 'height' | 'age'
  > = {
    points: player.data.points,
    weight: player.data.weight,
    height: player.data.height,
    age: player.data.age,
  }

  const handleSeeDetailsClick = () => {
    navigate(`/players/${player.id}`)
  }

  return (
    <div className='flex flex-col rounded bg-neutral-100 border border-neutral-300 p-4 gap-2 min-w-80'>
      <section className='flex flex-col'>
        <img
          data-testid='match-card-picture'
          className='w-20 h-20 rounded-full mx-auto object-cover'
          src={player.picture}
          alt={`${fullName} picture`}
        />
        <span
          data-testid='match-card-fullname'
          className='mx-auto font-bold text-lg'
        >
          {fullName}
        </span>
        <span
          data-testid='match-card-rank'
          className='mx-auto font-bold'
        >
          Rank: {player.data.rank}
        </span>
      </section>

      <span className='text-sm font-bold'>STATS</span>
      <ul
        data-testid='match-card-stats'
        className='flex flex-col p-2 bg-gray-200 text-sm rounded'
      >
        {Object.entries(playerStats).map(([key, value]) => (
          <li>
            <span className='capitalize'>{key}:</span>
            <span className='ml-2 font-bold'>
              {formatNumericValue(key, value)}
            </span>
          </li>
        ))}
      </ul>

      <section
        data-testid='match-card-played-time'
        className='flex justify-center items-center bg-neutral-900 text-white p-2 rounded'
      >
        <ClockIcon />
        <span className='text-sm text-neutral-400 mx-2'>
          Total played time:
        </span>
        {formatNumericValue('played_time', player.data.played_time)}
      </section>

      <div className='self-end'>
        <Button
          data-testid='link-details'
          onClick={handleSeeDetailsClick}
        >
          <span className='text-sm'>See details</span>
          <ChevronRight />
        </Button>
      </div>
    </div>
  )
}
