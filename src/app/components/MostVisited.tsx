import { type Trip } from '@/lib/types'

export default function MostVisited ({ trips }: { trips: Trip[] }): JSX.Element {
  const counter = trips.reduce((acc: Record<string, number>, trip: Trip) => {
    const destination: string = trip.destination
    acc[destination] = (acc[destination] || 0) + 1
    return acc
  }, {})
  const orderedValues: Array<[any, any]> = Object.entries(counter).sort((a, b) => b[1] - a[1])
  const mostVisited: string = orderedValues[0][0]

  return (
        <div className="shadow-sm shadow-slate-300 p-4 max-h-[7vh] flex gap-3">
      <h3 className="text-md font-semibold">Your most visited destination:</h3>
      <p>{mostVisited} - {counter[mostVisited]} times</p>
        </div>
  )
}
