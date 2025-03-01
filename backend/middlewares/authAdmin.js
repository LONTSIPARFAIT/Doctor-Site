import jwt from "jsonwebtoken";

// Middleware pour l'authentification de l'admin
const authAdmin = async (req, res, next) => {
    try {
        
    } catch (error) {
        console.error('Erreur lors de la connexion de l\'administrateur:', error);
        res.status(500).json({ message: 'Erreur du serveur' });
    }
}