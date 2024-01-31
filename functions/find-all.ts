import {Handler} from "@netlify/functions";
import { Player } from '../src/types/player'
import { GET } from '../src/utils/get'
export const handler: Handler = async (_, context) => {
  const api_url = process.env.VITE_API_URL || ''
  const { players } = await GET<Record<'players', Player[]>>(api_url)

  const sortedPlayers = sortById(players)

  return {
    body: JSON.stringify(sortedPlayers),
    statusCode: 200,
  }
}

const sortById = (players: Player[]) => {
  return players.sort((playerA, playerB) => playerA.id - playerB.id)
}