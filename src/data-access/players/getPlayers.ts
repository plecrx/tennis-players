import { Player } from '../../types/player.ts'
import { GET } from '../../utils/get.ts'

export type Dependencies = {
  httpGet: typeof GET
}

export type GetPlayersResponse = Promise<Player[]>
export const createGetPlayers =
  ({ httpGet }: Dependencies) =>
  async (): GetPlayersResponse => {
    return await httpGet('/.netlify/functions/find-all')
  }

export const getPlayers: () => GetPlayersResponse = createGetPlayers({
  httpGet: GET,
})
