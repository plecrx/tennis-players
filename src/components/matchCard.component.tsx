import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Player } from '../types/player.ts'
import { formatFullname, formatNumericValue } from '../utils/formats.ts'
import { Button } from './button.component.tsx'
import { ChevronRight } from './chevronRight.component.tsx'
import { ClockIcon } from './clockIcon.component.tsx'

interface IMatchCard {
  player: Player
}
export const MatchCard: FC<IMatchCard> = ({ player }) => {
  const navigate = useNavigate()
  const { id, firstname, lastname, picture, data } = player

  const fullName = formatFullname({ firstname, lastname })

  const playerStats: Pick<typeof data, 'points' | 'weight' | 'height' | 'age'> =
    {
      points: data.points,
      weight: data.weight,
      height: data.height,
      age: data.age,
    }

  const handleSeeDetailsClick = () => {
    navigate(`/players/${id}`)
  }

  return (
    <div
      key={id}
      className='flex flex-col rounded bg-neutral-100 border border-neutral-300 p-4 gap-2 min-w-80'
    >
      <section className='flex flex-col'>
        <img
          data-testid='match-card-picture'
          className='w-20 h-20 rounded-full mx-auto object-cover'
          src={picture}
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
          Rank: {data.rank}
        </span>
      </section>

      <span className='text-sm font-bold'>STATS</span>
      <ul
        data-testid='match-card-stats'
        className='flex flex-col p-2 bg-gray-200 text-sm rounded'
      >
        {Object.entries(playerStats).map(([key, value]) => (
          <li key={key}>
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
          Total played time:{' '}
        </span>
        {formatNumericValue('played_time', data.played_time)}
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
