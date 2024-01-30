export type Player = {
  id: number
  firstname: string
  lastname: string
  shortname: string
  sex: 'M' | 'F'
  country: {
    picture: string
    code: string
  }
  picture: string
  data: {
    rank: number
    points: number
    weight: number
    height: number
    age: number
    last: Record<number, number>
  }
}
