import { render } from '@testing-library/react'
import { expect, vitest } from 'vitest'
import * as playersModule from '../../src/data-access/players/getRandomPlayers'
import { PlayersPage } from '../../src/pages'

vitest.mock('../features/players/useRandomOpponents.ts', () => {
  return {
    ...vitest.importActual('../features/players/useRandomOpponents.ts'),
    useRandomOpponents: vitest.fn(),
  }
})

describe('Players Page', () => {
  beforeEach(() => {
    vitest
      .spyOn(global, 'fetch')
      .mockReturnValue(Promise.resolve(new Response('{}')))
  })

  afterEach(() => {
    vitest.resetAllMocks()
  })

  it('should display an app header with EuroStat title', () => {
    const { getByTestId } = render(<PlayersPage />)
    const appTitle = getByTestId('app-header-title')

    expect(appTitle).toHaveTextContent('EuroStat')
  })

  it('should display a title', () => {
    const { getByTestId } = render(<PlayersPage />)
    const pageTitle = getByTestId('players-page-title')

    expect(pageTitle).toHaveTextContent('VS')
  })

  it('should load random players on accessing players page', () => {
    vi.useFakeTimers()
    const getRandomPlayersSpy = vitest.spyOn(playersModule, 'getRandomPlayers')

    render(<PlayersPage />)
    vitest.runAllTicks()

    expect(getRandomPlayersSpy).toHaveBeenCalled()
  })
})
