import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2'

const UserSchema = new mongoose.Schema({

  email: {
    type: String,
    trim: true,
    unique: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    required: 'Email is required'
  },
  password:{
    type:String,
    trim:true,
    required: 'password is required'
  },
  city:{
    type:String,
    trim:true,
  },
  ip:{
    type:String,
    trim:true,
  },
  region:{
    type:String,
    trim:true,
  },
  country:{
    type:String,
    trim:true,
  },

},
  {
    timestamps: true,
  });

UserSchema.plugin(mongoosePaginate);


export default mongoose.model('user', UserSchema);