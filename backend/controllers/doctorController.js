import doctorModel from "../models/doctorModel.js";


const changeAvailablity = async (req,res)=>{
    try {

        const {docId} = req.body

        const doctorData = await doctorModel.findById(docId)
        await doctorModel.findByIdAndUpdate
        
    } catch (error) {
        console.error('Erreur lors de la connexion du medecin:', error);
        res.status(500).json({ message: 'Erreur du serveur' });
    }
}