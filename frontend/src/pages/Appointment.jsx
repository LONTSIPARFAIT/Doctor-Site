import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
  // console.log(docId);

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
    // console.log(docInfo);
  };

  const getAvailableSlots = async () => {
    setDocSlots([]);

    // obtenir la date actuelle
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      // obtenir des données avec index
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      // réglage de l'heure de fin de la date avec index
      const endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      // réglage de l'heure
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      const timeSlots = [];

      while (currentDate < endTime) {
        const formattedDate = currentDate.toLocaleDateString([], {
          hour: "2-digit",
          minute: "2-digit",
        }); // formater la date

        // Ajouter un emplacement au tableau
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedDate,
        });

        // augmenter l'heure de 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      // Ajouter des créneaux horaires au tableau
      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) {
      getAvailableSlots();
    }
  }, [docInfo]);

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);

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
        {/* --------------------------- Docteur Détail */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="">
            <img
              src={docInfo.image}
              alt={docInfo.name}
              className="bg-primary w-full sm:max-w-72 rounded-lg"
            />
          </div>
          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            {/* ----------information du docteur : nom ,experience, nombre d'annee  */}
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo.name}{" "}
              <img className="w-5" src={assets.verified_icon} alt="" />
            </p>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600 ">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full cursor-pointer ">
                {docInfo.experience}
              </button>
            </div>

            {/* --------------- A propos du docteur */}
            <div className="">
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                A propos du docteur <img src={assets.info_icon} alt="" />
              </p>
              <p className="text-sm text-gray-500 max-[700px]: mt-1">
                {docInfo.about}
              </p>
            </div>
            <p className="text-gray-500 font-medium mt-4">
              Frais de rendez-vous:{" "}
              <span className="text-gray-600">
                {currencySymbol}
                {docInfo.fees}
              </span>
            </p>
            {/* <p>
              {docInfo.address.line1}, {docInfo.address.line2}
            </p> */}
          </div>
        </div>
        
        {/* --------------------------- Réservation de créneaux horaires */}
        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700 ">
          <p>Réservation de créneaux horaires</p>
          <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
            {
              docSlots.length && docSlots.map((item, index) =>(
                <div onClick={()=>setSlotIndex(index)} key={index} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border bborder-gray-200'}`}>
                  <p> { item[0] && daysOfWeek[item[0].datetime.getDay()] } </p>
                  <p> { item[0] && item[0].datetime.getDate() } </p>
                </div>
              ))
            }
          </div>
          <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
            { docSlots.length && docSlots[slotIndex].map((item, index) =>(
              <p onClick={()=>setSlotTime(item.time)} key={index} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'border border-gray-300 text-gray-400'}`}>
                {/* {item.time.toLowerCase() } */}
                {/* Extraire l'heure de la chaîne */}
                {item.time.split(" ")[1]}{" "}
                {/* Cela va récupérer la partie après l'espace */}
              </p>
            ))
            }
          </div>
          <button className="bg-primary text-white text-sm font-light py-3 px-14 rounded-full my-6 cursor-pointer">Prendre rendez-vous</button>
        </div>

        {/* Liste des médecins concernés */}
        <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
      </div>
    )
  );
};

export default Appointment;
