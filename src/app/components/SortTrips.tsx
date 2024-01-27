'use client'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { type Trip } from '@/lib/types'

export default function SortTrips ({ setSortedTrips, trips }:
{ setSortedTrips: React.Dispatch<React.SetStateAction<Trip[]>>, trips: Trip[] }): JSX.Element {
  const handleSort = (value: string): void => {
    if (value === 'disordered') {
      setSortedTrips([...trips])
    } else if (value === 'recent') {
      setSortedTrips([...trips].sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()))
    } else if (value === 'oldest') {
      setSortedTrips([...trips].sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()))
    } else if (value === 'alphabetical') {
      setSortedTrips([...trips].sort((a, b) => {
        if (a.from === b.from) {
          return a.destination.localeCompare(b.destination)
        } else {
          return a.from.localeCompare(b.from)
        }
      }))
    }
  }
  return (
        <Select onValueChange={handleSort}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent defaultValue={'all'} >
                      <SelectItem value="disordered">Disordered</SelectItem>
                      <SelectItem value="recent">Recent</SelectItem>
                      <SelectItem value="oldest">Oldest</SelectItem>
                      <SelectItem value="alphabetical">Alphabetical</SelectItem>
                    </SelectContent>
                  </Select>
  )
}
