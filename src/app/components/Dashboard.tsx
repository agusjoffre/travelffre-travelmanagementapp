import NewTrip from '@/app/components/NewTrip'
import AllTravelsCard from '@/app/components/AllTravelsCard'
import { getAllTrips } from '@/lib/actions/tripActions'
export default async function Dashboard (): Promise<JSX.Element> {
  return (
<div className="pt-12 flex flex-col gap-5 w-screen">
      <h1 className="text-3xl font-bold">Trip manager</h1>
      <NewTrip />
      <div className='flex gap-12 max-h-[40vh] w-screen'>
        <AllTravelsCard trips={await getAllTrips()}/>
      </div>

</div>
  )
}
