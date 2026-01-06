/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Achraf El Messaoudi",
  title: "Bonjour, Je m'appelle Achraf",
  subTitle: emoji(
    "Étudiant en M2 MIAGE parcours Systèmes d'Information Distribués, je suis motivé et à la recherche d'un stage de 6 mois à partir d'avril je suis prêt à mettre toute mon énergie et mes compétences au service d'une équipe dynamique pour contribuer à des projets innovants et ambitieux. Let's make it happen ! 🚀"
  ),
  resumeLink:
    "https://drive.google.com/file/d/13SmAAsws0nyopHLIF2GwXc_5jANXdpG6/view?usp=share_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Achraf8EL",
  linkedin: "https://www.linkedin.com/in/el-messaoudi-achraf/",
  gmail: "achraf.elmessaoudi2003@gmail.com",
  gitlab: "https://gitlab.univ-lorraine.fr/elmessao6u",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Mes Compétences",
  subTitle: "DÉVELOPPEUR FRONT-END & ANALYSTE DE DONNÉES",
  skills: [
    emoji(
      "⚡ Développement d'interfaces utilisateurs interactives pour vos applications web et mobiles"
    ),
    emoji("⚡ Applications Web Progressives (PWA) en stacks normaux et SPA"),
    emoji(
      "⚡ Intégration de services tiers tels que Firebase, AWS, Digital Ocean"
    ),
    emoji("⚡ Analyse de données et visualisation avec Python, R, SQL"),
    emoji("⚡ Maîtrise des bibliothèques comme React, D3.js pour l'analyse de données"),
    emoji("⚡ Utilisation de techniques de Machine Learning pour l'analyse de données"),
    emoji("⚡ Gestion et manipulation de bases de données avec PostgreSQL, MongoDB, MySQL"),
    emoji("⚡ Collaboration avec Git, GitHub, Jira, Trello pour une gestion de projet efficace"),
  ],



  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "typescript",
      fontAwesomeClassname: "fab fa-js-square"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fab fa-r-project"
    },
    {
      skillName: "c",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "powerbi",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "symfony",
      fontAwesomeClassname: "fab fa-symfony"
    },
    {
      skillName: "django",
      fontAwesomeClassname: "fab fa-python"
    },{
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [

    {
      schoolName: "Université de Lorraine - IDMC Nancy",
      logo: require("./assets/images/universite.jpeg"), // Remplace par le logo de l'université de Lorraine
      subHeader: "Master MIAGE (Méthodes Informatiques Appliquées à la Gestion des Entreprises)",
      duration: "Septembre 2024 - Septembre 2026",
      desc: "Master orienté vers le développement informatique, la gestion de projets et l’analyse des systèmes d’information.",
      descBullets: [
        "Approfondissement des connaissances en développement logiciel et gestion des systèmes d'information",
        "Participation à des projets de gestion de données, analyse de systèmes et architecture logicielle",
        "Acquisition de compétences en analyse de données et gestion de projets IT"
      ]
    },
    {
      schoolName: "Université de Lorraine - IDMC Nancy",
      logo: require("./assets/images/universite.jpeg"),
      subHeader: "Licence MIASHS parcours MIAGE",
      duration: "Septembre 2021 - Juin 2024",
      desc: "Formation en développement logiciel, gestion de projets et analyse des données.",
      descBullets: [
        "Apprentissage des bases du développement web",
        "Analyse et conception de systèmes d'information avec la méthode UML et Merise",
        "Développement d'applications full-stack",
        "Gestion de bases de données ",
        "Acquisition des compétences en Data Science et Analyse de données"
      ]
    },
    {
      schoolName: "GSR 2 Fès",
      logo: require("./assets/images/gsr2.jpeg"),
      subHeader: "Baccalauréat Science Physique",
      duration: "Septembre 2020 - Juin 2021",
      desc: "Formation en sciences physiques avec une solide base en mathématiques et en analyse expérimentale.",
      descBullets: [
        "Approfondissement des concepts fondamentaux en physique, chimie et mathématiques",
        "Réalisation de travaux pratiques en laboratoire pour l'expérimentation scientifique",
        "Renforcement des compétences en résolution de problèmes complexes et analyse de données"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Mettre à true pour afficher la section de compétences
  intro: "Bien que je possède une solide maîtrise des concepts dans les domaines clés je m'efforce constamment de m'améliorer et d'élargir mes connaissances pour rester à jour avec les dernières technologies et meilleures pratiques.",

  experience: [
    {
      Stack: "Frontend/Design", // Stack ou technologie avec laquelle tu as de l'expérience
      progressPercentage: "75%" // Progression dans le développement Frontend, toujours en évolution
    },
    {
      Stack: "Backend",
      progressPercentage: "75%" // Progression dans le développement Backend, avec de l'expérience mais encore à perfectionner
    },
    {
      Stack: "Programmation",
      progressPercentage: "80%" // Bonne maîtrise des concepts de programmation, mais toujours en amélioration
    },
    {
      Stack: "Analyse de données",
      progressPercentage: "70%" // Compétence en analyse de données, avec une amélioration continue dans l'utilisation des outils
    },
    {
      Stack: "Gestion des bases de données",
      progressPercentage: "80%" // Expérience solide avec les bases de données, mais encore de l'espace pour progresser
    },
    {
      Stack: "UI/UX Design",
      progressPercentage: "65%" // Une approche créative du design, mais encore beaucoup à explorer et à apprendre
    }
  ],
  displayCodersrank: false // Mettre à true pour afficher la section des badges CodersRank. Pense à changer ton nom d'utilisateur dans src/containers/skillProgress/skillProgress.js:17:62. Par défaut, c'est sur false.
};


// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Stage | Développeur Web & DevOps",
      company: "Artossi USA",
      companylogo: require("./assets/images/artossi.png"), // Remplacer avec le logo de l'entreprise si nécessaire
      date: "Avril – Juillet 2024",
      desc: "Conception et développement de l'interface utilisateur et admin, gestion de la base de données et mise en place de diverses solutions techniques pour une application web interactive.",
      descBullets: [
        "Conception et développement Frontend et Backend d’une interface utilisateur interactive et responsive",
        "Mise en place et gestion de la base de données SQL",
        "Conception et développement d’une interface admin pour l’application web",
        "Développement et intégration d’API",
        "Mise en place des tests unitaires pour assurer la qualité du code",
        "Déploiement et gestion de l’application web sur le service cloud AWS",
        "Mise en place d’une intégration continue CI/CD",
        "Documentation complète du travail réalisé"
      ]
    },
    
    {
      role: "Stagiaire Développeur Data Analyst Etude et Développement",
      company: "Bus-Bio Industries SARL",
      date: "Juin – Août 2023",
      companylogo: require("./assets/images/b.webp"),
      desc: "Participation à l'analyse et à la visualisation des données pour améliorer les processus décisionnels.",
      descBullets: [
        "Conception de scripts pour le traitement automatisé des données de production",
        "Optimisation du code existant pour améliorer la performance et lamaintenabilité",
        "Validation des résultats par des tests croisés pour assurer la fiabilité des calculs industriels",
        "Création de tableaux de bord Power BI pour suivre les indicateurs clés.",
        "Traitement et nettoyage des données issues de fichiers CSV.",
        "Automatisation de l’analyse de données avec Python et SQL.",
        "Élaboration de rapports pour optimiser les processus internes."
      ]
    }
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projets Universitaires",
  subtitle: "PROJETS RÉALISÉS DANS LE CADRE DE MES ÉTUDES ET DE MA FORMATION",
  projects: [
    {
      image: require("./assets/images/fest.png"), // Remplacer avec l'image du projet
      projectName: "Application Web de Planification des Interventions pour un Festival",
      projectDesc: "Conception et implantation d'une application web pour la planification des interventions lors d'un festival.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "PostgreSQL", "PHP", "Bootstrap"],
      footerLink: [
        {
          name: "Voir le projet",
          url: "https://github.com/Achraf8EL/CSI_Fest_L3" // Remplacer par le lien du projet si disponible
        }
      ]
      
    },
    {
      image: require("./assets/images/db.avif"), // Remplacer avec l'image du projet
      projectName: "Conception de Base de Données Touristiques",
      projectDesc: "Création d'une base de données pour la gestion des informations touristiques.",
      technologies: "DataGrip, phpMyAdmin",
      footerLink: [
        {
          name: "Voir le projet",
          url: "https://github.com/Achraf8EL/L3-MIASHS-Projet-Mod-lisation-bdd" // Remplacer par le lien du projet si disponible
        }
      ]
      
    },
    {
      image: require("./assets/images/ca.jpeg"), // Remplacer avec l'image du projet
      projectName: "Jeu 'Color Addict'",
      projectDesc: "Conception et implémentation du jeu 'Color Addict' utilisant Java et Swing.",
      technologies: "Java, Swing",
      footerLink: [
        {
          name: "Voir le projet",
          url: "https://github.com/Achraf8EL/L3-MIASHS-Color-Addict" // Remplacer par le lien du projet si disponible
        }
      ]
    },
    {
      image: require("./assets/images/store.jpeg"), // Remplacer avec l'image du projet
      projectName: "Site Web e-commerce avec Base de Données",
      projectDesc: "Création d'un site web interactif connecté à une base de données.",
      technologies: "HTML, CSS, JS, AJAX, JQuery, PHP, phpMyAdmin",
      footerLink: [
        {
          name: "Voir le projet",
          url: "https://github.com/Achraf8EL/L2-MIASHS-Ecommerce-Project" // Remplacer par le lien du projet si disponible
        }
      ]
      
    },
    {
      image: require("./assets/images/cn.webp"), // Remplacer avec l'image du projet
      projectName: "Application Web de Gestion d'un Club Nautique",
      projectDesc: "Développement d'une application web pour gérer un club nautique, permettant la gestion des adhésions et des activités.",
      technologies: "HTML, CSS, JS, React, Node.js, TailwindCSS, PostgreSQL",
      footerLink: [
        {
          name: "Voir le projet",
          url: "https://github.com/Achraf8EL/Club_Nautique_2024_2025" // Remplacer par le lien du projet si disponible
        }
      ]
      
    },
    {
      image: require("./assets/images/ff.webp"), // Remplacer avec l'image du projet
      projectName: "Finstere Flure Game",
      projectDesc: "Création du jeu 'Finstere Flure' en Java avec Swing et JDBC. Ce jeu permet aux joueurs de naviguer à travers un environnement en 3D, tout en résolvant des puzzles pour avancer dans les niveaux.",
      technologies: ["Java", "Swing", "JDBC"],
      footerLink: [
        {
          name: "Voir le code",
          url: "https://github.com/Achraf8EL/Finstere_Flure-master"
        }
      ]
    },
    {
      image: require("./assets/images/data.jpeg"), // Remplacer avec l'image du projet
      projectName: "Application Web de Visualisation des Données CSV",
      projectDesc: "Développement d'une application web permettant de visualiser les données extraites de fichiers CSV à l'aide de Python, avec un interface en HTML/CSS.",
      technologies: "Python, Ubuntu, HTML, CSS",
      footerLink: [
        {
          name: "Voir le projet",
          url: "https://github.com/Achraf8EL/ProjetWEBS" // Remplacer par le lien du projet si disponible
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Réalisations et Certifications 🏆 "),
  subtitle:
    "Réalisations, Certifications, que j'ai obtenues au cours de mon parcours !",

  achievementsCards: [
    {
      title: "Python pour le Deep Learning & le Machine Learning: A à Z",
      subtitle:
        "Certificat de fin de formation sur Python pour le Deep Learning et le Machine Learning.",
      image: require("./assets/images/udemy.jpeg"), // Remplace avec ton logo Udemy si nécessaire
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-a4964a75-611b-4e22-8e29-42c18f54bfec/"
        }
      ]
    },
    {
      title: "HTML5 et CSS3: La Formation Complète",
      subtitle:
        "Certificat de fin de formation sur HTML5 et CSS3.",
      image: require("./assets/images/udemy.jpeg"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-5ef9564a-bb80-4607-a8ec-3a233e4d0888/"
        }
      ]
    },
    {
      title: "CSS, Bootstrap, JavaScript And PHP Stack Complete Course",
      subtitle:
        "Certificat de fin de formation sur CSS, Bootstrap, JavaScript et PHP.",
      image: require("./assets/images/udemy.jpeg"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-ba42b0f3-117a-47fa-a782-507121fdb6e1/"
        }
      ]
    },
    {
      title: "JavaScript pour les débutants : Cours complet pour débutants",
      subtitle:
        "Certificat de fin de formation en JavaScript pour débutants.",
      image: require("./assets/images/udemy.jpeg"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-58ce330b-fa3e-4153-8aa8-efdbda0bcf75/"
        }
      ]
    },
    {
      title: "Python pour la Data Science et le Machine Learning: A à Z",
      subtitle:
        "Certificat de fin de formation sur Python pour la Data Science et le Machine Learning.",
      image: require("./assets/images/udemy.jpeg"), // Remplace avec ton logo Udemy si nécessaire
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-fa5400b4-c825-4c76-abb4-37ca9a726a88/"
        }
      ]
    },
    {
      title: "Mastering C++ Language - C++ Programming For Beginners",
      subtitle:
        "Certificat de fin de formation sur la maîtrise du C++.",
      image: require("./assets/images/udemy.jpeg"), // Remplace avec ton logo Udemy si nécessaire
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-9b703d06-aa64-4b4b-a206-28279190fc9c/"
        }
      ]
    },
    {
      title: "HTML5 et CSS3: La Formation Complète",
      subtitle:
        "Certificat de fin de formation sur HTML5 et CSS3 avec Meta Brains.",
      image: require("./assets/images/udemy.jpeg"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-5ef9564a-bb80-4607-a8ec-3a233e4d0888/"
        }
      ]
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contactez-moi ☎️"),
  subtitle:
    "Vous souhaitez discuter d'un projet ou simplement dire bonjour ? Ma boîte de réception est ouverte à tous.",
  number: "+33 7 55 95 82 51",
  email_address: "achraf.elmessaoudi2003@gmail.com"
};


// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
