import { parseAbsolute } from '@internationalized/date'

export const useDateFormatter = () => {
  const formatPolishDate = (isoDate: string): string => {
    try {
      const date = parseAbsolute(isoDate, 'UTC')

      const months = [
        'stycznia',
        'lutego',
        'marca',
        'kwietnia',
        'maja',
        'czerwca',
        'lipca',
        'sierpnia',
        'września',
        'października',
        'listopada',
        'grudnia',
      ]

      const day = date.day
      const month = months[date.month - 1]
      const year = date.year

      return `${day} ${month} ${year}`
    } catch (error) {
      console.error('Error parsing date:', error)
      return 'Error parsing date'
    }
  }

  return { formatPolishDate }
}
