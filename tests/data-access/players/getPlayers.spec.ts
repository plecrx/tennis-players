import {
  createGetPlayers,
  Dependencies,
  GetPlayersResponse,
} from '../../../src/data-access/players/getPlayers'
import { Mocks } from '../../test.utils'

describe('Use players', () => {
  let mocks: Mocks<Dependencies>
  let getPlayers: () => GetPlayersResponse

  beforeEach(() => {
    mocks = { httpGet: vitest.fn() }
    getPlayers = createGetPlayers(mocks)
  })

  it('should properly call GET', async () => {
    await getPlayers()

    expect(mocks.httpGet).toHaveBeenCalledWith(`/.netlify/functions/find-all`)
  })
})
