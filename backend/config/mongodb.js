import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("MongoDB connectée avec succès");
  });

  mongoose.connection.on("error", (error) => {
    console.error(`Erreur de connexion à MongoDB: ${error.message}`);
  });

  // Connexion à la base de données locale
  await mongoose.connect(`${process.env.MONGODB_URI}/Prescripto`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default connectDB;