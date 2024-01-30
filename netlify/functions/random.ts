import type { Config, Context } from '@netlify/functions'
import { Player } from '../../src/types/player'
import { GET } from '../../src/utils/get'
export default async (_: Request, context: Context) => {
  const api_url = process.env.VITE_API_URL || ''
  const { players } = await GET<Record<'players', Player[]>>(api_url)

  const { player_one, player_two } = selectRandomPlayers(players)

  return new Response(
    JSON.stringify({ opponents: { player_one, player_two } }),
    { status: 200 }
  )
}

const selectRandomPlayers = (players: Player[]): Record<string, Player> => {
  const firstPlayerIndex = getRandomIndex(players.length)
  const [firstPlayer] = players.splice(firstPlayerIndex, 1)

  const secondPlayerIndex = getRandomIndex(players.length)
  const [secondPlayer] = players.splice(secondPlayerIndex, 1)

  return { player_one: firstPlayer, player_two: secondPlayer }
}

const getRandomIndex = (arrLength: number) => {
  return Math.floor(Math.random() * arrLength)
}

export const config: Config = {
  path: '/api/players/random',
}
