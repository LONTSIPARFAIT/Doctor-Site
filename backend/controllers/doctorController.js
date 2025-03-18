import doctorModel from "../models/doctorModel.js";


const changeAvailablity = async (req,res)=>{
    try {

        const {docId} = req.body

        const docData = await doctorModel.findById(docId)
        await doctorModel.findByIdAndUpdate(docId, { available:!docData.available })
        res.json()
        
    } catch (error) {
        console.error('Erreur lors de la connexion du medecin:', error);
        res.status(500).json({ message: 'Erreur du serveur' });
    }
}