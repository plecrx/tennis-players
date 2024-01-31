import { Dependencies } from '../../../src/features/players/getPlayers'
import {
  createGetRandomOpponents,
  GetRandomOpponentsResponse,
} from '../../../src/features/players/getRandomOpponents'
import { Mocks } from '../../utils'

describe('Use Random Opponents', () => {
  let mocks: Mocks<Dependencies>
  let getRandomOpponents: () => Promise<GetRandomOpponentsResponse>

  beforeEach(() => {
    mocks = { httpGet: vitest.fn() }
    getRandomOpponents = createGetRandomOpponents(mocks)
  })

  it('should properly call GET', async () => {
    await getRandomOpponents()

    expect(mocks.httpGet).toHaveBeenCalledWith(`/api/players/random`)
  })
})
