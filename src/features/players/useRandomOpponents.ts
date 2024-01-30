import { Player } from '../../types/player.ts'
import { GET } from '../../utils/get.ts'

export type Dependencies = {
  httpGet: typeof GET
}

export type GetRandomOpponentsResponse = Promise<{
  opponents: {
    player_one: Player
    player_two: Player
  }
}>
export const createGetRandomOpponents =
  ({ httpGet }: Dependencies) =>
  async (): GetRandomOpponentsResponse => {
    return await httpGet('/api/players/random')
  }

export const useRandomOpponents: () => GetRandomOpponentsResponse =
  createGetRandomOpponents({ httpGet: GET })
