

// API pour ajouter un medecin
const addDoctor = async (req, res) => {
    try {
        const { name, email, password, specialty } = req.body;
        const doctor = new Doctor({ name, email, password, specialty });
        await doctor.save();
        res.status(201).json({ message: 'Medecin ajouté avec succès' });
    } catch (error) {   
        res.status(500).json({ message: error.message });
    }
}