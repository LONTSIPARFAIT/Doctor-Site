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
        <img className="w-full md:max-w[360px]" src={assets.about_image} alt="" />
        <div>
          <p className="">Bienvenue chez Prescripto, votre partenaire de confiance pour gérer vos besoins en matière de soins de santé de manière pratique et efficace. Chez Prescripto, nous comprenons les défis auxquels les individus sont confrontés lorsqu&apos;il s&apos;agit de planifier des rendez-vous chez le médecin et de gérer leurs dossiers médicaux.</p>
          <p className="">Prescripto s&apos;engage à l&apos;excellence dans le domaine des technologies de la santé. Nous nous efforçons en permanence d&apos;améliorer notre plateforme en intégrant les dernières avancées pour améliorer l&apos;expérience utilisateur et offrir un service de qualité supérieure. Que vous preniez votre premier rendez-vous ou que vous gériez des soins continus, Prescripto est là pour vous accompagner à chaque étape du processus.</p>
          <b>Notre vision</b>
          <p className="">Chez Prescripto, notre vision est de créer une expérience de soins de santé fluide pour chaque utilisateur. Notre objectif est de combler le fossé entre les patients et les prestataires de soins de santé, en vous permettant d&apos;accéder plus facilement aux soins dont vous avez besoin, quand vous en avez besoin.</p>
        </div>
      </div>

    </div>
  );
};

export default About;
