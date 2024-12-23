const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const staffSchema = new Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  mobileNumber: { type: Number,  
  },
  address: { type: String,
    },
uniqueId: {type: String, required: true},
  nearOneName: { type: String, 
  },
  nearOneMobileNo: { type: Number, 
  },
  dateJoined:{type:Date},      
  contractEndDate: { type: Date },
  contractTerm:{type:Number},
  area: { type: String }, 
  imageUrl:{type:String},
  aadhaarCardUrl: {type:String},
  hostelIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Hostel', required: true }],
});

const Staff = mongoose.model('Staff', staffSchema);

module.exports = Staff;


