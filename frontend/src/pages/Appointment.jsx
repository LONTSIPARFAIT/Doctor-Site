import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  // console.log(docId);

  const [docInfo, setDocInfo] = useState(null);

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
    console.log(docInfo);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  // const Appointment = () => {
  //     const { docId } = useParams();
  //     const { doctors } = useContext(AppContext);
  //     const [docInfo, setDocInfo] = useState(null);

  //     useEffect(() => {
  //         const foundDocInfo = doctors.find(doc => doc._id === docId);
  //         setDocInfo(foundDocInfo || null);
  //     }, [doctors, docId]);

  //     // Vérifiez si docInfo est null avant de rendre les détails
  //     if (!docInfo) {
  //         return <p>Loading...</p>; // ou un message d'erreur si nécessaire
  //     }

  // return  (
  return (
    docInfo && (
      <div>
        {/* --------------------------- Doctor Detail */}
        <div className="">
          <div className="">
            <img src={docInfo.image} alt={docInfo.name} />{" "}
            {/* Affichage de l'image */}
          </div>
          <div className="">

            {/* ----------information du docteur : nom ,experience, nombre d'annee  */}
            <p>
              {docInfo.name} <img src={assets.verified_icon} alt="" />
            </p>
            <div className="">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button>{docInfo.experience}</button>
            </div>

            {/* --------------- A propos du docteur */}
            <div className="">
              <p>A propos du docteur <img src={assets.info_icon} alt="" /></p>
              <p>{docInfo.about}</p>
            </div>
            <p>{docInfo.fees} USD</p>
            <p>
              {docInfo.address.line1}, {docInfo.address.line2}
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default Appointment;
