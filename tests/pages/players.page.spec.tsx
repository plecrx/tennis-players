import { render } from '@testing-library/react'
import { expect } from 'vitest'
import { getRandomOpponents } from '../../src/features/players/getRandomOpponents'
import { PlayersPage } from '../../src/pages'

describe('Players Page', () => {
  beforeEach(() => {
    vi.mocked(getRandomOpponents)
    vitest.spyOn(global, 'fetch')
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
    expect(getRandomOpponents).toHaveBeenCalled()
  })
})
