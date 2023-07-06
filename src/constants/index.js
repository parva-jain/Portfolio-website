import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  solidity,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  scss,
  nodejs,
  mongodb,
  express,
  blockchain,
  ethereum,
  web3js,
  git,
  postman,
  figma,
  docker,
  aaiway,
  pandora,
  studynotion,
  movix,
  portfolio,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "SmartContract Developer",
    icon: backend,
  },
  {
    title: "Competitive Programmer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "Ethereum",
    icon: ethereum,
  },
  {
    name: "Git",
    icon: git,
  },

  {
    name: "Postman",
    icon: postman,
  },
];

const experiences = [
  {
    title: "Machine Learning Intern",
    company_name: "AAIWAY",
    icon: aaiway,
    iconBg: "#383E56",
    date: "April 2020 - July 2020",
    points: [
      "Developed a house recommendation system utilizing clustering algorithms to provide personalized recommendations.",
      "Fine tuned the machine learning model to reach the highest precision and accuracy.",
      "Researched on the implementation of Deep learning models for detecting the cardiac diseases using Data Augmentaion.",
    ],
  },
  {
    title: "Blockchain Developer",
    company_name: "Pandora Finance",
    icon: pandora,
    iconBg: "#E6DEDD",
    date: "Dec 2021 - Nov 2022",
    points: [
      "Developed production level smart contracts for Express Protocol(NFT Marketplace Protocol) and Aconomy(Tokenizing Real World Assets).",
      "Deployed, tested and verified the smart contracts on Polygon, Binance Smart Chain, and Ethereum networks",
      "Contributed in building JavaScript SDK for Express Protocol, simplifying NFT dApp development",
      "Participated in project documentation and technical research for protocol optimization.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "StudyNotion",
    description:
      "Fully functional web-based ed-tech platform that enables intructorrs to create and manange educational content and students to consume and rate it.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: studynotion,
    source_code_link: "https://github.com/parva-jain/StudyNotion",
    live_project_url: "https://studynotion-tan.vercel.app/",
  },
  {
    name: "Movix",
    description:
      "Web application that enables users to search from millions of Movies and TV Shows and explore the genres, casts, release date, duration, and much more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: movix,
    source_code_link: "https://github.com/parva-jain/Movix",
    live_project_url: "https://magenta-quokka-d142e8.netlify.app/",
  },
  {
    name: "3D Portfolio",
    description:
      "A portfolio webisite with 3D models and animations showcasing my overview, experiences, skills and the projects I build in the most lively way. ",
    tags: [
      {
        name: "react-three",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/parva-jain/Portfolio-website",
    live_project_url: "https://parvajain-dev.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
