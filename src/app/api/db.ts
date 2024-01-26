import mongoose from 'mongoose'

let isConnected: boolean = false

export const connectDB = async (): Promise<void> => {
  if (isConnected) {
    return
  }

  try {
    await mongoose.connect(process.env.MONGO_URI!)
    isConnected = true
    console.log('Connected to MongoDB')
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

export default connectDB
