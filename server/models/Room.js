// models/Room.js
// models/Room.js

const mongoose = require('mongoose');
const roomSchema = new mongoose.Schema({
  
  hostelId: { type: mongoose.Schema.Types.ObjectId, ref: 'Hostel', required: true },
  roomNumber: { type: String, required: true },
  capacity: { type: Number, required: true },
  remainingCapacity: { type: Number, required: true, default: 0 },
  type:{type: String, required: true, default: 0},
  price:{type: Number, required: true, default: 0},
  hostel: {
    type: String,
    required: true
  },
  lastCleanedAt:{
     type: Date,
  },
  // beds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bed' }],
  lastUpdatedBy:{
    type: String,
  },
  residents:[{type: mongoose.Schema.Types.ObjectId, ref:'Resident'}]
  
  // Represents the remaining capacity of the room
  // Add more fields as needed
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
