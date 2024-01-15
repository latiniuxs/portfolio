import farm from '../assets/Farm.jpg'
import metabnb from '../assets/metabnb.jpg'
import medDoc from '../assets/medDoc.jpg'
import TODO from '../assets/TODO.jpg'
import imageGallery from '../assets/imageGallery.jpg'
import MovieBox from '../assets/MovieBox.jpg'
import webwing from '../assets/webwing.jpg'

const Projects = [
  {
    title: "FarmFortify",

    description: "A web application built collaboratively for farmers ",

    preview:farm,

    link: "https://farmfortify.com/",

    technologies: ["React"],
  },

  {
    title: "MetaBnB",

    description: "Responsive UI for a metaverse housing marketplace",

    preview: metabnb,

    link: "https://oladetohun1.github.io/metabnb/",

    technologies: ["React"],
  },

  {
    title: "medDoc",

    description:
      "A medical web application built collaboratively on web5 technology ",

    preview: medDoc,

    link: "https://med-doc-sage.vercel.app/",

    technologies: ["React"],
  },

  {
    title: "Todo App",

    description:
      "a todo app that helps you to manage tasks at hand. it has features such as drag-and-drop functionality for  task organization. Create, edit, and delete tasks with a click, and re-arrange them",

    preview: TODO,

    link: "https://todo-orcin-eta.vercel.app",

    technologies: ["React", " react-dnd", "tailwindcss"],
  },

  {
    title: "Image Gallery",

    description:
      "This project is a fully functional and responsive image gallery built using React, Vite, and Tailwind CSS. The gallery allows users to log in, view a collection of images, and interact with them using drag-and-drop functionality.",

    preview: imageGallery,

    link: "https://image-gallery-sepia-seven.vercel.app",

    technologies: ["React", "Firebase"],
  },

  {
    title: "MovieBox",

    description:
      "A movie discovery web application that allows users to search for movies, view details about them, and save their favorite movies.",

    preview: MovieBox,

    link: "https://stage-two-henna.vercel.app/",

    technologies: ["React", "Api"],
  },

  {
    title: "Webwing",

    description:
      "A Digital Agency Web project: a team project created by the the members of Geek Hive Community to enhance the growth, skill and confidence of every member of this community",

    preview: webwing,

    link: "https://web-wing-geekhive-team-project-one.netlify.app",

    technologies: ["Javascript"],
  },
];

export default Projects;
