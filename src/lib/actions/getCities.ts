import { type City } from '@/lib/types'
export const getCities = async (): Promise<City[]> => {
  try {
    const res = await fetch(`http://api.geonames.org/searchJSON?&username=${process.env.GEONAMES_USERNAME}`)
    const data = await res.json()
    const cities: City[] = data.geonames
    return cities
  } catch (err) {
    const error = err as Error
    throw new Error(error.message)
  }
}
