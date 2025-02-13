import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  // console.log(docId);

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
    // console.log(docInfo);
  };

  const getAvailableSlots = async () => {
    setDocSlots([]);

    // obtenir la date actuelle
    const today = new Date();
  }

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) {
      getAvailableSlots();
    }
  }, [docInfo]);

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
  return (docInfo && (
      <div>
        {/* --------------------------- Doctor Detail */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="">
            <img src={docInfo.image} alt={docInfo.name} className="bg-primary w-full sm:max-w-72 rounded-lg" />
          </div>
          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            {/* ----------information du docteur : nom ,experience, nombre d'annee  */}
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo.name} <img className="w-5" src={assets.verified_icon} alt="" />
            </p>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600 ">
              <p>{docInfo.degree} - {docInfo.speciality}</p>
              <button className="py-0.5 px-2 border text-xs rounded-full cursor-pointer ">{docInfo.experience}</button>
            </div>

            {/* --------------- A propos du docteur */}
            <div className="">
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                A propos du docteur <img src={assets.info_icon} alt="" />
              </p>
              <p className="text-sm text-gray-500 max-[700px]: mt-1">{docInfo.about}</p>
            </div>
            <p className="text-gray-500 font-medium mt-4">
              Frais de rendez-vous: <span className="text-gray-600">{currencySymbol}{docInfo.fees}</span>
            </p>
            {/* <p>
              {docInfo.address.line1}, {docInfo.address.line2}
            </p> */}
          </div>
        </div>
      </div>
    )
  );
};

export default Appointment;
