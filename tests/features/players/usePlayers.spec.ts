import {
  createGetPlayers,
  Dependencies,
  GetPlayersResponse,
} from '../../../src/features/players/usePlayers'
import { Mocks } from '../../utils'

describe('Use players', () => {
  let mocks: Mocks<Dependencies>
  let getPlayers: () => GetPlayersResponse

  beforeEach(() => {
    mocks = { httpGet: vitest.fn() }
    getPlayers = createGetPlayers(mocks)
  })

  it('should properly call GET', async () => {
    await getPlayers()

    expect(mocks.httpGet).toHaveBeenCalledWith(`/api/players`)
  })
})
