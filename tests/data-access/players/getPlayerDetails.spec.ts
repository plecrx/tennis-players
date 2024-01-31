import {
  createGetPlayerDetails,
  PlayerDetailsResponse,
} from '../../../src/data-access/players/getPlayerDetails'
import { Dependencies } from '../../../src/data-access/players/getPlayers'
import { Mocks } from '../../test.utils'

describe('Use player details', () => {
  let mocks: Mocks<Dependencies>
  let getPlayerDetails: (playerId: string) => PlayerDetailsResponse

  beforeEach(() => {
    mocks = { httpGet: vitest.fn() }
    getPlayerDetails = createGetPlayerDetails(mocks)
  })

  it('should properly call GET', async () => {
    await getPlayerDetails('2')

    expect(mocks.httpGet).toHaveBeenCalledWith(`/api/players/2`)
  })
})
