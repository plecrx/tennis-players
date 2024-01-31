import { useState } from 'react'
import { getPlayerDetails } from '../../data-access/players/getPlayerDetails.ts'
import { Player } from '../../types/player.ts'

export const usePlayerDetails = () => {
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null)

  const getCurrentPlayer = async (playerId: string) => {
    const playerDetails = await getPlayerDetails(playerId)
    setCurrentPlayer(playerDetails)
  }

  return {
    currentPlayer,
    getCurrentPlayer,
  }
}
