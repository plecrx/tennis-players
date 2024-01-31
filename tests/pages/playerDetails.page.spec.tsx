import { render } from '@testing-library/react'
import { expect, vitest } from 'vitest'
import { PlayerDetailsPage } from '../../src/pages'

vitest.mock('../features/players/usePlayerDetails.ts', () => {
  return {
    ...vitest.importActual('../features/players/usePlayerDetails.ts'),
    usePlayerDetails: vitest.fn(),
  }
})

describe('Player Details Page', () => {
  beforeEach(() => {
    vitest
      .spyOn(global, 'fetch')
      .mockReturnValue(Promise.resolve(new Response('{ toto }')))
  })

  afterEach(() => {
    vitest.resetAllMocks()
  })

  it('should display an app header with EuroStat title', () => {
    const { getByTestId } = render(<PlayerDetailsPage />)
    const appTitle = getByTestId('app-header-title')

    expect(appTitle).toHaveTextContent('EuroStat')
  })

  it('should display a title', () => {
    const { getByTestId } = render(<PlayerDetailsPage />)
    const pageTitle = getByTestId('player-details-page-title')

    expect(pageTitle).toHaveTextContent('User Informations')
  })

  /*   it('should load current player on accessing player details page', () => {
    vi.useFakeTimers()
    const getRandomPlayersSpy = vitest.spyOn(
      playerDetailsModule,
      'getPlayerDetails'
    )

    render(<PlayerDetailsPage />)
    vitest.runAllTicks()

    expect(getRandomPlayersSpy).toHaveBeenCalled()
  }) */
})
