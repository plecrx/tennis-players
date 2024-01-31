import { useEffect, useState } from 'react'
import { getPlayerDetails } from '../../data-access/players/getPlayerDetails.ts'
import { Player } from '../../types/player.ts'

export const usePlayerDetails = (playerId?: string) => {
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null)

  const getCurrentPlayer = async (playerId: string) => {
    const playerDetails = await getPlayerDetails(playerId)
    setCurrentPlayer(playerDetails)
  }

  useEffect(() => {
    if (!currentPlayer && playerId !== undefined) {
      getCurrentPlayer(playerId)
    }
  }, [currentPlayer, playerId])

  return {
    currentPlayer,
    getCurrentPlayer,
  }
}
