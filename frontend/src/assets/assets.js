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
        about: "Le Dr Richard James, médecin généraliste, offre des soins complets axés sur la prévention et le diagnostic précis. Il adopte une approche holistique, promeut des habitudes de vie saines et établit une communication ouverte, améliorant ainsi la santé et le bien-être de ses patients.",
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
        about: "Le Dr Emily Larson, gynécologue, s'engage pour la santé des femmes en offrant des soins de haute qualité. Elle crée un environnement empathique et sûr, encourage la prévention par des examens réguliers et améliore le bien-être de ses patientes grâce à sa communication ouverte.",
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
        about: "Le Dr Sarah Patel, experte en dermatologie, offre des soins complets pour la peau, les cheveux et les ongles. Son approche personnalisée et son écoute attentive favorisent la prévention des maladies cutanées, tandis que ses conseils sur les soins et la protection solaire sont inestimables.",
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
        about: "Le Dr Christopher Lee, pédiatre dévoué, est passionné par la santé des enfants. Avec une approche chaleureuse, il crée un environnement rassurant pour les jeunes patients et leurs parents. Il met l'accent sur la prévention, offrant des conseils sur la nutrition et l'activité physique pour assurer un développement sain.",
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
        about: "Le Dr Jennifer Garcia, neurologue, excelle dans le diagnostic et le traitement des troubles du système nerveux. Grâce à une communication claire et attentive, elle aide ses patients à comprendre leur condition, tout en mettant l'accent sur une évaluation précoce et une prise en charge proactive.",
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
        about: "Le Dr Andrew Williams, gastro-entérologue, se concentre sur le diagnostic et le traitement des troubles digestifs. Il établit un environnement accueillant pour que ses patients expriment leurs préoccupations. Axé sur la prévention, il promeut des habitudes alimentaires saines et des examens réguliers.",
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
        about: "Le Dr Christopher Davis, médecin généraliste, se distingue par son engagement envers la santé globale de ses patients. Il adopte une approche centrée sur le patient, favorisant un environnement accueillant. Axé sur la prévention, il encourage des examens réguliers et des choix de vie sains pour améliorer le bien-être.",
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
        about: "Le Dr Timothy White, gynécologue, est reconnu pour son approche empathique envers la santé reproductive des femmes. Il propose des soins complets, des examens de routine aux traitements gynécologiques, dans un environnement accueillant, tout en privilégiant la prévention et le bien-être de ses patientes.",
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
        about: "Le Dr Ava Mitchell, dermatologue spécialisée dans les affections cutanées, se distingue par son approche personnalisée et attentive. Elle crée un climat de confiance pour que chaque patient puisse partager ses préoccupations, tout en mettant l’accent sur la prévention et l’éducation en matière de soins de la peau.",
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
        about: "Le Dr Jeffrey King, pédiatre, offre une approche chaleureuse et rassurante. Il privilégie la prévention par les vaccinations et une alimentation équilibrée, tout en communiquant efficacement avec les enfants et en répondant aux préoccupations des parents pour une enfance épanouie.",
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
        about: "Le Dr Zoe Kelly, neurologue, se distingue par son approche empathique. Elle écoute attentivement ses patients et explique clairement les troubles neurologiques et les traitements. Passionnée par l'éducation, elle vise à améliorer la qualité de vie de ses patients.",
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
        about: "Le Dr Patrick Harris, gastro-entérologue, offre une approche personnalisée et attentive. Il souligne l'importance de la prévention et de l'éducation sur la santé digestive. Son expertise couvre divers troubles, ce qui améliore la qualité de vie de ses patients.",
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
        about: "Le Dr Chloe Evans, médecin généraliste, se consacre à la santé et au bien-être de ses patients. Elle adopte une approche holistique, établissant des relations de confiance et offrant des conseils sur les modes de vie sains pour améliorer leur qualité de vie.",
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
        about: "Le Dr Ryan Martinez, gynécologue, se consacre à la santé reproductive des femmes. Avec une approche empathique, il crée un environnement accueillant. Il met l'accent sur la prévention et offre des conseils, améliorant ainsi le bien-être de ses patientes.",
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
        about: "Le Dr Amelia Hill, dermatologue, se consacre à la santé de la peau. Elle adopte une approche attentive et personnalisée, offrant des traitements adaptés aux besoins de chaque patient. Son expertise et sa passion pour la dermatologie favorisent la confiance et le bien-être cutané.",
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
]