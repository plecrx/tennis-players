import { Player } from '../../types/player.ts'
import { GET } from '../../utils/get.ts'

export type Dependencies = {
  httpGet: typeof GET
}

export type GetRandomPlayersResponse = {
  opponents: {
    player_one: Player
    player_two: Player
  }
}
export const createGetRandomPlayers =
  ({ httpGet }: Dependencies) =>
  async (): Promise<GetRandomPlayersResponse> => {
    return await httpGet('/.netlify/functions/random')
  }

export const getRandomPlayers: () => Promise<GetRandomPlayersResponse> =
  createGetRandomPlayers({ httpGet: GET })
