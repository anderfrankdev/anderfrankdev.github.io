
export const workSlides: UiData["slide"][] = [
  {
    title: "About my work",
    content: `As a fullstack web developer I'm focused on creating  websites or applications that provide value to my clients and end users in the shortest possible time and budget. I'm drive to make the web more beautiful, faster, easier to use, and accesible.`,
    action: {
      text: "About my approach",
      link: "#",
    },
  },
  {
    title: "Development consideration",
    content: `I know that your project has specific needs, and not every tool can be a perfect fit for it, that's why I will take a pragmatic approach and choose the tech that adapts the best to your requirements to allow you to scale while you save money, time, and effort. So you can be sure that I neither will use tech for tech's sake nor choose the lest popular frameworks or tools.`,
    action: {
      text: "About my approach",
      link: "#",
    },
  },
  {
    title: "Let's build something good",
    content: `My work ethic revolves time of development because I know how important it is to you and me to have enough time and money to invest in our health, family and goals, at the same time we move forward and adapt quickly in such a fast changing world. I have the dream of helping to construct a better planet to live in, and I see the software as a tool to accomplish this through small actions. I think that as a person I must take care that my work does no harm, but instead it helps other people, so if your project promotes diversity, sustainability, or generally is going to have a positive impact, then I'd love to work with you.`,
    action: {
      text: "About my approach",
      link: "#",
    },
  }
];
export const workSlidesES: UiData["slide"][] = [
  {
    title: "Construyamos algo juntos",
    content: `Puede que necesites un desarrollador web para diseñar una aplicación o un sitio web para tu negocio, o tal vez ya tienes tu propia aplicación y sólo necesitas otro jugador para tu equipo, en ambos casos voy a estar encantado de trabajar contigo para conseguir tus objetivos. Desde aplicaciones de una sola página hasta sitios web estáticos, o en el servidor con una API o una app SSR.`,
    action: {
      text: "Acerca de mi enfoque",
      link: "#",
    },
  }
];

export interface Project{
  readonly photo:string;
  readonly name:string;
  readonly repositoryLink:string;
  readonly description:string;
  readonly stackUsed:string[];
  readonly demoLink:string;
}

export const projects:Project[] = [
  {
    photo:"/heroapp.png",
    name:"Hero app",
    repositoryLink:"https://github.com/anderfrankdev/heros-app",
    demoLink:"https://herosapp-ander.netlify.app/",
    stackUsed:["Reactjs", "tailwindcss" , "react-router-dom"],
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla interdum mattis. Fusce pharetra erat tincidunt"
  }
]