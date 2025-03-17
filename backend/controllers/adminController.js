import validator from "validator"
import bcrypt from 'bcrypt'
import { v2 as cloudinary } from "cloudinary";
import doctorModel from "../models/doctorModel.js";
import jwt from "jsonwebtoken";

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

// API pour la connexion de l'administrateur
const loginAdmin = async (req, res) => {
    try {

        const { email, password } = req.body;

        // Vérifiez si l'e-mail et le mot de passe sont corrects
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD, { expiresIn: '1h' }) {

            const token = jwt.sign( email+password, process.env.JWT_SECRET);
            // const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ success: true, message: 'Connexion réussie',token });
        } else {
            res.status(401).json({ message: 'Email ou mot de passe incorrect' });
            
        }

    } catch (error) {
        console.error('Erreur lors de la connexion de l\'administrateur:', error);
        res.status(500).json({ message: 'Erreur du serveur' });
        
    }

    // API to get all doctors list for admin panel
    const allDoctors = async (req,res) => {
        try {
            const doctors = await doctorModel.find({}).select('')

        } catch (error) {
            console.error('Erreur lors de la connexion de l\'administrateur:', error);
            res.status(500).json({ message: 'Erreur du serveur' });
            
        }
    }
}

export { addDoctor, loginAdmin };