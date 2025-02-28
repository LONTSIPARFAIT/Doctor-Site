import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  name: {type:String, required: true },
  email: {type:String, required: true, unique: true },
  password: {type:String, required: true },
  image: {type:String, required: true },
  image: {type:String, required: true },
  phone: String,
  address: String,
  specialization: String,
  fees: Number,
  image: String,
});

export default mongoose.model("Doctor", doctorSchema);