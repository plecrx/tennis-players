import { useParams } from 'react-router-dom'
import { DetailCard } from '../components/detailCard.component.tsx'
import { usePlayerDetails } from '../features/players/usePlayerDetails.ts'
import { PageLayout } from '../layouts/page.layout.tsx'

export type PlayerDetailsPageDependencies = {
  _usePlayerDetails?: typeof usePlayerDetails
}
export const PlayerDetailsPage = ({
  _usePlayerDetails = usePlayerDetails,
}: PlayerDetailsPageDependencies) => {
  const { playerId } = useParams()
  const { currentPlayer } = _usePlayerDetails(playerId)

  return (
    <PageLayout>
      <span
        className='text-2xl font-bold p-8'
        data-testid='player-details-page-title'
      >
        User Informations
      </span>
      {currentPlayer && <DetailCard player={currentPlayer} />}
    </PageLayout>
  )
}
