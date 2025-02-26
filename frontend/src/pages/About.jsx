// import React from 'react'

import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          À PROPOS <span className="text-gray-700 font-medium">DE NOUS</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img className="w-full md:max-w-[360px]" src={assets.about_image} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p className="">Bienvenue chez Prescripto, votre partenaire de confiance pour gérer vos besoins en matière de soins de santé de manière pratique et efficace. Chez Prescripto, nous comprenons les défis auxquels les individus sont confrontés lorsqu&apos;il s&apos;agit de planifier des rendez-vous chez le médecin et de gérer leurs dossiers médicaux.</p>
          <p className="">Prescripto s&apos;engage à l&apos;excellence dans le domaine des technologies de la santé. Nous nous efforçons en permanence d&apos;améliorer notre plateforme en intégrant les dernières avancées pour améliorer l&apos;expérience utilisateur et offrir un service de qualité supérieure. Que vous preniez votre premier rendez-vous ou que vous gériez des soins continus, Prescripto est là pour vous accompagner à chaque étape du processus.</p>
          <b className="text-gray-800">Notre vision</b>
          <p className="">Chez Prescripto, notre vision est de créer une expérience de soins de santé fluide pour chaque utilisateur. Notre objectif est de combler le fossé entre les patients et les prestataires de soins de santé, en vous permettant d&apos;accéder plus facilement aux soins dont vous avez besoin, quand vous en avez besoin.</p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>WHY <span className="text-gray-700 font-semibold">CHOOSE US</span></p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#5f6FFF] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>EFFICACITÉ:</b>
          <p>Planification de rendez-vous simplifiée qui s&apos;adapte à votre style de vie chargé.</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#5f6FFF] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>COMMODITÉ:</b>
          <p>Accédez à un réseau de professionnels de la santé de confiance dans votre région.</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#5f6FFF] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>PERSONNALISATION:</b>
          <p>Des recommandations et des rappels personnalisés pour vous aider à rester au top de votre santé.</p>
        </div>

      </div>

    </div>
  );
};

export default About;
