'use server'

import { revalidatePath } from 'next/cache'
import TripSchema from '../models/TripSchema'
import connectDB from '@/lib/db'
import { auth } from '@clerk/nextjs'

export const getAndSubmitTrip = async (formData: FormData): Promise<void> => {
  const { userId } = auth()
  const trip = {
    from: formData.get('from'),
    destiny: formData.get('destiny'),
    startDate: formData.get('startDate'),
    endDate: formData.get('endDate'),
    userId
  }
  await connectDB()
  const newTrip = new TripSchema(trip)
  await newTrip.save()
  revalidatePath('/dashboard')
}
