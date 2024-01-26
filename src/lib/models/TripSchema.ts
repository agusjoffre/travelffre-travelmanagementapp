import mongoose from 'mongoose'

const TripSchema = new mongoose.Schema({
  from: {
    type: String,
    required: true
  },
  destiny: {
    type: String,
    required: true
  },
  startDate: {
    type: String,
    required: true
  },
  endDate: {
    type: String,
    required: true
  }
})

export default mongoose.models.TripSchema || mongoose.model('Trip', TripSchema)
