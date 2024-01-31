import { createHashRouter, Navigate, RouteObject } from 'react-router-dom'
import { NotFoundPage, PlayerDetailsPage, PlayersPage } from '../pages'

const routes: RouteObject[] = [
  { path: '/', element: <Navigate to='/players' /> },
  { path: '/players', element: <PlayersPage /> },
  { path: '/players/:playerId', element: <PlayerDetailsPage /> },
  { path: '*', element: <NotFoundPage /> },
]
export const router = createHashRouter(routes)
