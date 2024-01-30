import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom'
import { beforeEach } from 'vitest'
import { NotFoundPage, PlayerDetailsPage, PlayersPage } from '../../src/pages'

interface CustomRoute {
  route: {
    element: {
      props: {
        to: string
      }
    }
  }
}
describe('Router', () => {
  let router: ReturnType<typeof createBrowserRouter>
  let mockRoutes: RouteObject[]

  beforeEach(() => {
    mockRoutes = [
      { path: '/', element: <Navigate to='/players' /> },
      { path: '/players', element: <PlayersPage /> },
      { path: '/players/:playerId', element: <PlayerDetailsPage /> },
      { path: '*', element: <NotFoundPage /> },
    ]
    router = createBrowserRouter(mockRoutes)
  })

  it('should render the route players on root page', async () => {
    await router.navigate('/')

    const firstRoute = router.state.matches[0] as unknown as CustomRoute
    expect(firstRoute.route.element.props.to).toBe('/players')
  })

  it('should render the route players', async () => {
    await router.navigate('/players')

    expect(router.state.matches[0].route.path).toBe('/players')
  })

  it('should render the route player details', async () => {
    await router.navigate('/players/1')

    expect(router.state.matches[0].route.path).toBe('/players/:playerId')
  })

  it('should not render an unknown route', async () => {
    await router.navigate('/unknown-pathname')

    expect(router.state.matches[0].route.path).toBe('*')
  })
})
