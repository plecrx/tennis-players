import { Player } from '../../types/player.ts'
import { GET } from '../../utils/get.ts'

export type Dependencies = {
  httpGet: typeof GET
}

export type GetRandomOpponentsResponse = {
  opponents: {
    player_one: Player
    player_two: Player
  }
}
export const createGetRandomOpponents =
  ({ httpGet }: Dependencies) =>
  async (): Promise<GetRandomOpponentsResponse> => {
    return await httpGet('/api/players/random')
  }

export const getRandomOpponents: () => Promise<GetRandomOpponentsResponse> =
  createGetRandomOpponents({ httpGet: GET })
