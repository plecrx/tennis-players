type FormatFunction = (value: number) => string
export const formatFullname = ({
  firstname,
  lastName,
}: {
  firstname: string
  lastName: string
}) => `${firstname} ${lastName}`

const formatHeight = (heightValue: number) => {
  const heightInMeters = heightValue / 100
  const integerPart = Math.floor(heightInMeters)
  const decimalPart = Math.round((heightInMeters - integerPart) * 100)
  const formattedDecimalPart =
    decimalPart < 10 ? `0${decimalPart}` : `${decimalPart}`

  return `${integerPart}m${formattedDecimalPart}`
}

const formatWeight = (weightValue: number) => {
  return `${weightValue / 1000}kg`
}

const formatAge = (age: string | number) => `${age} ans`

const formatDuration = (time: number) => `${time || '--'} hours`

const formatNumber: Record<string, FormatFunction> = {
  played_time: (value: number) => formatDuration(value),
  weight: (value: number) => formatWeight(value),
  height: (value: number) => formatHeight(value),
  age: (value: number) => formatAge(value),
} as const

export const formatNumericValue = (
  key: string,
  value: number | Record<number, number>
): string => {
  const formatter = formatNumber[key]

  if (formatter) {
    return formatter(value as number)
  }

  return value.toString()
}
