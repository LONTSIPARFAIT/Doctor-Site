import jwt from "jsonwebtoken";

// Middleware pour l'authentification de l'admin
const authAdmin = async (req, res, next) => {
    try {

        const {atoken} = req.headers;

        if (!atoken) {
            return res.json({success:false, message: 'Token manquant' });
        }

        const token_decode = jwt.verify(atoken, process.env.JWT_SECRET);

        if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({success:false, message: 'Token invalide' });
        }

        next();
        
    } catch (error) {
        console.error('Erreur lors de la connexion de l\'administrateur:', error);
        res.status(500).json({ message: 'Erreur du serveur' });
    }
}

export default authAdmin;