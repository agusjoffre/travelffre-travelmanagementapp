'use server'

import { revalidatePath } from 'next/cache'
import TripSchema from '../models/TripSchema'
import connectDB from '@/lib/db'
import { auth } from '@clerk/nextjs'
import { type Trip } from '../types'

export const getAndSubmitTrip = async (formData: FormData): Promise<void> => {
  const { userId } = auth()
  const trip = {
    from: formData.get('from'),
    destination: formData.get('destination'),
    startDate: formData.get('startDate'),
    endDate: formData.get('endDate'),
    description: formData.get('description'),
    userId
  }
  await connectDB()
  const newTrip = new TripSchema(trip)
  await newTrip.save()
  revalidatePath('/dashboard')
}

export const getAllTrips = async (): Promise<Trip[]> => {
  await connectDB()
  const trips = await TripSchema.find()
  revalidatePath('/dashboard')
  return trips
}
