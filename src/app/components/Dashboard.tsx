import NewTrip from '@/app/components/NewTrip'
import AllTravelsCard from '@/app/components/AllTravelsCard'
import FutureTravelsCard from './FutureTravelsCard'
import { getAllTrips } from '@/lib/actions/tripActions'
import { auth } from '@clerk/nextjs'

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
        <FutureTravelsCard trips={userTrips}/>
      </div>

</div>
  )
}
