import { GET } from '../../utils/get.ts'
import { Player } from '../../types/player.ts'

export type Dependencies = {
  httpGet: typeof GET
}

export type PlayerDetailsResponse = Promise<Player>
export const createGetPlayerDetails =
  ({ httpGet }: Dependencies) =>
  async (playerId: string): PlayerDetailsResponse => {
    return await httpGet(`/api/players/${playerId}`)
  }

export const getPlayerDetails = createGetPlayerDetails({ httpGet: GET })
