'use client'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import SortTrips from '@/app/components/SortTrips'

import { type Trip } from '@/lib/types'
import { useState } from 'react'

export default function AllTravelsCard ({ trips }: { trips: Trip[] }): JSX.Element {
  const [sortedTrips, setSortedTrips] = useState<Trip[]>(trips)
  return (
      <div className="flex flex-col gap-4 overflow-scroll w-3/5 h-full rounded-md shadow-sm shadow-slate-300 p-4">
          <div className='flex justify-between items-center'>
        <h1 className="text-xl font-medium">All trips 🛫</h1>
          <SortTrips setSortedTrips={setSortedTrips} trips={trips}/>
          </div>
                <Table>
                    <TableCaption>Your travelling history.</TableCaption>
                    <TableHeader>
                        <TableRow>
                        <TableHead >From</TableHead>
                        <TableHead>To</TableHead>
                        <TableHead>Arrival date</TableHead>
                        <TableHead className="text-right">Return date</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                  {sortedTrips.map((trip) => {
                    return (
                                <TableRow key={trip._id}>
                                    <TableCell>{trip.from}</TableCell>
                                    <TableCell>{trip.destination}</TableCell>
                                    <TableCell>{trip.startDate}</TableCell>
                                    <TableCell className="text-right">{trip.endDate}</TableCell>
                                </TableRow>
                    )
                  })}

                    </TableBody>
            </Table>
      </div>
  )
}
