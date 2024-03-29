'use client'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import SubmitButton from './SubmitButton'
import { getAndSubmitTrip, getAllCollections } from '@/lib/actions/tripActions'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { type TripsCollection } from '@/lib/types'
export default function NewTripForm ({ collections }: { collections: TripsCollection[] }): JSX.Element {
  return (
    <form action={getAndSubmitTrip} className="grid gap-4 py-4">
      <div className='grid grid-cols-4 items-center gap-4 z-[1000]'>
        <Select required name='collection'>
  <SelectTrigger className="w-[180px] z-[1000]">
    <SelectValue placeholder="Your trips collections" />
  </SelectTrigger>
  <SelectContent className='z-[1000]'>
    {collections.map((collection: TripsCollection) => (
      <SelectItem key={collection} value={collection.name}>
        {collection.name}
      </SelectItem>
    ))}
  </SelectContent>
</Select>
      </div>
      <div className="grid grid-cols-4 items-center gap-4">

            <Label htmlFor="from" className="text-right">
              From
            </Label>
            <Input required type="text" id="from" name='from' className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="destination" className="text-right">
              Destination
            </Label>
            <Input required type="text" name='destination' id="destination" className="col-span-3" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">

            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Textarea maxLength={2200} id="description" name='description' className="col-span-3" />
          </div>
        <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="startDate" className="text-right">
              Arrival date
            </Label>
            <Input required name='startDate' id="startDate" type="date" className="col-span-3" />
      </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="endDate" className="text-right">
              Return date
            </Label>
              <Input required name='endDate' id="endDate" type="date" className="col-span-3" />
                <SubmitButton/>
          </div>
      </form>

  )
}
