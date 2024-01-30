import type { Mock } from 'vitest'

export type Mocks<Type> = Type extends (
  ...arg: infer Params
) => infer ReturnType
  ? Mock<Params, ReturnType>
  : Type extends object
  ? { [key in keyof Type]: Mocks<Type[key]> }
  : Type
