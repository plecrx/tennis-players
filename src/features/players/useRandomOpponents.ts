import { useState } from 'react'
import {
  getRandomPlayers,
  GetRandomPlayersResponse,
} from '../../data-access/players/getRandomPlayers.ts'

export const useRandomOpponents = () => {
  const [opponents, setOpponents] = useState<
    GetRandomPlayersResponse['opponents'] | null
  >(null)

  const getOpponents = async () => {
    const { opponents: opponentsApi } = await getRandomPlayers()
    setOpponents(opponentsApi)
  }

  return {
    opponents,
    getOpponents,
  }
}
