import { httpClient } from './httpClient.ts'
export const GET = async <T = Record<string, never>>(
  url: string
): Promise<T> => {
  const response = await httpClient(url, {
    method: 'Get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
  const contentType = response.headers.get('Content-Type')

  if (contentType?.includes('application/json')) return response.json()

  throw new Error('Type de contenu non pris en charge')
}
