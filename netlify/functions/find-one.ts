import type { Config, Context } from '@netlify/functions'
import { Player } from '../../src/types/player'
import { GET } from '../../src/utils/get'
export default async (_: Request, context: Context) => {
  const api_url = process.env.VITE_API_URL || ''
  const { players } = await GET<Record<'players', Player[]>>(api_url)
  const playerId = Number(context.params.id)

  const foundPlayer = findPlayerById(players, playerId)

  return foundPlayer
    ? new Response(JSON.stringify(foundPlayer), { status: 200 })
    : new Response('Not found', { status: 404 })
}

const findPlayerById = (
  players: Player[],
  playerId: number
): Player | undefined => {
  return players.find((player) => player.id === playerId)
}

export const config: Config = {
  path: '/api/players/:id',
  preferStatic: true
}
