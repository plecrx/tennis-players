import { FC } from 'react'
import { Player } from '../types/player.ts'
import { MatchCard } from './matchCard.component.tsx'

export const PlayersMatch: FC<{
  opponents: { player_one: Player; player_two: Player }
}> = ({ opponents: { player_one, player_two } }) => (
  <div className='flex gap-20'>
    <MatchCard player={player_one} />
    <MatchCard player={player_two} />
  </div>
)
