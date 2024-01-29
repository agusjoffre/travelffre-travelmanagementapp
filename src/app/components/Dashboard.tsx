import NewTrip from '@/app/components/NewTrip'
import AllTravelsCard from '@/app/components/AllTravelsCard'
import FutureTravelsCard from '@/app/components/FutureTravelsCard'
import MostVisited from '@/app/components/MostVisited'
import { getAllTrips } from '@/lib/actions/tripActions'
import { auth } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { type Trip, type DestinationInfo } from '@/lib/types'
import dynamic from 'next/dynamic'

const Map = dynamic(async () => await import('@/app/components/Map'), { ssr: false })

export default async function Dashboard (): Promise<JSX.Element> {
  const trips = await getAllTrips()
  const { userId } = auth()
  const userTrips = trips?.filter(trip => trip.userId === userId)

  const getTripInfo = async (): Promise<any> => {
    try {
      const tripInfo = userTrips.map(async (trip) => {
        const formattedDestinationName = trip.destination.trim().split(' ').join('')
        console.log(formattedDestinationName)
        const res = await fetch(`${process.env.GEONAMES_URL}name=${formattedDestinationName}&maxRows=1&&fuzzy=0.5&username=${process.env.GEONAMES_USERNAME}`)
        const data = await res.json()
        return data.geonames[0] ? data.geonames[0] : null
      })
      return await Promise.all(tripInfo)
    } catch (err) {
      const error = err as Error
      throw new Error(error.message)
    }
  }

  return (
<div className="pt-12 flex flex-col gap-5 w-full overflow-hidden">
      <h1 className="text-3xl font-bold">Trip manager</h1>
      <NewTrip />
      <div className='flex gap-12 max-h-[35vh] w-100%'>
        <AllTravelsCard trips={userTrips} />
        <div className='flex flex-col w-1/3 h-full'>
          <FutureTravelsCard trips={userTrips} />
          <MostVisited trips={userTrips}/>
        </div>
      </div>
      <div className='flex flex-row max-h-[65vh] w-full'>
        <div className='flex flex-col min-h-fit w-1/3 gap-2'>
          <h2 className='text-2xl font-bold'>Wish trips</h2>
          <Button className='w-fit'>New wish</Button>
        </div>
        <div className='w-2/3 h-full min-h-[40vh] shadow-sm gap-3 flex flex-col rounded-sm mr-14'>
          <div className='flex items-center justify-center gap-8'>
            <h1 className='text-2xl font-semibold'>Your journey across the world 🌎</h1>
            <Button>Show more</Button>
          </div>
          <div className='w-full h-full'>
             <Map tripInfo={await getTripInfo()}/>
          </div>
        </div>
      </div>

</div>
  )
}
