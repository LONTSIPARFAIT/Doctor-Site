import { useContext, useEffect, useState } from 'react'
import { AppContext } from "../context/AppContext";
import { useParams } from 'react-router-dom';

// const Appointment = () => {

//   const {docId} = useParams();
//   const {doctors} = useContext(AppContext);
//   // console.log(docId);

//   const [docInfo, setDocInfo] = useState(null);

//   const fetchDocInfo = async () => {
//     const docInfo = doctors.find(doc => doc._id === docId);
//     setDocInfo(docInfo);
//     console.log(docInfo);
//   }

//   useEffect(() => {
//     fetchDocInfo();
//   }, [doctors,docId])

//   return (
//     <div>
//       {/* --------------------------- Doctor Detail */}
//       <div className="">
//         <div className="">
//           {/* <img src={docInfo.image} alt="" /> */}
//         </div>
//       </div>
//     </div>
//   )
// }

const Appointment = () => {
    const { docId } = useParams();
    const { doctors } = useContext(AppContext);
    const [docInfo, setDocInfo] = useState(null);

    useEffect(() => {
        const foundDocInfo = doctors.find(doc => doc._id === docId);
        setDocInfo(foundDocInfo || null);
    }, [doctors, docId]);

    // Vérifiez si docInfo est null avant de rendre les détails
    if (!docInfo) {
        return <p>Loading...</p>; // ou un message d'erreur si nécessaire
    }

    return (
        <div>
            {/* --------------------------- Doctor Detail */}
            <div className="">
                <div className="">
                    <img src={docInfo.image} alt={docInfo.name} /> {/* Affichage de l'image */}
                </div>
                <h1>{docInfo.name}</h1>
                <p>{docInfo.speciality}</p>
                <p>{docInfo.degree}</p>
                <p>{docInfo.experience} of experience</p>
                <p>{docInfo.fees} USD</p>
                <p>{docInfo.about}</p>
                <p>{docInfo.address.line1}, {docInfo.address.line2}</p>
            </div>
        </div>
    );
};

export default Appointment;
