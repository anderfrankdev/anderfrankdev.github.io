
export interface UiData {
  slide: {
    title: string;
    content: string;
    action: { text: string; link: string };
  };
}

export const slides: UiData["slide"][] = [
  {
    title: "Let's build something together",
    content: `You may need a web developer to design a web application or a website
        for your business, or maybe you already have your own app and just need
        another player for your team, in both cases I will be excited to work
        with you to get your goals done. From single-page apps to static sites,
        or in the server with an API or a SSR app.`,
    action: {
      text: "About my approach",
      link: "#",
    },
  },
  {
    title: "Client side development",
    content: `When I work  in the frontend my main goal is to create amazing, good looking and highly interactive interfaces while keeping the best performance and maximum attention to every detail. I prioritize accesibility, responsive design and writing clean, efficient, and maintainable code.`,
    action: {
      text: "My frontend stack",
      link: "#",
    },
  },
  {
    title: "Server side development",
    content: `On the backend I heavily focus on the security and scalability of web servers, to accomplish this I implement security measures, authentication protocols, data validation and error handling to ensure the reliability and security of the applications. I also document every API I work on, no matter if it is  RESTful or graphql.`,
    action: {
      text: "My backend stack",
      link: "#",
    },
  },
  {
    title: "Skills",
    content: `As a developer and a human being the skill that I have taken most care of is my communication. Before finding my passion for software engeneering I worked as a salesman at Interkontakt C.A. with the objective of practicing my communication and recently I started a new blog to practice my writing, so I love to describe myself as a good communicator both in English and Spanish. I am an empathetic person who prioritize the needs of my clients and end users. I also like to take responsibilities inside teams and offer solutions. `,
    action: {
      text: "About me",
      link: "#",
    },
  },
];
export const slidesES: UiData["slide"][] = [
  {
    title: "Construyamos algo juntos",
    content: `Puede que necesites un desarrollador web para diseñar una aplicación o un sitio web para tu negocio, o tal vez ya tienes tu propia aplicación y sólo necesitas otro jugador para tu equipo, en ambos casos voy a estar encantado de trabajar contigo para conseguir tus objetivos. Desde aplicaciones de una sola página hasta sitios web estáticos, o en el servidor con una API o una app SSR.`,
    action: {
      text: "Acerca de mi enfoque",
      link: "#",
    },
  },
  {
    title: "Desarrollo del lado del cliente",
    content: `Cuando trabajo en el frontend mi principal objetivo es crear interfaces sorprendentes, de buen aspecto y altamente interactivas manteniendo el mejor rendimiento y la máxima atención a cada detalle. Priorizo la accesibilidad, el diseño responsivo y la escritura de código limpio, eficiente y mantenible.`,
    action: {
      text: "Ver frontend stack",
      link: "#",
    },
  },
  {
    title: "Desarrollo del lado del servidor",
    content: `En el backend me enfoco fuertemente en la seguridad y escalabilidad de los servidores web, para lograr esto implemento medidas de seguridad, protocolos de autenticación, validación de datos y manejo de errores para asegurar la confiabilidad y seguridad de las aplicaciones. También documento cada API en la que trabajo, no importa si es RESTful o graphql.`,
    action: {
      text: "Ver backend stack",
      link: "#",
    },
  },
  {
    title: "Habilidades",
    content: `Una de las habilidades que más he cuidado es mi comunicación. Antes de encontrar mi pasión por la ingeniería de software trabajé como vendedor en Interkontakt C.A. con el objetivo de mejorar mi comunicación y recientemente comencé un nuevo blog para practicar mi escritura, por lo que me encanta describirme como un buen comunicador tanto en inglés como en español. Soy una persona empática que prioriza las necesidades de mis clientes y usuarios finales. También me gusta asumir responsabilidades dentro de equipos y ofrecer soluciones.`,
    action: {
      text: "Sobre mi",
      link: "#",
    },
  },
];
export const workSlides: UiData["slide"][] = [
  {
    title: "About my work",
    content: `As a fullstack web developer I'm focused on creating  websites or applications that are amazing and provide value to my clients and end users in the shortest time and budget possible. I'm drive to make the web more beautiful, faster, easier to use, and accesible.`,
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