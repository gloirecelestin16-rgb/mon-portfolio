import { useState, useEffect, useRef, type ReactNode } from "react";
import {
  Home,
  User,
  GraduationCap,
  Code2,
  FolderGit2,
  Mail,
  Menu,
  X,
  Sun,
  Moon,
  Globe,
  Phone,
  MapPin,
  Briefcase,
  Award,
  Download,
} from "lucide-react";
import Particles from "./Particules";

type Lang = "en" | "fr";

const EMAIL = "gloirecelestin16@gmail.com";
const PHONE = "+242 06 828 82 38";
const PHONE_LINK = "+242068288238";

const text = {
  en: {
    nav: {
      accueil: "Home",
      apropos: "About",
      formations: "Education",
      experience: "Experience",
      competences: "Skills",
      projets: "Projects",
      certificats: "Certificates",
      contact: "Contact",
    },

    contactBtn: "Contact me",
    cvBtn: "Download CV",

    hello: "Hello, I'm",
    name: "Celestin Gloire Lédilem MOUYABI",
    role: "Electrical Engineering Student | Automation & Instrumentation",
    desc: "Passionate about technology, industrial systems, and innovation. Driven to develop my skills, explore new opportunities, and contribute to meaningful projects.",
    welcome: "Welcome to my professional portfolio.",

    about: {
      title: "About",
      role: "Maintenance Technician",

      p1: "I put my skills in electrical engineering, automation, instrumentation, hydraulics, pneumatics and industrial maintenance (CMMS) at the service of equipment reliability, availability and performance: planning and carrying out preventive and corrective maintenance, tracking MTTR/MTBF indicators and driving improvement actions.",

      p2: "Holder of TotalEnergies modules 7 and 8, I am aware of HSE requirements and the risks of industrial activities (H₂S, ATEX), which I integrate into my maintenance work.",

      p3: "I am looking for an internship in the Oil & Gas industry, to be carried out in December.",

      softTitle: "Soft skills",

      soft: [
        "Stress and time management",
        "Adaptability, flexibility and good communication",
        "Punctuality and diligence",
        "Innovation and continuous improvement",
      ],

      interestsTitle: "Interests",

      interests: [
        "Football and Basketball: team spirit, strategy and leadership",
        "Volunteering: community involvement in clubs and associations",
      ],
    },

    edu: {
      title: "Education",

      studies: [
        {
          title: "Bachelor's degree in Automation and Instrumentation",
          place: "Institut International 2i, Pointe-Noire",
          date: "2024 – 2026 · Expected graduation: December 2026",
          logo: "2i.jpg",
          initials: "2i",
        },
        {
          title: "Scientific Baccalaureate (Series D)",
          place: "Lycée de Madingou, Madingou",
          date: "2023",
          logo: "madingou.jpg",
          initials: "LM",
        },
      ],
    },

    exp: {
      title: "Experience",

      jobs: [
        {
          title: "Training Manager",
          company: "BiviTech, Pointe-Noire · Part-time · On site",
          date: "March 2026 – present",
          logo: "Bivitech.jpg",
          initials: "BT",

          points: [
            "Designing and delivering training programs for young people, members and partners to strengthen their skills in digital, technology and innovation.",
            "Identifying skills needs and designing practical, tailored training modules.",
            "Organizing and coordinating workshops and seminars.",
            "Promoting innovation and digital entrepreneurship.",
            "Assessing the impact of trainings and driving continuous improvement.",
            "Skills: training engineering, project management, training facilitation, innovation and digital transformation.",
          ],
        },

        {
          title: "ISIC Ambassador",
          company:
            "International Student Identity Card, Republic of the Congo · Full-time · On site",
          date: "May 2025 – present",
          logo: "ISIC.png",
          initials: "ISIC",

          points: [
            "Promoting the ISIC card to students and institutions, and raising awareness of student benefits and international opportunities.",
            "Developing and managing strategic partnerships (transport, services, local businesses).",
            "Organizing and taking part in communication actions and events, and representing the ISIC brand locally.",
            "Skills: negotiation and partnership development, field communication and marketing, leadership and initiative management, professional networking, staff and resource management, strategic communication.",
          ],
        },

        {
          title: "Industrial electricity (practical internship)",
          company: "Vocational Training Center in Electricity (CFPE)",
          date: "July – August 2026",
          logo: "CFPE.jpg",
          initials: "CFPE",

          points: [
            "Control of synchronous machines and TOSHIBA variable frequency drives.",
          ],
        },

        {
          title: "Hands-on workshop (practical internship)",
          company: "CEFA Automobile, Pointe-Noire",
          date: "February 7, 2026 – March 17, 2026",
          logo: "CEFA.png",
          initials: "CEFA",

          points: [
            "Preventive and corrective maintenance and diagnostics of advanced embedded electronic systems, ensuring vehicle reliability and performance.",
          ],
        },

        {
          title: "Smart systems technician (intern)",
          company:
            "National Agency for the Promotion of Research and Innovation Results (ANVRI), Brazzaville",
          date: "August 28, 2024 – February 6, 2025",
          logo: "ANVRI.jpg",
          initials: "AN",

          points: [
            "Designed an automated smart greenhouse system based on Arduino, with 7 sensors for irrigation, ventilation, data acquisition and remote control.",
            "Implemented and tuned PID loops, with maintenance of instruments and actuators, improving thermal regulation and system availability.",
          ],
        },
      ],
    },

    skills: {
      title: "Skills",

      groups: [
        {
          title: "Automation",
          items: [
            "Allen-Bradley (Studio 5000)",
            "Siemens (TIA Portal)",
            "SCADA",
            "LADDER",
            "STL",
          ],
        },

        {
          title: "Instrumentation",
          items: [
            "Sensors",
            "Transmitters",
            "Calibration",
            "Verification",
          ],
        },

        {
          title: "Control systems",
          items: [
            "Control valves",
            "Positioners",
            "Pneumatic actuators",
            "Electric actuators",
          ],
        },

        {
          title: "Electrical machines",
          items: [
            "Synchronous machines",
            "Variable frequency drives",
          ],
        },

        {
          title: "Maintenance",
          items: [
            "Preventive and corrective",
            "MTBF / MTTR",
            "OEE",
            "FMEA",
            "CMMS",
          ],
        },

        {
          title: "Diagrams and design",
          items: [
            "P&ID",
            "Electrical diagrams",
            "SEE Electrical",
            "EPLAN",
            "AVEVA",
          ],
        },

        {
          title: "Programming",
          items: ["C", "C++", "C#", "Python", "React", "HTML"],
        },

        {
          title: "Engineering software",
          items: [
            "MATLAB",
            "Automation Studio",
            "CREO Parametric",
            "GANTT Project",
            "Microsoft Office",
            "Visual Studio",
          ],
        },

        {
          title: "Process safety",
          items: ["HSE", "H₂S", "ATEX"],
        },
      ],
    },

    projects: {
      title: "Projects",
      pdfBtn: "View PDF",

      items: [
        {
          title: "Automated smart greenhouse",
          desc: "Arduino-based system with 7 sensors: irrigation, ventilation, data acquisition, remote control and thermal regulation through PID loops.",
          tags: ["Arduino", "PID", "Sensors"],
          link: "",
        },

        {
          title: "MaintiTrack: CMMS",
          desc: "Computerized maintenance management system (CMMS) designed for mobile and desktop, built with React.",
          tags: ["React", "CMMS", "UX/UI"],
          link: "",
        },

        {
          title: "Automated robotic arm",
          desc: "Construction of an automated robotic arm, the subject of my final-year Bachelor's thesis.",
          tags: ["Automation", "Robotics"],
          link: "",
        },

        {
          title: "Control Valve Sizing",
          desc: "Engineering project focused on the sizing and selection of a control valve according to process operating conditions and instrumentation requirements.",
          tags: ["Instrumentation", "Control Valve", "Dimensioning"],
          link: "projets/dimensionnement-vanne-regulation.pdf",
        },

        {
          title: "Reactive Power Compensation",
          desc: "Electrical engineering project focused on compensating reactive energy in an electrical installation in order to improve the power factor and optimize electrical energy consumption.",
          tags: ["Electrical Engineering", "Power Factor", "Compensation"],
          link: "projets/compensation-energie-reactive.pdf",
        },
      ],
    },

    certs: {
      title: "Certificates",
      btn: "View certificate",
      idLabel: "Credential ID",
      openNew: "Open in a tab",
      close: "Close",

      items: [
        {
          title: "Industrial Oil & Gas Operator",
          company: "TotalEnergies",
          date: "Issued March 2026",
          desc: "Skills: process automation, oil and gas",
          id: "",
          link: "certificats/MOOC.pdf",
          logo: "TEPC.jpg",
          initials: "TE",
        },

        {
          title: "Gmail",
          company: "United Latino Students Association",
          date: "Issued November 2025",
          desc: "",
          id: "2OVD7DZUDQ1D",
          link: "https://www.coursera.org/account/accomplishments/verify/2OVD7DZUDQ1D",
          logo: "MTN.jpg",
          initials: "ULSA",
        },

        {
          title: "Microprocessor Systems and Embedded Technologies",
          company: "STEMpower Inc",
          date: "Issued April 2025",
          desc: "",
          id: "",
          link: "",
          logo: "STEM POWER.png",
          initials: "SP",
        },

        {
          title: "Workforce and Resource Management",
          company: "YALI Network Nigeria",
          date: "Issued June 2025",
          desc: "",
          id: "",
          link: "certificats/YALIII.jpg",
          logo: "YALII.png",
          initials: "YALI",
        },

        {
          title: "Module 7",
          company: "TotalEnergies",
          date: "",
          desc: "",
          id: "",
          link: "certificats/module7.pdf",
          logo: "TEPC.jpg",
          initials: "TE",
        },

        {
          title: "Module 8",
          company: "TotalEnergies",
          date: "Issued November 2025 · Expires November 2028",
          desc: "",
          id: "",
          link: "certificats/module8.pdf",
          logo: "TEPC.jpg",
          initials: "TE",
        },

        {
          title:
            "IoT (Internet of Things), Wireless and Cloud Computing, Emerging Technologies",
          company: "MTN Congo Foundation",
          date: "Issued May 2025",
          desc: "Skills: object-oriented programming languages, computer technology",
          id: "TE1G93UYBYWS",
          link: "https://www.coursera.org/account/accomplishments/verify/TE1G93UYBYWS",
          logo: "MTN.jpg",
          initials: "MTN",
        },
      ],
    },

    contact: {
      title: "Contact",
      intro:
        "An internship opportunity or a question? Write to me, I'll be happy to reply.",
      email: "Email",
      phone: "Phone",
      location: "Location",
      locationValue: "Pointe-Noire, Republic of the Congo",
      send: "Send an email",
    },

    gallery: {
      title: "Gallery",

      items: [
        "img1.jpg",
        "img2.jpg",
        "img3.jpeg",
        "img4.jpeg",
        "img5.jpeg",
        "img6.jpg",
        "img7.jpg",
        "imag8.jpg",
        "img9.jpg",
        "imag10.jpg",
      ],
    },

    footer: "All rights reserved.",
  },

  fr: {
    nav: {
      accueil: "Accueil",
      apropos: "À propos",
      formations: "Formations",
      experience: "Expérience",
      competences: "Compétences",
      projets: "Projets",
      certificats: "Certificats",
      contact: "Contact",
    },

    contactBtn: "Me contacter",
    cvBtn: "Télécharger le CV",

    hello: "Bonjour, je suis",
    name: "Celestin Gloire Lédilem MOUYABI",
    role: "Étudiant en Génie Électrique | Automatisme & Instrumentation",
    desc: "Passionné par la technologie, les systèmes industriels et l'innovation. Motivé à développer mes compétences, à découvrir de nouvelles opportunités et à contribuer à des projets significatifs.",
    welcome: "Bienvenue sur mon portfolio professionnel.",

    about: {
      title: "À propos",
      role: "Technicien de maintenance",

      p1: "Je mets mes compétences en électrotechnique, automatisme, instrumentation, hydraulique, pneumatique et maintenance industrielle (GMAO) au service de la fiabilité, de la disponibilité et de la performance des équipements : planification et exécution de la maintenance préventive et corrective, suivi des indicateurs MTTR/MTBF et actions d'amélioration.",

      p2: "Titulaire des modules 7 et 8 de TotalEnergies, je suis sensibilisé aux exigences HSE et aux risques liés aux activités industrielles (H₂S, ATEX), que j'intègre dans l'exécution des travaux de maintenance.",

      p3: "Je recherche un stage dans l'industrie Oil & Gas, à effectuer en décembre.",

      softTitle: "Soft skills",

      soft: [
        "Gestion du stress et du temps",
        "Adaptabilité, flexibilité et bonne communication",
        "Ponctualité et assiduité",
        "Innovation et amélioration continue",
      ],

      interestsTitle: "Centres d'intérêt",

      interests: [
        "Football et Basketball : esprit d'équipe, stratégie et leadership",
        "Bénévolat : engagement communautaire au sein de clubs et associations",
      ],
    },

    edu: {
      title: "Formations",

      studies: [
        {
          title: "Licence en Automatisme et Instrumentation",
          place: "Institut International 2i, Pointe-Noire",
          date: "2024 – 2026 · Diplôme prévu : décembre 2026",
          logo: "2i.jpg",
          initials: "2i",
        },

        {
          title: "Baccalauréat scientifique (Série D)",
          place: "Lycée de Madingou, Madingou",
          date: "2023",
          logo: "madingou.jpg",
          initials: "LM",
        },
      ],
    },

    exp: {
      title: "Expérience",

      jobs: [
        {
          title: "Responsable formation",
          company: "BiviTech, Pointe-Noire · Temps partiel · Sur site",
          date: "Mars 2026 – aujourd'hui",
          logo: "Bivitech.jpg",
          initials: "BT",

          points: [
            "Conception et mise en œuvre de programmes de formation destinés aux jeunes, aux membres et aux partenaires, pour renforcer leurs compétences en numérique, technologies et innovation.",
            "Identification des besoins en compétences et conception de modules de formation pratiques et adaptés.",
            "Organisation et coordination d'ateliers et de séminaires.",
            "Promotion de l'innovation et de l'entrepreneuriat numérique.",
            "Évaluation de l'impact des formations et amélioration continue.",
            "Compétences : ingénierie de formation, gestion de projets, animation de formations, innovation et transformation digitale.",
          ],
        },

        {
          title: "Ambassadeur ISIC",
          company:
            "International Student Identity Card, République du Congo · Temps plein · Sur site",
          date: "Mai 2025 – aujourd'hui",
          logo: "ISIC.png",
          initials: "ISIC",

          points: [
            "Promotion de la carte ISIC auprès des étudiants et des institutions, et sensibilisation aux avantages étudiants et aux opportunités internationales.",
            "Développement et gestion de partenariats stratégiques (transport, services, entreprises locales).",
            "Organisation et participation à des actions de communication et d'événements, et représentation de la marque ISIC au niveau local.",
            "Compétences : négociation et développement de partenariats, communication et marketing terrain, leadership et gestion d'initiatives, réseautage professionnel, gestion des effectifs et des ressources, communication stratégique.",
          ],
        },

        {
          title: "Électricité industrielle (stage pratique)",
          company: "Centre de Formation Professionnelle en Électricité (CFPE)",
          date: "Juillet – août 2026",
          logo: "CFPE.jpg",
          initials: "CFPE",

          points: [
            "Commande de machines synchrones et de variateurs de fréquence TOSHIBA.",
          ],
        },

        {
          title: "Atelier pratique (stage pratique)",
          company: "CEFA Automobile, Pointe-Noire",
          date: "7 février 2026 – 17 mars 2026",
          logo: "CEFA.png",
          initials: "CEFA",

          points: [
            "Maintenance préventive et corrective et diagnostic des systèmes électroniques embarqués avancés, garantissant fiabilité et performance des véhicules.",
          ],
        },

        {
          title: "Technicien en systèmes intelligents (stagiaire)",
          company:
            "Agence Nationale de Valorisation des Résultats de la Recherche et de l’Innovation (ANVRI), Brazzaville",
          date: "28 août 2024 – 6 février 2025",
          logo: "ANVRI.jpg",
          initials: "AN",

          points: [
            "Conception d'un système automatisé de serre intelligente basé sur Arduino, intégrant 7 capteurs pour l'irrigation, la ventilation, l'acquisition de données et le contrôle à distance.",
            "Mise en œuvre et optimisation de boucles PID, avec maintenance des instruments et actionneurs, améliorant la régulation thermique et la disponibilité du système.",
          ],
        },
      ],
    },

    skills: {
      title: "Compétences",

      groups: [
        {
          title: "Automatisme",
          items: [
            "Allen-Bradley (Studio 5000)",
            "Siemens (TIA Portal)",
            "SCADA",
            "LADDER",
            "LIST",
          ],
        },

        {
          title: "Instrumentation",
          items: [
            "Capteurs",
            "Transmetteurs",
            "Calibration",
            "Vérification",
          ],
        },

        {
          title: "Systèmes de contrôle",
          items: [
            "Vannes de régulation",
            "Positionneurs",
            "Actionneurs pneumatiques",
            "Actionneurs électriques",
          ],
        },

        {
          title: "Machines électriques",
          items: [
            "Machines synchrones",
            "Variateurs de fréquence",
          ],
        },

        {
          title: "Maintenance",
          items: [
            "Préventive et corrective",
            "MTBF / MTTR",
            "TRS",
            "AMDEC",
            "GMAO",
          ],
        },

        {
          title: "Schémas et conception",
          items: [
            "P&ID",
            "Schémas électriques",
            "SEE Electrical",
            "EPLAN",
            "AVEVA",
          ],
        },

        {
          title: "Programmation",
          items: ["C", "C++", "C#", "Python", "React", "HTML"],
        },

        {
          title: "Logiciels d'ingénierie",
          items: [
            "MATLAB",
            "Automation Studio",
            "CREO Parametric",
            "GANTT Project",
            "Microsoft Office",
            "Visual Studio",
          ],
        },

        {
          title: "Sécurité des procédés",
          items: ["HSE", "H₂S", "ATEX"],
        },
      ],
    },

    projects: {
      title: "Projets",
      pdfBtn: "Voir le PDF",

      items: [
        {
          title: "Serre intelligente automatisée",
          desc: "Système basé sur Arduino avec 7 capteurs : irrigation, ventilation, acquisition de données, contrôle à distance et régulation thermique par boucles PID.",
          tags: ["Arduino", "PID", "Capteurs"],
          link: "",
        },

        {
          title: "MaintiTrack : GMAO",
          desc: "Application de gestion de maintenance assistée par ordinateur (GMAO), pensée pour mobile et desktop, développée avec React.",
          tags: ["React", "GMAO", "UX/UI"],
          link: "",
        },

        {
          title: "Bras robotique automatisé",
          desc: "Réalisation d'un bras robotique automatisé, sujet de mon mémoire de fin d'études de Licence.",
          tags: ["Automatisme", "Robotique"],
          link: "",
        },

        {
          title: "Dimensionnement d'une vanne de régulation",
          desc: "Étude de dimensionnement et de sélection d'une vanne de régulation en fonction des conditions de fonctionnement du procédé et des exigences d'instrumentation.",
          tags: ["Instrumentation", "Vanne de régulation", "Dimensionnement"],
          link: "projets/dimensionnement-vanne-regulation.pdf",
        },

        {
          title: "Compensation de l'énergie réactive",
          desc: "Étude électrique portant sur la compensation de l'énergie réactive afin d'améliorer le facteur de puissance et d'optimiser la consommation d'énergie électrique.",
          tags: ["Électrotechnique", "Facteur de puissance", "Compensation"],
          link: "projets/compensation-energie-reactive.pdf",
        },
      ],
    },

    certs: {
      title: "Certificats",
      btn: "Voir le certificat",
      idLabel: "Identifiant",
      openNew: "Ouvrir dans un onglet",
      close: "Fermer",

      items: [
        {
          title: "Opérateur Industrie Pétrolière",
          company: "TotalEnergies",
          date: "Émise en mars 2026",
          desc: "Compétences : automatisation des processus, pétrole et gaz",
          id: "",
          link: "certificats/MOOC.pdf",
          logo: "TEPC.jpg",
          initials: "TE",
        },

        {
          title: "Gmail",
          company: "United Latino Students Association",
          date: "Émise en novembre 2025",
          desc: "",
          id: "2OVD7DZUDQ1D",
          link: "https://www.coursera.org/account/accomplishments/verify/2OVD7DZUDQ1D",
          logo: "MTN.jpg",
          initials: "ULSA",
        },

        {
          title: "Systèmes à microprocesseur et technologies embarquées",
          company: "STEMpower Inc",
          date: "Émise en avril 2025",
          desc: "",
          id: "",
          link: "",
          logo: "STEM POWER.png",
          initials: "SP",
        },

        {
          title: "Management des effectifs et des ressources",
          company: "YALI Network Nigeria",
          date: "Émise en juin 2025",
          desc: "",
          id: "",
          link: "certificats/YALIII.jpg",
          logo: "YALII.png",
          initials: "YALI",
        },

        {
          title: "Module 7",
          company: "TotalEnergies",
          date: "",
          desc: "",
          id: "",
          link: "certificats/module7.pdf",
          logo: "TEPC.jpg",
          initials: "TE",
        },

        {
          title: "Module 8",
          company: "TotalEnergies",
          date: "Émise en novembre 2025 · Expire en novembre 2028",
          desc: "",
          id: "",
          link: "certificats/module8.pdf",
          logo: "TEPC.jpg",
          initials: "TE",
        },

        {
          title:
            "IoT (Internet des objets), informatique sans fil et en nuage, technologies émergentes",
          company: "Fondation MTN Congo",
          date: "Émise en mai 2025",
          desc: "Compétences : langages de programmation orientés objets, technologie informatique",
          id: "TE1G93UYBYWS",
          link: "https://www.coursera.org/account/accomplishments/verify/TE1G93UYBYWS",
          logo: "MTN.jpg",
          initials: "MTN",
        },
      ],
    },

    contact: {
      title: "Contact",
      intro:
        "Une opportunité de stage ou une question ? Écrivez-moi, je réponds avec plaisir.",
      email: "Email",
      phone: "Téléphone",
      location: "Localisation",
      locationValue: "Pointe-Noire, République du Congo",
      send: "Envoyer un email",
    },

    gallery: {
      title: "Galerie",

      items: [
        "img1.jpg",
        "img2.jpg",
        "img3.jpeg",
        "img4.jpeg",
        "img5.jpg",
        "img6.jpg",
        "img7.jpg",
        "imag8.jpg",
        "img9.jpg",
        "imag10.jpg",
      ],
    },

    footer: "Tous droits réservés.",
  },
};

const links = [
  { href: "#accueil", key: "accueil", icon: Home },
  { href: "#apropos", key: "apropos", icon: User },
  { href: "#formations", key: "formations", icon: GraduationCap },
  { href: "#experience", key: "experience", icon: Briefcase },
  { href: "#competences", key: "competences", icon: Code2 },
  { href: "#projets", key: "projets", icon: FolderGit2 },
  { href: "#certificats", key: "certificats", icon: Award },
  { href: "#contact", key: "contact", icon: Mail },
] as const;

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`min-w-0 ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(32px)",
        transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function Logo({
  src,
  initials,
}: {
  src: string;
  initials: string;
}) {
  const [failed, setFailed] = useState(false);
  const showImage = src && !failed;

  return (
    <div
      className={`flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border ${
        showImage
          ? "border-slate-200 bg-white"
          : "border-orange-400/40 bg-orange-400/15"
      }`}
    >
      {showImage ? (
        <img
          src={`${import.meta.env.BASE_URL}${src}`}
          alt=""
          onError={() => setFailed(true)}
          className="h-full w-full object-contain p-1.5"
        />
      ) : (
        <span className="text-sm font-bold text-orange-400">
          {initials}
        </span>
      )}
    </div>
  );
}

function CertButton({
  href,
  label,
  title,
  onOpen,
}: {
  href: string;
  label: string;
  title: string;
  onOpen: (url: string, title: string) => void;
}) {
  const cls =
    "mt-4 inline-flex items-center gap-2 rounded-lg border border-orange-400 px-4 py-2 text-sm font-semibold text-orange-400";

  if (href.startsWith("http")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
      >
        <Award size={16} />
        {label}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={() =>
        onOpen(`${import.meta.env.BASE_URL}${href}`, title)
      }
      className={cls}
    >
      <Award size={16} />
      {label}
    </button>
  );
}

function CertViewer({
  url,
  title,
  openLabel,
  closeLabel,
  onClose,
}: {
  url: string;
  title: string;
  openLabel: string;
  closeLabel: string;
  onClose: () => void;
}) {
  const isPdf = /\.pdf($|\?)/i.test(url);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKey);

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-2 sm:p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="flex h-full max-h-[90svh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-slate-900 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-3 py-3 text-white sm:px-4">
          <p className="min-w-0 truncate font-semibold">
            {title}
          </p>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-orange-400 px-3 py-1.5 text-sm font-semibold text-orange-400"
            >
              {openLabel}
            </a>

            <button
              type="button"
              onClick={onClose}
              aria-label={closeLabel}
              className="rounded-lg border border-white/20 p-1.5"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="flex min-h-0 flex-1 items-center justify-center overflow-auto bg-slate-800">
          {isPdf ? (
            <>
              {/* Desktop : aperçu PDF intégré */}
              <iframe
                src={url}
                title={title}
                className="hidden h-full w-full flex-1 bg-white md:block"
              />

              {/* Mobile / Android : les PDF ne s'affichent pas dans un iframe */}
              <div className="p-6 text-center md:hidden">
                <p className="mb-4 break-words text-sm text-slate-300">
                  {title}
                </p>

                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-orange-400 px-5 py-3 font-semibold text-slate-900 shadow-lg"
                >
                  {openLabel}
                </a>
              </div>
            </>
          ) : (
            <img
              src={url}
              alt={title}
              className="max-h-full max-w-full object-contain"
            />
          )}
        </div>
      </div>
    </div>
  );
}

function Section({
  id,
  title,
  alt,
  dark,
  children,
}: {
  id: string;
  title: string;
  alt?: boolean;
  dark: boolean;
  children: ReactNode;
}) {
  const bg = alt
    ? dark
      ? "bg-slate-900/60"
      : "bg-slate-50"
    : "";

  return (
    <section
      id={id}
      className={`scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20 lg:px-10 ${bg}`}
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-3xl font-bold md:text-4xl">
            {title}
            <span className="mt-3 block h-1 w-16 rounded bg-orange-400" />
          </h2>
        </Reveal>

        <div className="mt-8 sm:mt-10">{children}</div>
      </div>
    </section>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);

  const [viewer, setViewer] = useState<{
    url: string;
    title: string;
  } | null>(null);

  const [dark, setDark] = useState<boolean>(() => {
    try {
      return localStorage.getItem("theme") !== "light";
    } catch {
      return true;
    }
  });

  const [lang, setLang] = useState<Lang>(() => {
    try {
      return localStorage.getItem("lang") === "fr" ? "fr" : "en";
    } catch {
      return "en";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {}
  }, [dark]);

  useEffect(() => {
    try {
      localStorage.setItem("lang", lang);
    } catch {}
  }, [lang]);

  const t = text[lang];

  const page = dark
    ? "bg-slate-950 text-white"
    : "bg-white text-slate-900";

  const navBg = dark
    ? "border-white/10 bg-slate-950/90"
    : "border-slate-200 bg-white/90";

  const linkColor = dark
    ? "text-slate-300"
    : "text-slate-600";

  const subColor = dark
    ? "text-slate-300"
    : "text-slate-600";

  const card = dark
    ? "border-white/10 bg-white/5"
    : "border-slate-200 bg-white shadow-sm";

  const chip = dark
    ? "border-white/15 bg-white/5 text-slate-200"
    : "border-slate-200 bg-slate-50 text-slate-700";

  const iconBtn = dark
    ? "border-white/10 text-slate-300"
    : "border-slate-200 text-slate-600";

  const changeLang = () => {
    setLang((current) => (current === "en" ? "fr" : "en"));
  };

  const toggleTheme = () => {
    setDark((current) => !current);
  };

  return (
    <div className={`min-h-screen overflow-x-hidden ${page}`}>

      {/* NAVBAR */}

      <header
        className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl ${navBg}`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">

          <a
            href="#accueil"
            className="text-2xl font-bold"
          >
            Celestin<span className="text-orange-400">.</span>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">

            {links.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-1.5 text-sm font-medium ${linkColor}`}
                >
                  <Icon size={16} />
                  {t.nav[item.key]}
                </a>
              );
            })}

            <button
              type="button"
              onClick={changeLang}
              className={`flex items-center gap-1.5 rounded-lg border px-3 py-2 text-sm ${iconBtn}`}
            >
              <Globe size={16} />
              {lang === "en" ? "FR" : "EN"}
            </button>

            <button
              type="button"
              onClick={toggleTheme}
              className={`rounded-lg border p-2 ${iconBtn}`}
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={17} /> : <Moon size={17} />}
            </button>

          </nav>

          <div className="flex items-center gap-2 lg:hidden">

            <button
              type="button"
              onClick={changeLang}
              className={`rounded-lg border px-3 py-2 text-sm ${iconBtn}`}
            >
              {lang === "en" ? "FR" : "EN"}
            </button>

            <button
              type="button"
              onClick={toggleTheme}
              className={`rounded-lg border p-2 ${iconBtn}`}
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            <button
              type="button"
              onClick={() => setOpen(!open)}
              className={`rounded-lg border p-2 ${iconBtn}`}
              aria-label="Menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>

          </div>
        </div>

        {open && (
          <nav
            className={`max-h-[calc(100svh-5rem)] overflow-y-auto border-t px-4 py-4 sm:px-6 lg:hidden ${
              dark
                ? "border-white/10 bg-slate-950"
                : "border-slate-200 bg-white"
            }`}
          >
            <div className="flex flex-col gap-3">

              {links.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-2 py-2 ${linkColor}`}
                  >
                    <Icon size={17} />
                    {t.nav[item.key]}
                  </a>
                );
              })}

            </div>
          </nav>
        )}
      </header>

      {/* HERO */}

      <main
        id="accueil"
        className={`relative min-h-[100svh] scroll-mt-24 overflow-hidden bg-gradient-to-br ${
          dark
            ? "from-slate-950 via-blue-950 to-slate-950"
            : "from-sky-50 via-blue-100 to-sky-50"
        }`}
      >
        <Particles dark={dark} />

        <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-7xl items-center gap-10 px-4 pb-16 pt-28 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-10">

          <div className="min-w-0 text-center lg:text-left">

            <h1 className="fade-up break-words text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">

              {t.hello}

              <br />

              <span className="text-orange-400">
                {t.name}
              </span>

            </h1>

            <p
              className={`fade-up delay-1 mx-auto mt-6 max-w-xl text-base font-semibold md:text-xl lg:mx-0 ${subColor}`}
            >
              {t.role}
            </p>

            <p
              className={`fade-up delay-1 mx-auto mt-4 max-w-xl text-base md:text-lg lg:mx-0 ${subColor}`}
            >
              {t.desc}
            </p>

            <p
              className={`fade-up delay-1 mx-auto mt-4 max-w-xl text-base md:text-lg lg:mx-0 ${subColor}`}
            >
              {t.welcome}
            </p>

            <div className="fade-up delay-2 mt-8 flex flex-wrap justify-center gap-3 sm:gap-4 lg:justify-start">

              {/* CONTACT BUTTON */}

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-orange-400 px-5 py-3 font-semibold text-slate-900 shadow-lg sm:px-6"
              >
                <Mail size={18} />
                {t.contactBtn}
              </a>

              {/* CV BUTTON */}

              <a
                href={`${import.meta.env.BASE_URL}CV_Celestin_Mouyabi.pdf`}
                download="CV_Celestin_Mouyabi.pdf"
                className="inline-flex items-center gap-2 rounded-lg bg-orange-400 px-5 py-3 font-semibold text-slate-900 shadow-lg sm:px-6"
              >
                <Download size={18} />
                {t.cvBtn}
              </a>

            </div>
          </div>

          <div className="fade-up delay-2 flex justify-center lg:justify-end">

            <div className="relative h-80 w-full max-w-[18rem] sm:h-[26rem] sm:max-w-sm">

              <div className="blob-back absolute inset-0 translate-x-3 translate-y-3 rotate-6 border-2 border-orange-400/70 bg-orange-400/15 sm:translate-x-4 sm:translate-y-4" />

              <img
                src={`${import.meta.env.BASE_URL}photoP.png`}
                alt="Celestin Gloire Lédilem MOUYABI"
                className="blob relative h-full w-full border-4 border-orange-400 object-cover object-top shadow-2xl"
              />

              <span className="floaty absolute -left-2 top-10 h-4 w-4 rounded-full bg-orange-400 sm:-left-4" />

              <span
                className="floaty absolute -right-1 bottom-16 h-3 w-3 rounded-full bg-blue-400 sm:-right-3"
                style={{ animationDelay: "1.5s" }}
              />

            </div>
          </div>

        </div>
      </main>

      {/* ABOUT */}

      <Section
        id="apropos"
        title={t.about.title}
        dark={dark}
        alt
      >
        <div className="grid gap-8 lg:grid-cols-2">

          <Reveal className={`rounded-2xl border p-5 sm:p-6 ${card}`}>

            <div className="mb-5 flex items-center gap-4">

              <div className="shrink-0 rounded-xl bg-orange-400/15 p-3 text-orange-400">
                <User size={25} />
              </div>

              <h3 className="min-w-0 text-xl font-bold">
                {t.about.role}
              </h3>

            </div>

            <div className={`space-y-4 leading-7 ${subColor}`}>
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>

          </Reveal>

          <div className="grid min-w-0 gap-8">

            <Reveal
              className={`rounded-2xl border p-5 sm:p-6 ${card}`}
              delay={100}
            >
              <h3 className="mb-5 text-xl font-bold">
                {t.about.softTitle}
              </h3>

              <div className="flex flex-wrap gap-2 sm:gap-3">

                {t.about.soft.map((item) => (
                  <span
                    key={item}
                    className={`rounded-full border px-4 py-2 text-sm ${chip}`}
                  >
                    {item}
                  </span>
                ))}

              </div>
            </Reveal>

            <Reveal
              className={`rounded-2xl border p-5 sm:p-6 ${card}`}
              delay={200}
            >
              <h3 className="mb-5 text-xl font-bold">
                {t.about.interestsTitle}
              </h3>

              <div className="space-y-3">

                {t.about.interests.map((item) => (
                  <p
                    key={item}
                    className={`leading-7 ${subColor}`}
                  >
                    • {item}
                  </p>
                ))}

              </div>
            </Reveal>

          </div>
        </div>
      </Section>

      {/* EDUCATION */}

      <Section
        id="formations"
        title={t.edu.title}
        dark={dark}
      >
        <div className="grid gap-6 md:grid-cols-2">

          {t.edu.studies.map((study, index) => (
            <Reveal
              key={study.title}
              className={`rounded-2xl border p-5 sm:p-6 ${card}`}
              delay={index * 100}
            >
              <div className="flex gap-4">

                <Logo
                  src={study.logo}
                  initials={study.initials}
                />

                <div className="min-w-0 flex-1">

                  <h3 className="break-words text-lg font-bold">
                    {study.title}
                  </h3>

                  <p className={`mt-2 ${subColor}`}>
                    {study.place}
                  </p>

                  <p className="mt-2 text-sm text-orange-400">
                    {study.date}
                  </p>

                </div>
              </div>
            </Reveal>
          ))}

        </div>
      </Section>

      {/* EXPERIENCE */}

      <Section
        id="experience"
        title={t.exp.title}
        dark={dark}
        alt
      >
        <div className="space-y-6">

          {t.exp.jobs.map((job, index) => (
            <Reveal
              key={job.title}
              className={`rounded-2xl border p-5 sm:p-6 ${card}`}
              delay={index * 80}
            >

              <div className="flex flex-col gap-5 md:flex-row">

                <Logo
                  src={job.logo}
                  initials={job.initials}
                />

                <div className="min-w-0 flex-1">

                  <div className="flex flex-col justify-between gap-2 md:flex-row">

                    <div className="min-w-0">

                      <h3 className="break-words text-xl font-bold">
                        {job.title}
                      </h3>

                      <p className={`mt-1 break-words ${subColor}`}>
                        {job.company}
                      </p>

                    </div>

                    <span className="shrink-0 text-sm font-semibold text-orange-400">
                      {job.date}
                    </span>

                  </div>

                  <ul
                    className={`mt-5 space-y-2 leading-7 ${subColor}`}
                  >
                    {job.points.map((point) => (
                      <li key={point}>• {point}</li>
                    ))}
                  </ul>

                </div>
              </div>

            </Reveal>
          ))}

        </div>
      </Section>

      {/* SKILLS */}

      <Section
        id="competences"
        title={t.skills.title}
        dark={dark}
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {t.skills.groups.map((group, index) => (
            <Reveal
              key={group.title}
              className={`rounded-2xl border p-5 sm:p-6 ${card}`}
              delay={index * 60}
            >

              <h3 className="mb-4 text-lg font-bold text-orange-400">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">

                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`rounded-full border px-3 py-1.5 text-sm ${chip}`}
                  >
                    {item}
                  </span>
                ))}

              </div>

            </Reveal>
          ))}

        </div>
      </Section>

      {/* PROJECTS */}

      <Section
        id="projets"
        title={t.projects.title}
        dark={dark}
        alt
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {t.projects.items.map((project, index) => (
            <Reveal
              key={project.title}
              className={`rounded-2xl border p-5 sm:p-6 ${card}`}
              delay={index * 100}
            >

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-400/15 text-orange-400">
                <FolderGit2 size={24} />
              </div>

              <h3 className="break-words text-xl font-bold">
                {project.title}
              </h3>

              <p className={`mt-4 leading-7 ${subColor}`}>
                {project.desc}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">

                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-full border px-3 py-1 text-xs ${chip}`}
                  >
                    {tag}
                  </span>
                ))}

              </div>

              {project.link && (
                <button
                  type="button"
                  onClick={() =>
                    setViewer({
                      url: `${import.meta.env.BASE_URL}${project.link}`,
                      title: project.title,
                    })
                  }
                  className="mt-5 inline-flex items-center gap-2 rounded-lg bg-orange-400 px-4 py-2 font-semibold text-slate-900 shadow-lg"
                >
                  <FolderGit2 size={16} />
                  {t.projects.pdfBtn}
                </button>
              )}

            </Reveal>
          ))}

        </div>
      </Section>

      {/* CERTIFICATES */}

      <Section
        id="certificats"
        title={t.certs.title}
        dark={dark}
      >
        <div className="grid gap-6 md:grid-cols-2">

          {t.certs.items.map((cert, index) => (
            <Reveal
              key={cert.title}
              className={`rounded-2xl border p-5 sm:p-6 ${card}`}
              delay={index * 60}
            >

              <div className="flex gap-4">

                <Logo
                  src={cert.logo}
                  initials={cert.initials}
                />

                <div className="min-w-0 flex-1">

                  <h3 className="break-words text-lg font-bold">
                    {cert.title}
                  </h3>

                  <p className={`mt-1 ${subColor}`}>
                    {cert.company}
                  </p>

                  {cert.date && (
                    <p className="mt-2 text-sm text-orange-400">
                      {cert.date}
                    </p>
                  )}

                  {cert.desc && (
                    <p className={`mt-3 text-sm ${subColor}`}>
                      {cert.desc}
                    </p>
                  )}

                  {cert.id && (
                    <p className={`mt-3 break-all text-sm ${subColor}`}>
                      <strong>{t.certs.idLabel}:</strong>{" "}
                      {cert.id}
                    </p>
                  )}

                  {cert.link && (
                    <CertButton
                      href={cert.link}
                      label={t.certs.btn}
                      title={cert.title}
                      onOpen={(url, title) =>
                        setViewer({ url, title })
                      }
                    />
                  )}

                </div>
              </div>

            </Reveal>
          ))}

        </div>
      </Section>

      {/* CONTACT */}

      <Section
        id="contact"
        title={t.contact.title}
        dark={dark}
        alt
      >
        <div className="grid gap-8 lg:grid-cols-2">

          <Reveal>

            <p
              className={`max-w-xl text-lg leading-8 ${subColor}`}
            >
              {t.contact.intro}
            </p>

            <div className="mt-8 space-y-5">

              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-4"
              >
                <span className="shrink-0 rounded-xl bg-orange-400/15 p-3 text-orange-400">
                  <Mail size={21} />
                </span>

                <div className="min-w-0">
                  <p className="text-sm text-orange-400">
                    {t.contact.email}
                  </p>

                  <p className={`break-all font-medium ${subColor}`}>
                    {EMAIL}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${PHONE_LINK}`}
                className="flex items-center gap-4"
              >
                <span className="shrink-0 rounded-xl bg-orange-400/15 p-3 text-orange-400">
                  <Phone size={21} />
                </span>

                <div className="min-w-0">
                  <p className="text-sm text-orange-400">
                    {t.contact.phone}
                  </p>

                  <p className={`font-medium ${subColor}`}>
                    {PHONE}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">

                <span className="shrink-0 rounded-xl bg-orange-400/15 p-3 text-orange-400">
                  <MapPin size={21} />
                </span>

                <div className="min-w-0">

                  <p className="text-sm text-orange-400">
                    {t.contact.location}
                  </p>

                  <p className={`font-medium ${subColor}`}>
                    {t.contact.locationValue}
                  </p>

                </div>

              </div>

            </div>

          </Reveal>

          <Reveal
            className={`rounded-2xl border p-6 sm:p-8 ${card}`}
            delay={150}
          >

            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-400/15 text-orange-400">
              <Mail size={28} />
            </div>

            <h3 className="text-2xl font-bold">
              {t.contact.send}
            </h3>

            <p className={`mt-3 leading-7 ${subColor}`}>
              {t.contact.intro}
            </p>

            <a
              href={`mailto:${EMAIL}`}
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-orange-400 px-6 py-3 font-semibold text-slate-900"
            >
              <Mail size={18} />
              {t.contact.send}
            </a>

          </Reveal>

        </div>
      </Section>

      {/* GALLERY */}

      <Section
        id="galerie"
        title={t.gallery.title}
        dark={dark}
      >
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">

          {t.gallery.items.map((image, index) => (
            <Reveal
              key={image}
              delay={index * 50}
            >

              <button
                type="button"
                onClick={() =>
                  setViewer({
                    url: `${import.meta.env.BASE_URL}galerie/${image}`,
                    title: `Gallery ${index + 1}`,
                  })
                }
                className="group relative aspect-square w-full overflow-hidden rounded-2xl"
              >

                <img
                  src={`${import.meta.env.BASE_URL}galerie/${image}`}
                  alt={`Gallery ${index + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />

              </button>

            </Reveal>
          ))}

        </div>
      </Section>

      {/* FOOTER */}

      <footer className="border-t border-white/10 px-4 py-8 sm:px-6">

        <div className="mx-auto max-w-7xl text-center">

          <p className={`text-sm ${subColor}`}>
            © {new Date().getFullYear()} Celestin Gloire Lédilem MOUYABI.{" "}
            {t.footer}
          </p>

        </div>

      </footer>

      {/* CERTIFICATE / IMAGE / PDF VIEWER */}

      {viewer && (
        <CertViewer
          url={viewer.url}
          title={viewer.title}
          openLabel={t.certs.openNew}
          closeLabel={t.certs.close}
          onClose={() => setViewer(null)}
        />
      )}

    </div>
  );
}