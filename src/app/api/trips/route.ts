import { connectDB } from '@/app/api/db'
import TripSchema from '@/lib/models/TripSchema'
export async function GET (req: Request): Promise<Response> {
  await connectDB()
  const trips = await TripSchema.find()
  return new Response(JSON.stringify(trips), { status: 200 })
}

export async function POST (req: Request): Promise<Response> {
  await connectDB()
  const body = await req.json()
  const trip = await TripSchema.create(body)
  return new Response(JSON.stringify(trip), { status: 200 })
}

export async function DELETE (req: Request): Promise<Response> {
  await connectDB()
  const { id } = await req.json()
  const trip = await TripSchema.findByIdAndDelete(id)
  return new Response(JSON.stringify(trip), { status: 200 })
}

export async function PUT (req: Request): Promise<Response> {
  await connectDB()
  const { id } = await req.json()
  const trip = await TripSchema.findByIdAndUpdate(id)
  return new Response(JSON.stringify(trip), { status: 200 })
}
