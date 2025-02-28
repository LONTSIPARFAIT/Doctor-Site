import validator from "validator"

// API pour ajouter un medecin
const addDoctor = async (req, res) => {
    try {

        const { name, email, password, specialty, degree, experience, about, fees, address } = req.body;
        const imageFile = req.file;

        // veriication de tous les donne d'ajout d'un medecin
        if (!name || !password || !specialty || !degree || !experience || !about || !fees || !address) {
            return res.json({ success:false, message: 'Missing detail' });
        }
        // console.log({ name, email, password, specialty, degree, experience, about, fees, address},imageFile);   

        // Validation de l'email
        if (!validator.isEmail(email)) {
            return res.json({ success:false, message: 'Veuillez entrez un email valide' });
        }

    } catch (error) {
        console.error('Erreur lors de l\'ajout du médecin:', error);
        res.status(500).json({ message: 'Erreur du serveur' });
    }
}

export { addDoctor };