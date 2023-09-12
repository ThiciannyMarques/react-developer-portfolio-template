// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.png"
import logo from "./assets/logo2.svg"
// Profile Image
import profile from "./assets/profile.jpg"
// Tech stack images
import aws from "./assets/techstack/aws.png"
import bootstrap from "./assets/techstack/bootstrap.png"
import css from "./assets/techstack/css.png"
import figma from "./assets/techstack/figma.png"
import git from "./assets/techstack/git.png"
import github from "./assets/techstack/github.png"
import html from "./assets/techstack/html.png"
import js from "./assets/techstack/js.png"
import laravel from "./assets/techstack/laravel.png"
import npm from "./assets/techstack/npm.png"
import php from "./assets/techstack/php.png"
import postman from "./assets/techstack/postman.png"
import react from "./assets/techstack/react.png"
import redux from "./assets/techstack/redux.png"
import sass from "./assets/techstack/sass.png"
import tailwind from "./assets/techstack/tailwind.png"
import vscode from "./assets/techstack/vscode.png"
import vue from "./assets/techstack/vue-js.png"
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg"
import projectImage2 from "./assets/projects/project2.jpg"
import projectImage3 from "./assets/projects/project3.jpg"
import projectImage4 from "./assets/projects/project4.jpg"
import projectImage5 from "./assets/projects/project5.jpg"
import projectImage6 from "./assets/projects/project6.jpg"

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Thicianny Marques",
  tagline: "Fullstack Developer",
  img: profile,
  about: ``,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/thicianny-marques-2849a61b4/",
  github: "https://github.com/ThiciannyMarques",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Frontend Web Developer",
    Company: `Viper`,
    Location: "Pará - Brasil",
    Type: "Internship",
    Duration: "Out 2019 - Dec 2019",
  },
  {
    Position: "Fullstack Developer",
    Company: `Policia Civil do Estado do Pará`,
    Location: "Pará - Brasil",
    Type: "Internship",
    Duration: "dec 2020 - Dec 2021",
  },
  {
    Position: "Frontend Developer",
    Company: `Compass Uol`,
    Location: "Brasil",
    Type: "Full Time",
    Duration: "Jan 2022 - Atual",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Frontend Development",
    Company: "Udemy",
    Location: "Online",
    Duration: "Jan 2021 - Aug 2021",
  },
  {
    Position: "Ciência da Computação",
    Company: `Unama`,
    Location: "Brasil",
    Duration: "Aug 2019 - Present",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  aws: aws,
  bootstrap: bootstrap,
  css: css,
  figma: figma,
  git: git,
  github: github,
  js: js,
  html: html,
  laravel: laravel,
  npm: npm,
  php: php,
  postman: postman,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  vscode: vscode,
  vue: vue
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Policia Civil",
    image: projectImage1,
    description: `Criação e melhoria do site oficial da policia.`,
    techstack: "HTML/CSS, JavaScript, Vue.js, PHP, Laravel, Postgres",
    previewLink: "https://www.pc.pa.gov.br",
  },
  {
    title: "Vivo Empresas",
    image: projectImage2,
    description: `Ecommerce feito para vendas B2B`,
    techstack: "Adobe AEM, JavaScript, Vue.js, Java, Dispatcher",
    previewLink: "https://lojaempresas.vivo.com.br/content/b2b/e-commerce-equipamentos/vitrine.html",
  },
  {
    title: "Preview card",
    image: projectImage3,
    description: `Projeto de teste para estudos de diferentes formas de fazer um card`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://stats-preview-card-component-main-cyan.vercel.app",

  },
  {
    title: "Order Summary",
    image: projectImage4,
    description: `Estudo para fixação de conteudo`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://order-summary-component-main-steel.vercel.app",

  },
  {
    title: "Acotar",
    image: projectImage5,
    description: `Esqueleton de blog de leitura e resumo`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://thiciannymarques.github.io/AcotarBooks/",

  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "thicianny14@gmail.com",
  phone: "+55 85 991133102",
};
