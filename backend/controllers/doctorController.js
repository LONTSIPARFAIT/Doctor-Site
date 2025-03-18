

const changeAvailablity = async (req,res)=>{
    try {
        
    } catch (error) {
        console.error('Erreur lors de la connexion de l\'administrateur:', error);
        res.status(500).json({ message: 'Erreur du serveur' });
    }
}