import NewTrip from '@/app/components/NewTrip'
import AllTravelsCard from '@/app/components/AllTravelsCard'
import FutureTravelsCard from '@/app/components/FutureTravelsCard'
import MostVisited from '@/app/components/MostVisited'
import { getAllTrips } from '@/lib/actions/tripActions'
import { auth } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'

export default async function Dashboard (): Promise<JSX.Element> {
  const trips = await getAllTrips()
  const { userId } = auth()
  const userTrips = trips?.filter(trip => trip.userId === userId)
  return (
<div className="pt-12 flex flex-col gap-5 w-full overflow-hidden">
      <h1 className="text-3xl font-bold">Trip manager</h1>
      <NewTrip />
      <div className='flex gap-12 max-h-[40vh] w-100%'>
        <AllTravelsCard trips={userTrips} />
        <div className='flex flex-col w-1/3 h-full'>
          <FutureTravelsCard trips={userTrips} />
          <MostVisited trips={userTrips}/>
        </div>

      </div>
        <div className='flex flex-col max-h-[60vh] w-1/3 gap-2'>
          <h2 className='text-2xl font-bold'>Wish trips</h2>
          <Button className='w-fit'>New wish</Button>
        </div>

</div>
  )
}
