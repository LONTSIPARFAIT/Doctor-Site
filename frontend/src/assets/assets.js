import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Richard James',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: "Le Dr Richard James s'engage fermement à fournir des soins médicaux complets, en mettant l'accent sur la prévention, le diagnostic précis et un accompagnement personnalisé. En tant que médecin généraliste, il adopte une approche holistique, tenant compte des besoins physiques et émotionnels de ses patients. Le Dr James promeut des habitudes de vie saines et encourage des examens réguliers pour prévenir les maladies. Sa capacité à établir une communication ouverte permet à ses patients de se sentir en confiance et compris. Par son expertise et son dévouement, il s'efforce d'améliorer la santé et le bien-être de chacun.",
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Emily Larson',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: "Le Dr Emily Larson se distingue par son engagement envers la santé des femmes, en offrant des soins gynécologiques de haute qualité et une attention particulière à chaque patiente. En tant que gynécologue, elle adopte une approche empathique, créant un environnement sûr et accueillant pour discuter des préoccupations de santé. Le Dr Larson met l'accent sur la prévention des maladies, encourageant des examens réguliers et des pratiques de santé proactives. Sa compétence dans le diagnostic précoce et le traitement des affections féminines est remarquable. Grâce à sa communication ouverte et à son soutien, elle s'efforce d'améliorer la santé et le bien-être de ses patientes.",
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Sarah Patel',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: "Le Dr Sarah Patel se distingue par son expertise en dermatologie, offrant des soins complets pour la santé de la peau, des cheveux et des ongles. En tant que dermatologue, elle adopte une approche personnalisée, écoutant attentivement les préoccupations de chaque patient. Le Dr Patel met l'accent sur la prévention des maladies cutanées, en conseillant sur des routines de soins adaptées et l'importance de la protection solaire. Sa compétence dans le diagnostic et le traitement des affections dermatologiques, qu'elles soient courantes ou complexes, est largement reconnue. Par sa communication claire et son soutien, elle s'efforce d'améliorer l'estime de soi et le bien-être de ses patients.",
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Christopher Lee',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: "Le Dr Christopher Lee est un pédiatre dévoué, passionné par la santé et le bien-être des enfants. Il adopte une approche chaleureuse et rassurante, créant un environnement où les jeunes patients et leurs parents se sentent à l'aise. En tant que spécialiste des soins pédiatriques, le Dr Lee met l'accent sur la prévention et le développement sain, offrant des conseils sur la nutrition, l'activité physique et les examens réguliers. Sa capacité à établir une relation de confiance avec les enfants permet un diagnostic et un traitement efficaces. Grâce à son engagement envers l'éducation des parents et le suivi attentif, il s'efforce d'assurer un avenir sain pour chaque enfant.",
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Jennifer Garcia',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: "Le Dr Jennifer Garcia est neurologue, spécialisée dans le diagnostic et le traitement des troubles du système nerveux. Avec une approche attentive et compréhensive, elle s'efforce d'établir une communication claire avec ses patients, leur permettant de comprendre leur condition et les options de traitement disponibles. Le Dr Garcia met l'accent sur l'importance d'une évaluation précoce et d'une prise en charge proactive pour des affections telles que les migraines, l'épilepsie et les troubles neurodégénératifs. Grâce à son expertise et à sa passion pour la recherche, elle reste à la pointe des avancées en neurologie. Son engagement envers le bien-être de ses patients se traduit par un suivi personnalisé et un soutien constant dans leur parcours de santé.",
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Andrew Williams',
        image: doc6,
        speciality: 'Gastroenterologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: "Le Dr Andrew Williams est gastro-entérologue, spécialisé dans le diagnostic et le traitement des troubles digestifs. Avec une approche centrée sur le patient, il s'efforce de créer un environnement où ses patients se sentent à l'aise pour discuter de leurs préoccupations. Le Dr Williams met l'accent sur l'importance de la prévention, en encourageant des habitudes alimentaires saines et des examens réguliers. Son expertise s'étend à des conditions telles que le reflux gastro-œsophagien, le syndrome de l'intestin irritable et les maladies inflammatoires de l'intestin. Grâce à ses connaissances approfondies et à sa capacité à établir une relation de confiance, il est déterminé à améliorer la santé digestive de chacun de ses patients.",
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Christopher Davis',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: "Le Dr Christopher Davis se distingue par son engagement envers la santé globale de ses patients en tant que médecin généraliste. Il adopte une approche centrée sur le patient, créant un environnement accueillant où chacun se sent libre de partager ses préoccupations de santé. Le Dr Davis met l'accent sur la prévention, encourageant des examens réguliers et des choix de vie sains pour éviter les maladies. Sa compétence en matière de diagnostic et de traitement des affections courantes est remarquable. Grâce à sa communication claire et à son soutien constant, il s'efforce d’améliorer le bien-être et la qualité de vie de chacun de ses patients, en les accompagnant à chaque étape de leur parcours de santé.",
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Timothy White',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Ava Mitchell',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: "Le Dr Ava Mitchell est dermatologue, spécialisée dans le diagnostic et le traitement des affections cutanées. Elle se distingue par son approche attentive et personnalisée, veillant à ce que chaque patient se sente en confiance pour discuter de ses préoccupations. Le Dr Mitchell met l'accent sur la prévention et l'éducation, offrant des conseils sur les soins de la peau, la protection solaire et les habitudes de vie saines. Sa compétence couvre une large gamme de conditions, de l'acné et de l'eczéma aux maladies cutanées plus complexes. Passionnée par son domaine, elle s'efforce d'améliorer la santé et l'apparence de la peau de ses patients, tout en renforçant leur confiance en eux.",
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Jeffrey King',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: "Le Dr Jeffrey King est pédiatre, dédié à la santé et au bien-être des enfants de tous âges. Il adopte une approche chaleureuse et amicale, créant un environnement rassurant pour les jeunes patients et leurs familles. Le Dr King met l'accent sur la prévention, en encourageant les vaccinations, les bilans de santé réguliers et une alimentation équilibrée. Sa passion pour la pédiatrie se manifeste dans sa capacité à communiquer efficacement avec les enfants, leur permettant de se sentir à l'aise durant les consultations. Il est également attentif aux préoccupations des parents, leur offrant des conseils sur le développement, le comportement et la santé globale de leurs enfants. Grâce à son expertise et à son engagement, le Dr King s'efforce de promouvoir une enfance saine et épanouie.",
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Zoe Kelly',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: "Le Dr Zoe Kelly est neurologue, spécialisée dans le diagnostic et le traitement des troubles du système nerveux. Elle se distingue par son approche empathique et approfondie, prenant le temps d'écouter ses patients et d'évaluer leurs symptômes de manière exhaustive. Le Dr Kelly est passionnée par l'éducation et explique clairement les conditions neurologiques, ainsi que les options de traitement disponibles. Sa compétence couvre un large éventail de troubles, allant des migraines aux maladies neurodégénératives. En mettant l'accent sur la recherche de solutions personnalisées, elle s'efforce d'améliorer la qualité de vie de ses patients, tout en les soutenant tout au long de leur parcours de santé neurologique.",
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Patrick Harris',
        image: doc12,
        speciality: 'Gastroenterologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: "Le Dr Patrick Harris est gastro-entérologue, spécialisé dans le diagnostic et le traitement des troubles du système digestif. Il se distingue par son approche attentive et personnalisée, offrant à ses patients un environnement accueillant pour discuter de leurs préoccupations gastro-intestinales. Le Dr Harris met l'accent sur la prévention et l'éducation, expliquant l'importance d'une alimentation équilibrée et de dépistages réguliers pour maintenir la santé digestive. Sa compétence dans le traitement des maladies telles que le reflux gastro-œsophagien, les maladies inflammatoires de l'intestin et les troubles hépatiques est remarquable. Grâce à sa communication ouverte et à son soutien constant, il s'efforce d'améliorer la santé digestive de ses patients et leur qualité de vie globale.",
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Chloe Evans',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: "Le Dr Chloe Evans est médecin généraliste, passionnée par la promotion de la santé et le bien-être de ses patients. Elle adopte une approche holistique, prenant en compte les besoins physiques, émotionnels et sociaux de chaque individu. Le Dr Evans met un point d'honneur à établir des relations de confiance avec ses patients, créant un espace où ils se sentent à l'aise pour discuter de leurs préoccupations. Son engagement envers la prévention des maladies se traduit par des conseils sur les modes de vie sains et l'importance des bilans de santé réguliers. Grâce à ses compétences cliniques et à sa communication empathique, elle s'efforce d'améliorer la qualité de vie de ses patients et de les accompagner dans leur parcours de santé.",
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Ryan Martinez',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: "Le Dr Ryan Martinez est gynécologue, reconnu pour son engagement envers la santé reproductive des femmes. Avec une approche empathique et respectueuse, il crée un environnement sûr et accueillant où ses patientes peuvent discuter ouvertement de leurs préoccupations. Le Dr Martinez privilégie la prévention, en recommandant des examens réguliers et en fournissant des conseils sur la santé reproductive et les pratiques de vie saine. Sa compétence dans le diagnostic et le traitement des affections gynécologiques est exceptionnelle. Grâce à sa communication claire et à son soutien constant, il s'efforce d'améliorer la santé et le bien-être de ses patientes, en les accompagnant tout au long de leur parcours de santé.",
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Amelia Hill',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: "Le Dr Christopher Davis se distingue par son engagement envers la santé globale de ses patients en tant que médecin généraliste. Il adopte une approche centrée sur le patient, créant un environnement accueillant où chacun se sent libre de partager ses préoccupations de santé. Le Dr Davis met l'accent sur la prévention, encourageant des examens réguliers et des choix de vie sains pour éviter les maladies. Sa compétence en matière de diagnostic et de traitement des affections courantes est remarquable. Grâce à sa communication claire et à son soutien constant, il s'efforce d’améliorer le bien-être et la qualité de vie de chacun de ses patients, en les accompagnant à chaque étape de leur parcours de santé.",
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
]