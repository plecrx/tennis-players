import { FC } from 'react'
import { Player } from '../types/player.ts'
import { MatchCard } from './matchCard.component.tsx'

interface IPlayersMatch {
  opponents: { player_one: Player; player_two: Player }
}
export const PlayersMatch: FC<IPlayersMatch> = ({
  opponents: { player_one, player_two },
}) => (
  <div className='flex gap-20'>
    <MatchCard player={player_one} />
    <MatchCard player={player_two} />
  </div>
)
