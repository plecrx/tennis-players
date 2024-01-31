import {Handler} from "@netlify/functions";
import { Player } from '../src/types/player'
import { GET } from '../src/utils/get'
export const handler: Handler = async (event, _) => {
  const api_url = process.env.VITE_API_URL || ''
  const { players } = await GET<Record<'players', Player[]>>(api_url)
  const playerId = Number(event.path.split('/').pop())

  const foundPlayer = findPlayerById(players, playerId)

  if(!foundPlayer) {
    return {
      body: 'Not found',
      statusCode: 404,
    }
  }

  return {
    body: JSON.stringify(foundPlayer),
    statusCode: 200,
  }
}

const findPlayerById = (
  players: Player[],
  playerId: number
): Player | undefined => {
  return players.find((player) => player.id === playerId)
}
