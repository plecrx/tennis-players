import type { Mock } from 'vitest'
import { Player } from '../src/types/player'

export type Mocks<Type> = Type extends (
  ...arg: infer Params
) => infer ReturnType
  ? Mock<Params, ReturnType>
  : Type extends object
  ? { [key in keyof Type]: Mocks<Type[key]> }
  : Type

export const createPlayer = (playerDetails?: Partial<Player>): Player => ({
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
