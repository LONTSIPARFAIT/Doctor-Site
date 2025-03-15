import mongoose from "mongoose";

const connectDB = async ()=>{

  mongoose.connection.on("connected", () => {
    console.log("Mongodb connectée avec succès");
  });

  // Connexion à la base de données locale
  await mongoose.connect(`${process.env.MONGODB_URI}/Prescripto`, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true, 
  });

  // mongoose.connection.on("connected",() =>console.log("Mongodb connectée avec success"))

  // await mongoose.connect(`${process.env.MONGODB_URI}/Prescripto`)


}

export default connectDB