import mongoose from "mongoose";

const connectDB = async () => {
  // try {
    // Connexion à la base de données locale
    await mongoose.connect(`${process.env.MONGODB_URI}/Prescripto`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    mongoose.connection.on("connected", () => {
      console.log("MongoDB connectée avec succès");
    });

    // mongoose.connection.on("error", (error) => {
    //   console.error(`Erreur de connexion à MongoDB: ${error.message}`);
    // });
    
  // } catch (error) {
  //   console.error(`Erreur lors de la connexion à MongoDB: ${error.message}`);
  // }
};

export default connectDB;