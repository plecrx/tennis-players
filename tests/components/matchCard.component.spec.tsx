import { render, RenderResult } from '@testing-library/react'
import { beforeEach, expect } from 'vitest'
import { MatchCard } from '../../src/components/matchCard.component'
import { Player } from '../../src/types/player'
import { MemoryRouter } from 'react-router-dom'

describe('Match Card Component', () => {
  let wrapper: RenderResult
  beforeEach(() => {
    wrapper = render(
      <MemoryRouter>
        <MatchCard player={createPlayer()} />
      </MemoryRouter>
    )
  })

  it('should display a picture', () => {
    const { getByTestId } = wrapper
    const picture = getByTestId('match-card-picture')

    expect(picture).toHaveAttribute('src', 'picture-url')
  })

  it('should display a full name', () => {
    const { getByTestId } = wrapper
    const fullName = getByTestId('match-card-fullname')

    expect(fullName).toHaveTextContent('Jane Doe')
  })

  it('should display a rank', () => {
    const { getByTestId } = wrapper
    const rank = getByTestId('match-card-rank')

    expect(rank).toHaveTextContent('Rank: 1')
  })

  it('should display stats', () => {
    const { getByTestId } = wrapper
    const stats = getByTestId('match-card-stats')

    expect(stats).toHaveTextContent('Points:1234')
    expect(stats).toHaveTextContent('Height:1m75')
    expect(stats).toHaveTextContent('Weight:75kg')
    expect(stats).toHaveTextContent('Age:30 ans')
  })

  it('should display total played time', () => {
    const { getByTestId } = wrapper
    const playedTime = getByTestId('match-card-played-time')

    expect(playedTime).toHaveTextContent('Total played time: 10 hours')
  })

  /*   it('should redirect to details page', async () => {
    const { getByTestId } = wrapper
    const buttonDetails = getByTestId('link-details')

    await act( async () => fireEvent.click(buttonDetails, {button: 0}))

    expect(buttonDetails).toHaveTextContent('See details')
    expect(screen.getByText('PLAYER DETAILS')).toBeInTheDocument()
  }) */
})
const createPlayer = (playerDetails?: Partial<Player>): Player => ({
  country: { code: '', picture: '' },
  data: {
    age: 30,
    height: 175,
    last: {},
    played_time: 10,
    points: 1234,
    rank: 1,
    weight: 75000,
  },
  firstname: 'Jane',
  id: 123,
  lastname: 'Doe',
  picture: 'picture-url',
  sex: 'F',
  shortname: '',
  ...playerDetails,
})
