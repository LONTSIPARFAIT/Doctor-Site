

// API pour ajouter un medecin
const addDoctor = async (req, res) => {
    try {

        const { name, email, password, specialty, degree, experience, about, fees, address } = req.body;
        const imageFile = req.file;

        // veriication de tous les donne d'ajout d'un medecin
        if (!name || !password || !specialty) {
            
        }

        // console.log({ name, email, password, specialty, degree, experience, about, fees, address},imageFile);
        
    //     await doctor.save();
    //     res.status(201).json({ message: 'Medecin ajouté avec succès' });
    } catch (error) {
        console.error('Erreur lors de l\'ajout du médecin:', error);
        res.status(500).json({ message: 'Erreur du serveur' });
    }
}

export { addDoctor };