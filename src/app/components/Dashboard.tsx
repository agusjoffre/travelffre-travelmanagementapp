'use client'

import NewTrip from '@/app/components/NewTrip'
export default function Dashboard (): JSX.Element {
  return (
<div className="pt-12 flex flex-col gap-5">
      <h1 className="text-3xl font-bold">Trip manager</h1>
      <NewTrip/>

</div>
  )
}
