

// API pour ajouter un medecin
const addDoctor = async (req, res) => {
    try {

        const { name, email, password, specialty, degree, experience, about, fees, adress } = req.body;
        const doctor = new doctor({ name, email, password, specialty });
        await doctor.save();
        res.status(201).json({ message: 'Medecin ajouté avec succès' });
    } catch (error) {
        
    }
}

export { addDoctor };