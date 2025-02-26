// import React from 'react'

import { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Lontsi Parfait",
    image: assets.profile_pic,
    email: "perfect@gmail.com",
    phone: "650685644",
    address: {
      line1: "4eme rue, Richmod",
      line2: "Circle, Marche Depot, Bafoussam",
    },
    gender: "Male",
    dob: "2000-01-01",
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <img src={userData.image} alt="" className="w-36 rounded" />

      {isEdit ? (
        <input type="text" className="bg-slate-50 text-3xl font-medium max-w-60 mt-4" value={userData.name} onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className="font-medium text-3xl text-neutral-800 mt-4"> {userData.name} </p>
      )}

      <hr className="bg-zinc-400 h-[1px] border-none"/>
      <div className="">
        <p className="text-neutral-500 underline mt-3">CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium ">Email id:</p>
          <p className="text-blue-500 ">{userData.email}</p>
          <p className="font-medium ">Telephone</p>

          {isEdit ? (
            <input
              type="text"
              className="bg-gray-100 max-w-52"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p className="text-blue-400"> {userData.phone} </p>
          )}
          <p className="font-medium">Adress</p>
          {isEdit ? (
            <p>
              <input
                value={userData.address.line1}
                className="bg-gray-50"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
                type="text"
              />
              <br />
              <input
                className="bg-gray-50"
                value={userData.address.line2}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
                type="text"
              />
            </p>
          ) : (
            <p className="text-gray-500">
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>
      <div className="">
        <p className="text-neutral-500 underline mt-3">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Genre:</p>
          {
          isEdit 
          ? <select className="max-w-20 bg-gray-100" onChange={(e)=>setUserData(prev=> ({...prev, gender: e.target.value}))} value={userData.gender} name="" id="">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
           : (
            <p className="text-gray-400"> {userData.gender} </p>
          )}
          <p className="font-medium">Anniversaire:</p>
          {
           isEdit
           ? <input className="max-w-28 bg-gray-100" type="date" onChange={(e)=>setUserData(prev=> ({...prev, dob: e.target.value}))} value={userData.dob} /> 
           : <p className="text-gray-400"> {userData.dob} </p>
          }
        </div>
      </div>
      <div className="mt-10">
        {
        isEdit
        ? <button className="border border-[#5f6FFF] px-8 py-2 rounded-full hover:bg-[#5f6FFF] hover:text-white transition-all duration-300" onClick={()=>setIsEdit(false)}>Enreigistrez</button>
        : <button className="border border-[#5f6FFF] px-8 py-2 rounded-full hover:bg-[#5f6FFF] hover:text-white transition-all duration-300" onClick={()=>setIsEdit(true)}>Editer</button>
      }
      </div>
    </div>
  );
};

export default MyProfile;
