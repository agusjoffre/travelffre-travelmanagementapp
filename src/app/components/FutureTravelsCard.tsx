'use client'
import { type Trip } from '@/lib/types'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { useState } from 'react'
import SortTrips from '@/app/components/SortTrips'

export default function FutureTravelsCard ({ trips }: { trips: Trip[] }): JSX.Element {
  const [sortedTrips, setSortedTrips] = useState<Trip[]>(trips)
  const today = new Date()
  const oneWeekToGo = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)
  const futureTrips: Trip[] = sortedTrips.filter((trip) => new Date(trip.startDate) > today)

  return (
      <div
          className="flex flex-col gap-4
           overflow-scroll w-100% h-fit max-h-[35vh]
            rounded-md shadow-sm shadow-slate-300
             p-4">
          <div className='flex justify-between items-center'>
              <h1 className="text-xl text-center font-medium">Planned trips 🛫</h1>
                <SortTrips setSortedTrips={setSortedTrips} trips={trips}/>
          </div>
                <Table>
                    <TableCaption>Your planned trips.</TableCaption>
                    <TableHeader>
                        <TableRow>
                        <TableHead >From</TableHead>
                        <TableHead>To</TableHead>
                        <TableHead >Arrival date</TableHead>
                        <TableHead className="text-right">Return date</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                  {futureTrips.map((trip) => {
                    return (
                        <TooltipProvider key={trip._id} >
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <TableRow
                                        className={new Date(trip.startDate) < oneWeekToGo
                                          ? 'bg-red-200 hover:bg-red-300'
                                          : ''}>

                                                        <TableCell>{trip.from}</TableCell>
                                                         <TableCell>{trip.destination}</TableCell>
                                                         <TableCell>{trip.startDate}</TableCell>
                                        <TableCell className="text-right">{trip.endDate}</TableCell>
                                        </TableRow>

                                </TooltipTrigger>

                                        <TooltipContent>
                                            {new Date(trip.startDate) < oneWeekToGo
                                              ? (
                                                    <>
                                                        <p>Start of the trip is {Math.floor((oneWeekToGo.getTime() - new Date(trip.startDate).getTime()) / (1000 * 60 * 60 * 24))} days away</p><p>{trip.description}</p>
                                                    </>
                                                )
                                              : trip.description ? <p>{trip.description}</p> : <p>No description</p>}
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>

                    )
                  })}

                    </TableBody>
            </Table>
        </div>
  )
}
