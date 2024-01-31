import { FC, PropsWithChildren } from 'react'
import { Player } from '../types/player.ts'
import { formatFullname, formatNumericValue } from '../utils/formats.ts'

interface IDetailCard extends PropsWithChildren {
  player: Player
}
export const DetailCard: FC<IDetailCard> = ({ player }) => {
  const { id, country, firstname, lastname, shortname, picture, data } = player
  const fullName = formatFullname({ lastname, firstname })
  return (
    <div className='flex items-center justify-center h-full'>
      <div className='flex flex-col p-8 rounded-2xl gap-8 border bg-neutral-900 text-neutral-200'>
        <div className='flex gap-4'>
          <img
            className='w-16 h-10'
            src={`${country.picture}`}
            alt={`${country.code}`}
          />
          <span className='text-2xl font-bold'>{fullName}</span>
          <span>({shortname})</span>
        </div>

        <section className='relative'>
          <div
            className='absolute inset-0 bg-repeat'
            style={{
              backgroundImage: `url(${picture})`,
              opacity: 0.15,
            }}
          />
          <img
            src={picture}
            alt={`${fullName} picture`}
          />
        </section>

        <section>
          <ul>
            {Object.entries(data).map(([key, value]) => (
              <li
                key={`${id}-${key}`}
                className='flex justify-between'
              >
                <span className='font-bold capitalize text-lg'>{key}:</span>
                <span>{formatNumericValue(key, value)}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
