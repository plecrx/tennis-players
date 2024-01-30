import { GET } from '@/utils/get.ts'
import { Player } from '../../types/player.ts'

export type Dependencies = {
  httpGet: typeof GET
}

type PlayerDetailsResponse = Promise<Player>

export const createGetPlayerDetails =
  ({ httpGet }: Dependencies) =>
  async (playerId: number): PlayerDetailsResponse => {
    return await httpGet(`/api/players/${playerId}`)
  }

export const usePlayerDetails = createGetPlayerDetails({ httpGet: GET })
