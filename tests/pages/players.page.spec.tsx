import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { expect, vitest } from 'vitest'
import { Dependencies, PlayersPage } from '../../src/pages'
import { createPlayer, Mocks } from '../test.utils'

describe('Players Page', () => {
  let mocks: Mocks<Dependencies>

  beforeAll(() => {
    mocks = {
      _useRandomOpponents: vitest.fn().mockReturnValue({
        opponents: { player_one: createPlayer(), player_two: createPlayer() },
        getOpponents: vitest.fn(),
      }),
    }
  })

  it('should display an app header with EuroStat title', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <PlayersPage _useRandomOpponents={mocks._useRandomOpponents} />
      </MemoryRouter>
    )
    expect(getByTestId('app-header-title')).toHaveTextContent('EuroStat')
  })

  it('should display a title', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <PlayersPage _useRandomOpponents={mocks._useRandomOpponents} />
      </MemoryRouter>
    )

    expect(getByTestId('players-page-title')).toHaveTextContent('VS')
  })

  it('should display no match if opponents not found', () => {
    mocks._useRandomOpponents?.mockReturnValue({
      opponents: null,
      getOpponents: vitest.fn(),
    })
    const { getByTestId } = render(
      <MemoryRouter>
        <PlayersPage _useRandomOpponents={mocks._useRandomOpponents} />
      </MemoryRouter>
    )

    expect(getByTestId('players-page-title')).toHaveTextContent('No match')
  })
})
