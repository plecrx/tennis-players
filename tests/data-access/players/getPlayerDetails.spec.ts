import {
  createGetPlayerDetails,
  GetPlayerDetailsResponse,
} from '../../../src/data-access/players/getPlayerDetails'
import { Dependencies } from '../../../src/data-access/players/getPlayers'
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
