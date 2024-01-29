'use server'

import { revalidatePath } from 'next/cache'
import TripSchema from '../models/TripSchema'
import TripsCollectionSchema from '../models/TripsCollectionSchema'
import connectDB from '@/lib/db'
import { auth } from '@clerk/nextjs'
import { type Trip, type TripsCollection } from '../types'

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
  const collectionName = formData.get('collection')
  await connectDB()
  const newTrip = new TripSchema(trip)
  await newTrip.save()
  await TripsCollectionSchema.findOneAndUpdate({ name: collectionName },
    { $push: { trips: newTrip._id, userId } })
  revalidatePath('/dashboard')
}

export const getAllTrips = async (): Promise<Trip[]> => {
  await connectDB()
  const trips = await TripSchema.find()
  revalidatePath('/dashboard')
  return trips
}

export const getAllCollections = async (): Promise<TripsCollection[]> => {
  await connectDB()
  const collections = await TripsCollectionSchema.find()
  revalidatePath('/dashboard')
  return collections
}

export const getAndSubmitCollection = async (formData: FormData): Promise<void> => {
  const { userId } = auth()
  const collection = {
    name: formData.get('name'),
    description: formData.get('description'),
    userId
  }
  await connectDB()
  const newCollection = new TripsCollectionSchema(collection)
  await newCollection.save()
  revalidatePath('/dashboard')
}
