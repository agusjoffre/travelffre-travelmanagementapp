import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import NewTripForm from '@/app/components/NewTripForm'
import { type City } from '@/lib/types'
export default function NewTrip (): JSX.Element {
  return (
      <div>
            <Dialog>
      <DialogTrigger asChild>
        <Button>New Trip</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] z-[1000]">
        <DialogHeader>
          <DialogTitle>Add a trip</DialogTitle>
          <DialogDescription>
            Add a new trip to your account.
          </DialogDescription>
                  </DialogHeader>
        <NewTripForm />
      </DialogContent>
    </Dialog>
        </div>
  )
}
