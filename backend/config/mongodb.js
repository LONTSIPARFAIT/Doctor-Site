import mongoose from "mongoose";

const connectDB = async () => {
    // Événements de connexion
    mongoose.connection.on("connected", () => {
        console.log("MongoDB connectée avec succès");
    });

    mongoose.connection.on("error", (error) => {
        console.error(`Erreur de connexion à MongoDB: ${error.message}`);
    });

    try {
        // Connexion à la base de données
        await mongoose.connect(`${process.env.MONGODB_URI}/Prescripto`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch (error) {
        console.error(`Erreur lors de la tentative de connexion à MongoDB: ${error.message}`);
        process.exit(1); // Arrêtez le serveur en cas d'erreur
    }
};

export default connectDB;

// const connectDB = async () => {
//   mongoose.connection.on("connected", () => {
//     console.log("MongoDB connectée avec succès");
//   });

//   mongoose.connection.on("error", (error) => {
//     console.error(`Erreur de connexion à MongoDB: ${error.message}`);
//   });

//   // Connexion à la base de données locale
//   await mongoose.connect(`${process.env.MONGODB_URI}/Prescripto`, {
//     // useNewUrlParser: true,
//     // useUnifiedTopology: true,
//   });
// };

// export default connectDB;