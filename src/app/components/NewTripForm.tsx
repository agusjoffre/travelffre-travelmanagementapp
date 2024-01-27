import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import SubmitButton from './SubmitButton'
import { getAndSubmitTrip } from '@/lib/actions/tripActions'

export default function NewTripForm (): JSX.Element {
  return (

        <form action={getAndSubmitTrip} className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">

            <Label htmlFor="from" className="text-right">
              From
            </Label>
            <Input required type="text" id="from" name='from' className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="destiny" className="text-right">
              Destiny
            </Label>
            <Input required type="text" name='destiny' id="destiny" className="col-span-3" />
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
