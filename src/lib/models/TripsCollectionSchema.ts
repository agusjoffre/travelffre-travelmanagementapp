import mongoose from 'mongoose'

const TripCollectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false,
    maxLength: 2200
  },
  trips: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Trip'
  }],
  userId: {
    type: String,
    required: true
  }
})
export default mongoose.models.TripCollection || mongoose.model('TripCollection', TripCollectionSchema)
