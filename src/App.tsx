import { useState, useEffect, useRef, type ReactNode } from "react";
import {
  Home, User, GraduationCap, Code2, FolderGit2, Mail,
  Menu, X, Sun, Moon, Globe, Phone, MapPin, Briefcase, Award,
} from "lucide-react";
import Particles from "./Particules";

type Lang = "fr" | "en";

const EMAIL = "gloirecelestin16@gmail.com";
const PHONE = "+242 06 828 82 38";
const PHONE_LINK = "+242068288238";

const text = {
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
    hello: "Bonjour,",
    iam: "je suis",
    desc: "Étudiant en Génie Électrique, spécialité Automatisme & Instrumentation. Je recherche un stage dans l'industrie Oil & Gas. N'hésitez pas à me contacter.",
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
          period: "2024 – 2026 · Diplôme prévu : décembre 2026",
          logo: "2i.jpg",
          initials: "2i",
        },
        {
          title: "Baccalauréat scientifique (Série D)",
          place: "Lycée de Madingou, Madingou",
          period: "2023",
          logo: "madingou.jpg",
          initials: "LM",
        },
      ],
    },
    exp: {
      title: "Expérience",
      items: [
        {
          title: "Responsable formation",
          place: "BiviTech, Pointe-Noire · Temps partiel · Sur site",
          period: "Mars 2026 – aujourd'hui",
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
          place: "International Student Identity Card, République du Congo · Temps plein · Sur site",
          period: "Mai 2025 – aujourd'hui",
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
          place: "CFPE",
          period: "Juillet – août 2026",
          logo: "CFPE.jpg",
          initials: "CFPE",
          points: [
            "Commande de machines synchrones et de variateurs de fréquence TOSHIBA.",
          ],
        },
        {
          title: "Atelier pratique (stage pratique)",
          place: "CEFA Automobile, Pointe-Noire",
          period: "7 février 2026 – 17 mars 2026",
          logo: "CEFA.png",
          initials: "CEFA",
          points: [
            "Maintenance préventive et corrective et diagnostic des systèmes électroniques embarqués avancés, garantissant fiabilité et performance des véhicules.",
          ],
        },
        {
          title: "Technicien en systèmes intelligents (stagiaire)",
          place: "ANVRI, Brazzaville",
          period: "28 août 2024 – 6 février 2025",
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
          items: ["Allen-Bradley (Studio 5000)", "Siemens (TIA Portal)", "SCADA", "LADDER", "LIST"],
        },
        {
          title: "Instrumentation",
          items: ["Capteurs", "Transmetteurs", "Calibration", "Vérification"],
        },
        {
          title: "Systèmes de contrôle",
          items: ["Vannes de régulation", "Positionneurs", "Actionneurs pneumatiques", "Actionneurs électriques"],
        },
        {
          title: "Machines électriques",
          items: ["Machines synchrones", "Variateurs de fréquence"],
        },
        {
          title: "Maintenance",
          items: ["Préventive et corrective", "MTBF / MTTR", "TRS", "AMDEC", "GMAO"],
        },
        {
          title: "Schémas et conception",
          items: ["P&ID", "Schémas électriques", "SEE Electrical", "EPLAN", "AVEVA"],
        },
        {
          title: "Programmation",
          items: ["C", "C++", "C#", "Python", "React", "HTML"],
        },
        {
          title: "Logiciels d'ingénierie",
          items: ["MATLAB", "Automation Studio", "CREO Parametric", "GANTT Project", "Microsoft Office", "Visual Studio"],
        },
        {
          title: "Sécurité des procédés",
          items: ["HSE", "H₂S", "ATEX"],
        },
      ],
    },
    projects: {
      title: "Projets",
      items: [
        {
          title: "Serre intelligente automatisée",
          desc: "Système basé sur Arduino avec 7 capteurs : irrigation, ventilation, acquisition de données, contrôle à distance et régulation thermique par boucles PID.",
          tags: ["Arduino", "PID", "Capteurs"],
        },
        {
          title: "MaintiTrack : GMAO",
          desc: "Application de gestion de maintenance assistée par ordinateur (GMAO), pensée pour mobile et desktop, développée avec React.",
          tags: ["React", "GMAO", "UX/UI"],
        },
        {
          title: "Bras robotique automatisé",
          desc: "Réalisation d'un bras robotique automatisé, sujet de mon mémoire de fin d'études de Licence.",
          tags: ["Automatisme", "Robotique"],
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
          issuer: "TotalEnergies",
          date: "Émise en mars 2026",
          desc: "Compétences : automatisation des processus, pétrole et gaz",
          id: "",
          link: "certificats/MOOC.pdf",
          logo: "TEPC.jpg",
          initials: "TE",
        },
        {
          title: "Gmail",
          issuer: "United Latino Students Association",
          date: "Émise en novembre 2025",
          desc: "",
          id: "2OVD7DZUDQ1D",
          link: "https://www.coursera.org/account/accomplishments/verify/2OVD7DZUDQ1D",
          logo: "MTN.jpg",
          initials: "ULSA",
        },
        {
          title: "Systèmes à microprocesseur et technologies embarquées",
          issuer: "STEMpower Inc",
          date: "Émise en avril 2025",
          desc: "",
          id: "",
          link: "",
          logo: "STEM POWER.png",
          initials: "SP",
        },
        {
          title: "Management des effectifs et des ressources",
          issuer: "YALI Network Nigeria",
          date: "Émise en juin 2025",
          desc: "",
          id: "",
          link: "certificats/YALIII.jpg",
          logo: "YALII.png",
          initials: "YALI",
        },
        {
          title: "Module 7",
          issuer: "TotalEnergies",
          date: "",
          desc: "",
          id: "",
          link: "certificats/module7.pdf",
          logo: "TEPC.jpg",
          initials: "TE",
        },
        {
          title: "Module 8",
          issuer: "TotalEnergies",
          date: "Émise en novembre 2025 · Expire en novembre 2028",
          desc: "",
          id: "",
          link: "certificats/module8.pdf",
          logo: "TEPC.jpg",
          initials: "TE",
        },
        {
          title: "IoT (Internet des objets), informatique sans fil et en nuage, technologies émergentes",
          issuer: "Fondation MTN Congo",
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
      intro: "Une opportunité de stage ou une question ? Écrivez-moi, je réponds avec plaisir.",
      email: "Email",
      phone: "Téléphone",
      location: "Localisation",
      locationValue: "Pointe-Noire, République du Congo",
      send: "Envoyer un email",
    },
    footer: "Tous droits réservés.",
  },
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
    hello: "Hello,",
    iam: "I'm",
    desc: "Electrical Engineering student specializing in Automation & Instrumentation. I'm looking for an internship in the Oil & Gas industry. Feel free to contact me.",
    about: {
      title: "About",
      role: "Maintenance technician",
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
          period: "2024 – 2026 · Expected graduation: December 2026",
          logo: "2i.jpg",
          initials: "2i",
        },
        {
          title: "Scientific Baccalaureate (Series D)",
          place: "Lycée de Madingou, Madingou",
          period: "2023",
          logo: "madingou.jpg",
          initials: "LM",
        },
      ],
    },
    exp: {
      title: "Experience",
      items: [
        {
          title: "Training manager",
          place: "BiviTech, Pointe-Noire · Part-time · On site",
          period: "March 2026 – present",
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
          place: "International Student Identity Card, Republic of the Congo · Full-time · On site",
          period: "May 2025 – present",
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
          place: "CFPE",
          period: "July – August 2026",
          logo: "CFPE.jpg",
          initials: "CFPE",
          points: [
            "Control of synchronous machines and TOSHIBA variable frequency drives.",
          ],
        },
        {
          title: "Hands-on workshop (practical internship)",
          place: "CEFA Automobile, Pointe-Noire",
          period: "February 7, 2026 – March 17, 2026",
          logo: "CEFA.png",
          initials: "CEFA",
          points: [
            "Preventive and corrective maintenance and diagnostics of advanced embedded electronic systems, ensuring vehicle reliability and performance.",
          ],
        },
        {
          title: "Smart systems technician (intern)",
          place: "ANVRI, Brazzaville",
          period: "August 28, 2024 – February 6, 2025",
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
          items: ["Allen-Bradley (Studio 5000)", "Siemens (TIA Portal)", "SCADA", "LADDER", "STL"],
        },
        {
          title: "Instrumentation",
          items: ["Sensors", "Transmitters", "Calibration", "Verification"],
        },
        {
          title: "Control systems",
          items: ["Control valves", "Positioners", "Pneumatic actuators", "Electric actuators"],
        },
        {
          title: "Electrical machines",
          items: ["Synchronous machines", "Variable frequency drives"],
        },
        {
          title: "Maintenance",
          items: ["Preventive and corrective", "MTBF / MTTR", "OEE", "FMEA", "CMMS"],
        },
        {
          title: "Diagrams and design",
          items: ["P&ID", "Electrical diagrams", "SEE Electrical", "EPLAN", "AVEVA"],
        },
        {
          title: "Programming",
          items: ["C", "C++", "C#", "Python", "React", "HTML"],
        },
        {
          title: "Engineering software",
          items: ["MATLAB", "Automation Studio", "CREO Parametric", "GANTT Project", "Microsoft Office", "Visual Studio"],
        },
        {
          title: "Process safety",
          items: ["HSE", "H₂S", "ATEX"],
        },
      ],
    },
    projects: {
      title: "Projects",
      items: [
        {
          title: "Automated smart greenhouse",
          desc: "Arduino-based system with 7 sensors: irrigation, ventilation, data acquisition, remote control and thermal regulation through PID loops.",
          tags: ["Arduino", "PID", "Sensors"],
        },
        {
          title: "MaintiTrack: CMMS",
          desc: "Computerized maintenance management system (CMMS) designed for mobile and desktop, built with React.",
          tags: ["React", "CMMS", "UX/UI"],
        },
        {
          title: "Automated robotic arm",
          desc: "Construction of an automated robotic arm, the subject of my final-year Bachelor's thesis.",
          tags: ["Automation", "Robotics"],
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
          issuer: "TotalEnergies",
          date: "Issued March 2026",
          desc: "Skills: process automation, oil and gas",
          id: "",
          link: "certificats/MOOC.pdf",
          logo: "TEPC.jpg",
          initials: "TE",
        },
        {
          title: "Gmail",
          issuer: "United Latino Students Association",
          date: "Issued November 2025",
          desc: "",
          id: "2OVD7DZUDQ1D",
          link: "https://www.coursera.org/account/accomplishments/verify/2OVD7DZUDQ1D",
          logo: "MTN.jpg",
          initials: "ULSA",
        },
        {
          title: "Microprocessor Systems and Embedded Technologies",
          issuer: "STEMpower Inc",
          date: "Issued April 2025",
          desc: "",
          id: "",
          link: "",
          logo: "STEM POWER.png",
          initials: "SP",
        },
        {
          title: "Workforce and Resource Management",
          issuer: "YALI Network Nigeria",
          date: "Issued June 2025",
          desc: "",
          id: "",
          link: "certificats/YALIII.jpg",
          logo: "YALII.png",
          initials: "YALI",
        },
        {
          title: "Module 7",
          issuer: "TotalEnergies",
          date: "",
          desc: "",
          id: "",
          link: "certificats/module7.pdf",
          logo: "TEPC.jpg",
          initials: "TE",
        },
        {
          title: "Module 8",
          issuer: "TotalEnergies",
          date: "Issued November 2025 · Expires November 2028",
          desc: "",
          id: "",
          link: "certificats/module8.pdf",
          logo: "TEPC.jpg",
          initials: "TE",
        },
        {
          title: "IoT (Internet of Things), Wireless and Cloud Computing, Emerging Technologies",
          issuer: "MTN Congo Foundation",
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
      intro: "An internship opportunity or a question? Write to me, I'll be happy to reply.",
      email: "Email",
      phone: "Phone",
      location: "Location",
      locationValue: "Pointe-Noire, Republic of the Congo",
      send: "Send an email",
    },
    footer: "All rights reserved.",
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

/* Apparition en douceur au défilement */
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
      className={className}
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

/* Logo de société (style avatar) : image dans public/, sinon initiales */
function Logo({ src, initials }: { src: string; initials: string }) {
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
        <span className="text-sm font-bold text-orange-400">{initials}</span>
      )}
    </div>
  );
}

/* Bouton "Voir le certificat" :
   - lien externe (https) : ouvre un nouvel onglet
   - fichier dans public/ (PDF ou image) : ouvre la fenêtre d'aperçu */
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
    "mt-4 inline-flex items-center gap-2 rounded-lg border border-orange-400 px-4 py-2 text-sm font-semibold text-orange-400 transition hover:bg-orange-400 hover:text-slate-900";

  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        <Award size={16} />
        {label}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onOpen(`${import.meta.env.BASE_URL}${href}`, title)}
      className={cls}
    >
      <Award size={16} />
      {label}
    </button>
  );
}

/* Fenêtre d'aperçu du certificat (PDF ou image) */
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
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="flex h-full max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-slate-900 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 text-white">
          <p className="min-w-0 truncate font-semibold">{title}</p>
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-orange-400 px-3 py-1.5 text-sm font-semibold text-orange-400 transition hover:bg-orange-400 hover:text-slate-900"
            >
              {openLabel}
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label={closeLabel}
              className="rounded-lg border border-white/20 p-1.5 transition hover:text-orange-400"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="flex min-h-0 flex-1 items-center justify-center overflow-auto bg-slate-800">
          {isPdf ? (
            <iframe
              src={url}
              title={title}
              className="h-full w-full flex-1 bg-white"
            />
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

/* Conteneur de section avec titre */
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
    <section id={id} className={`scroll-mt-20 px-6 py-20 lg:px-10 ${bg}`}>
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-3xl font-bold md:text-4xl">
            {title}
            <span className="mt-3 block h-1 w-16 rounded bg-orange-400" />
          </h2>
        </Reveal>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function App() {
  const [open, setOpen] = useState(false);
  const [viewer, setViewer] = useState<{ url: string; title: string } | null>(
    null
  );

  const [dark, setDark] = useState<boolean>(() => {
    try {
      return localStorage.getItem("theme") !== "light";
    } catch {
      return true;
    }
  });

  const [lang, setLang] = useState<Lang>(() => {
    try {
      return localStorage.getItem("lang") === "en" ? "en" : "fr";
    } catch {
      return "fr";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch (error) {
      console.warn("Stockage du thème indisponible", error);
    }
  }, [dark]);

  useEffect(() => {
    try {
      localStorage.setItem("lang", lang);
    } catch (error) {
      console.warn("Stockage de la langue indisponible", error);
    }
    document.documentElement.lang = lang;
  }, [lang]);

  const t = text[lang];

  // Classes selon le thème
  const page = dark ? "bg-slate-950 text-white" : "bg-white text-slate-900";
  const navBg = dark
    ? "border-white/10 bg-slate-950/90"
    : "border-slate-200 bg-white/90";
  const linkColor = dark ? "text-slate-300" : "text-slate-600";
  const subColor = dark ? "text-slate-300" : "text-slate-600";
  const card = dark
    ? "border-white/10 bg-white/5"
    : "border-slate-200 bg-white shadow-sm";
  const chip = dark
    ? "border-white/15 bg-white/5 text-slate-200"
    : "border-slate-200 bg-slate-50 text-slate-700";
  const iconBtn = dark
    ? "border-white/10 text-slate-300 hover:text-blue-500"
    : "border-slate-200 text-slate-600 hover:text-blue-600";

  const toggleLang = () => setLang(lang === "fr" ? "en" : "fr");
  const toggleTheme = () => setDark(!dark);

  const LangButton = (
    <button
      onClick={toggleLang}
      aria-label="Changer de langue / Change language"
      className={`flex items-center gap-1.5 rounded-lg border px-3 py-2 text-sm font-semibold transition ${iconBtn}`}
    >
      <Globe size={16} />
      {lang === "fr" ? "EN" : "FR"}
    </button>
  );

  const ThemeButton = (
    <button
      onClick={toggleTheme}
      aria-label={dark ? "Mode clair" : "Mode sombre"}
      className={`rounded-lg border p-2 transition ${iconBtn}`}
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );

  return (
    <div className={`min-h-screen scroll-smooth transition-colors ${page}`}>
      {/* NAVBAR */}
      <nav
        className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md ${navBg}`}
      >
        <div className="flex w-full items-center justify-between px-6 py-4 xl:px-10">
          <a href="#accueil" className="text-2xl font-bold">
            <span className="text-blue-500">C</span>élestin
            <span className="text-blue-500">.</span>
          </a>

          <div className="ml-auto hidden items-center gap-5 xl:flex">
            {links.map(({ href, key, icon: Icon }) => (
              <a
                key={href}
                href={href}
                className={`flex items-center gap-2 transition hover:text-blue-500 ${linkColor}`}
              >
                <Icon size={18} /> {t.nav[key]}
              </a>
            ))}
            {LangButton}
            {ThemeButton}
          </div>

          <div className="flex items-center gap-3 xl:hidden">
            {LangButton}
            {ThemeButton}
            <button onClick={() => setOpen(!open)} aria-label="Menu">
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {open && (
          <div
            className={`flex flex-col gap-4 border-t px-6 py-4 xl:hidden ${
              dark ? "border-white/10" : "border-slate-200"
            }`}
          >
            {links.map(({ href, key, icon: Icon }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 hover:text-blue-500 ${linkColor}`}
              >
                <Icon size={18} /> {t.nav[key]}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ACCUEIL */}
      <main
        id="accueil"
        className={`relative min-h-screen scroll-mt-24 overflow-hidden bg-gradient-to-br ${
          dark
            ? "from-slate-950 via-blue-950 to-slate-950"
            : "from-sky-50 via-blue-100 to-sky-50"
        }`}
      >
        <Particles dark={dark} />

        <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-16 pt-28 lg:grid-cols-2 lg:px-10">
          <div className="text-center lg:text-left">
            <h1 className="fade-up text-4xl font-bold leading-tight md:text-6xl">
              {t.hello}
              <br />
              {t.iam} <span className="text-orange-400">Célestin</span>
            </h1>

            <p
              className={`fade-up delay-1 mx-auto mt-6 max-w-xl text-base md:text-lg lg:mx-0 ${subColor}`}
            >
              {t.desc}
            </p>

            <a
              href="#contact"
              className="fade-up delay-2 mt-8 inline-flex items-center gap-2 rounded-lg bg-orange-400 px-6 py-3 font-semibold text-slate-900 shadow-lg transition hover:bg-orange-300"
            >
              <Mail size={18} />
              {t.contactBtn}
            </a>
          </div>

          <div className="fade-up delay-2 flex justify-center lg:justify-end">
            <div className="relative h-80 w-72 sm:h-[26rem] sm:w-96">
              <div className="blob-back absolute inset-0 translate-x-4 translate-y-4 rotate-6 border-2 border-orange-400/70 bg-orange-400/15" />
              <img
                src={`${import.meta.env.BASE_URL}photoP.png`}
                alt="Célestin"
                className="blob relative h-full w-full border-4 border-orange-400 object-cover object-top shadow-2xl"
              />
              <span className="floaty absolute -left-4 top-10 h-4 w-4 rounded-full bg-orange-400" />
              <span
                className="floaty absolute -right-3 bottom-16 h-3 w-3 rounded-full bg-blue-400"
                style={{ animationDelay: "1.5s" }}
              />
            </div>
          </div>
        </div>
      </main>

      {/* À PROPOS */}
      <Section id="apropos" title={t.about.title} dark={dark}>
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="text-xl font-semibold text-orange-400">
              {t.about.role}
            </p>
            <p className={`mt-4 leading-relaxed ${subColor}`}>{t.about.p1}</p>
            <p className={`mt-4 leading-relaxed ${subColor}`}>{t.about.p2}</p>
            <p className={`mt-4 leading-relaxed ${subColor}`}>{t.about.p3}</p>
          </Reveal>

          <div className="grid gap-6">
            <Reveal delay={100}>
              <div className={`rounded-2xl border p-6 ${card}`}>
                <h3 className="text-lg font-semibold">{t.about.softTitle}</h3>
                <ul className={`mt-3 space-y-2 ${subColor}`}>
                  {t.about.soft.map((s) => (
                    <li key={s} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className={`rounded-2xl border p-6 ${card}`}>
                <h3 className="text-lg font-semibold">
                  {t.about.interestsTitle}
                </h3>
                <ul className={`mt-3 space-y-2 ${subColor}`}>
                  {t.about.interests.map((s) => (
                    <li key={s} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* FORMATIONS */}
      <Section id="formations" title={t.edu.title} alt dark={dark}>
        <div className="grid gap-6 md:grid-cols-2">
          {t.edu.studies.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <div className={`flex h-full gap-4 rounded-2xl border p-6 ${card}`}>
                <Logo src={s.logo} initials={s.initials} />
                <div className="min-w-0">
                  <p className="font-semibold">{s.title}</p>
                  <p className="mt-1 text-blue-500">{s.place}</p>
                  <p className={`mt-1 text-sm ${subColor}`}>{s.period}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* EXPÉRIENCE */}
      <Section id="experience" title={t.exp.title} dark={dark}>
        <div className="mx-auto max-w-4xl space-y-6">
          {t.exp.items.map((e, i) => (
            <Reveal key={e.title} delay={i * 80}>
              <div className={`flex gap-4 rounded-2xl border p-6 ${card}`}>
                <Logo src={e.logo} initials={e.initials} />
                <div className="min-w-0">
                  <p className="font-semibold">{e.title}</p>
                  <p className="mt-1 text-blue-500">{e.place}</p>
                  <p className={`mt-1 text-sm ${subColor}`}>{e.period}</p>
                  <ul className={`mt-3 space-y-2 text-sm ${subColor}`}>
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* COMPÉTENCES */}
      <Section id="competences" title={t.skills.title} alt dark={dark}>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.skills.groups.map((g, i) => (
            <Reveal key={g.title} delay={(i % 3) * 100}>
              <div className={`h-full rounded-2xl border p-6 ${card}`}>
                <h3 className="font-semibold text-orange-400">{g.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className={`rounded-full border px-3 py-1 text-sm ${chip}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* PROJETS */}
      <Section id="projets" title={t.projects.title} dark={dark}>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.projects.items.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div
                className={`h-full rounded-2xl border p-6 transition hover:-translate-y-1 hover:border-orange-400 ${card}`}
              >
                <FolderGit2 className="text-orange-400" size={28} />
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className={`mt-2 text-sm leading-relaxed ${subColor}`}>
                  {p.desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full border px-3 py-1 text-xs ${chip}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CERTIFICATS */}
      <Section id="certificats" title={t.certs.title} alt dark={dark}>
        <div className="grid gap-6 md:grid-cols-2">
          {t.certs.items.map((c, i) => (
            <Reveal key={c.title} delay={(i % 2) * 100}>
              <div className={`flex h-full gap-4 rounded-2xl border p-6 ${card}`}>
                <Logo src={c.logo} initials={c.initials} />
                <div className="min-w-0">
                  <p className="font-semibold">{c.title}</p>
                  <p className="mt-1 text-blue-500">{c.issuer}</p>
                  {c.date && (
                    <p className={`mt-1 text-sm ${subColor}`}>{c.date}</p>
                  )}
                  {c.desc && (
                    <p className={`mt-1 text-sm ${subColor}`}>{c.desc}</p>
                  )}
                  {c.id && (
                    <p className={`mt-1 text-xs ${subColor}`}>
                      {t.certs.idLabel} : {c.id}
                    </p>
                  )}
                  {c.link && (
                    <CertButton
                      href={c.link}
                      label={t.certs.btn}
                      title={c.title}
                      onOpen={(url, title) => setViewer({ url, title })}
                    />
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title={t.contact.title} dark={dark}>
        <Reveal>
          <p className={`max-w-2xl ${subColor}`}>{t.contact.intro}</p>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Reveal>
            <a
              href={`mailto:${EMAIL}`}
              className={`block h-full rounded-2xl border p-6 transition hover:border-orange-400 ${card}`}
            >
              <Mail className="text-orange-400" size={26} />
              <p className="mt-3 font-semibold">{t.contact.email}</p>
              <p className={`mt-1 break-all text-sm ${subColor}`}>{EMAIL}</p>
            </a>
          </Reveal>

          <Reveal delay={100}>
            <a
              href={`tel:${PHONE_LINK}`}
              className={`block h-full rounded-2xl border p-6 transition hover:border-orange-400 ${card}`}
            >
              <Phone className="text-orange-400" size={26} />
              <p className="mt-3 font-semibold">{t.contact.phone}</p>
              <p className={`mt-1 text-sm ${subColor}`}>{PHONE}</p>
            </a>
          </Reveal>

          <Reveal delay={200}>
            <div className={`h-full rounded-2xl border p-6 ${card}`}>
              <MapPin className="text-orange-400" size={26} />
              <p className="mt-3 font-semibold">{t.contact.location}</p>
              <p className={`mt-1 text-sm ${subColor}`}>
                {t.contact.locationValue}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-orange-400 px-6 py-3 font-semibold text-slate-900 shadow-lg transition hover:bg-orange-300"
          >
            <Mail size={18} />
            {t.contact.send}
          </a>
        </Reveal>
      </Section>

      {/* FOOTER */}
      <footer
        className={`border-t px-6 py-6 text-center text-sm ${
          dark ? "border-white/10 text-slate-400" : "border-slate-200 text-slate-500"
        }`}
      >
        © {new Date().getFullYear()} Célestin Gloire Lédilem Mouyabi. {t.footer}
      </footer>

      {/* APERÇU DU CERTIFICAT */}
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

export default App;