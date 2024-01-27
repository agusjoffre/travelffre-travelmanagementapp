import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { type Trip } from '@/lib/types'

export default function AllTravelsCard ({ trips }: { trips: Trip[] }): JSX.Element {
  return (
      <div className="flex flex-col gap-4 overflow-scroll w-3/5 h-full rounded-md shadow-sm shadow-slate-300 p-4">
          <div>
              <h1 className="text-xl text-center font-medium">All trips 🛫</h1>
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
                  {trips.map((trip) => {
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
