import {
  createGetPlayerDetails,
  GetPlayerDetailsResponse,
} from '../../../src/features/players/usePlayerDetails'
import { Dependencies } from '../../../src/features/players/usePlayers'
import { Mocks } from '../../utils'

describe('Use player details', () => {
  let mocks: Mocks<Dependencies>
  let getPlayerDetails: (playerId: number) => GetPlayerDetailsResponse

  beforeEach(() => {
    mocks = { httpGet: vitest.fn() }
    getPlayerDetails = createGetPlayerDetails(mocks)
  })

  it('should properly call GET', async () => {
    await getPlayerDetails(2)

    expect(mocks.httpGet).toHaveBeenCalledWith(`/api/players/2`)
  })
})
