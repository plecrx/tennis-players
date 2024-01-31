import { Dependencies } from '../../../src/data-access/players/getPlayers'
import {
  createGetRandomPlayers,
  GetRandomPlayersResponse,
} from '../../../src/data-access/players/getRandomPlayers'
import { Mocks } from '../../test.utils'

describe('Use Random Opponents', () => {
  let mocks: Mocks<Dependencies>
  let getRandomOpponents: () => Promise<GetRandomPlayersResponse>

  beforeEach(() => {
    mocks = { httpGet: vitest.fn() }
    getRandomOpponents = createGetRandomPlayers(mocks)
  })

  it('should properly call GET', async () => {
    await getRandomOpponents()

    expect(mocks.httpGet).toHaveBeenCalledWith(`/api/players/random`)
  })
})
