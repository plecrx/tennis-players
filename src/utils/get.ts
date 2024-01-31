import { httpClient } from './httpClient.ts'
export const GET = async <T = Record<string, never>>(
  url: string
): Promise<T> => {
  const response = await httpClient(url, {
    method: 'Get',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })

  return response.json()
}
