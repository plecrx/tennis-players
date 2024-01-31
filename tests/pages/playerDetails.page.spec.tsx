import { render } from '@testing-library/react'
import { expect, vitest } from 'vitest'
import {
  PlayerDetailsPage,
  PlayerDetailsPageDependencies,
} from '../../src/pages'
import { createPlayer, Mocks } from '../test.utils'

describe('Player Details Page', () => {
  let mocks: Mocks<PlayerDetailsPageDependencies>
  beforeEach(() => {
    mocks = {
      _usePlayerDetails: vitest.fn().mockReturnValue({
        currentPlayer: createPlayer(),
      }),
    }
  })

  it('should display an app header with EuroStat title', () => {
    const { getByTestId } = render(
      <PlayerDetailsPage _usePlayerDetails={mocks._usePlayerDetails} />
    )
    const appTitle = getByTestId('app-header-title')

    expect(appTitle).toHaveTextContent('EuroStat')
  })

  it('should display a title', () => {
    const { getByTestId } = render(
      <PlayerDetailsPage _usePlayerDetails={mocks._usePlayerDetails} />
    )
    const pageTitle = getByTestId('player-details-page-title')

    expect(pageTitle).toHaveTextContent('User Informations')
  })
})
