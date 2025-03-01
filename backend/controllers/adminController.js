import validator from "validator"
import bcrypt from 'bcrypt'
import { v2 as cloudinary } from "cloudinary";
import doctorModel from "../models/doctorModel.js";

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

        // validation du mot de passe
        if (password.length < 6) {
            return res.json({ success:false, message: 'Veuillez entrez un password de 6 caratere au moins' });
        }
        //  hascharge du mot de passe
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // upload omage to cloudinary 
        const imageUPload = await cloudinary.uploader.upload(imageFile.path, {resource_type:'image'})
        const imageUrl = imageUPload.secure_url

        const doctorData = {
            name,
            email,
            image: imageUrl,
            password: hashedPassword,
            specialty,
            degree,
            experience,
            about,
            fees,
            address:JSON.parse(address),
            date:Date.now(), 
        }

        const newDoctor = new doctorModel(doctorData)
        await newDoctor.save()
        
        res.json({success:true,message:'Medecin ajouter evec success'})

    } catch (error) {
        console.error('Erreur lors de l\'ajout du médecin:', error);
        res.status(500).json({ message: 'Erreur du serveur' });
    }
}

export { addDoctor };