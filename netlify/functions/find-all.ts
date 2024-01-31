import type { Config, Context } from '@netlify/functions'
import { Player } from '../../src/types/player'
import { GET } from '../../src/utils/get'
export default async (_: Request, context: Context) => {
  const api_url = process.env.VITE_API_URL || ''
  const { players } = await GET<Record<'players', Player[]>>(api_url)

  const sortedPlayers = sortById(players)

  return new Response(JSON.stringify(sortedPlayers), { status: 200 })
}

const sortById = (players: Player[]) => {
  return players.sort((playerA, playerB) => playerA.id - playerB.id)
}

export const config: Config = {
  path: '/api/players',
  preferStatic: true,
}
