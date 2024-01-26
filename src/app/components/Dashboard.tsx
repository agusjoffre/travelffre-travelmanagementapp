import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
export default function Dashboard (): JSX.Element {
  return (
<div className="pt-12 flex flex-col gap-5">
      <h1 className="text-3xl font-bold">Trip manager</h1>
      <Dialog>
      <DialogTrigger asChild>
        <Button>New Trip</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a trip</DialogTitle>
          <DialogDescription>
            Add a new trip to your account.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="from" className="text-right">
              From
            </Label>
            <Input id="from" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="destiny" className="text-right">
              Destiny
            </Label>
            <Input id="destiny" className="col-span-3" />
            </div>
                      <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="startDate" className="text-right">
              Arrival date
            </Label>
            <Input id="startDate" type="date" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="endDate" className="text-right">
              Return date
            </Label>
            <Input id="endDate" type="date" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Add</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
</div>
  )
}
