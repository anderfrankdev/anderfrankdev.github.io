import type { UiData } from "./ui";

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
  },
];
export const workSlidesES: UiData["slide"][] = [
  {
    title: "Sobre mi trabajo",
    content: `Como desarrollador web fullstack estoy centrado en la creación de sitios web o aplicaciones que proporcionan valor a mis clientes y usuarios finales en el menor tiempo y presupuesto posible. Mi objetivo es hacer la web más bonita, rápida, fácil de usar y accesible.`,
    action: {
      text: "About my approach",
      link: "#",
    },
  },
  {
    title: "Consideración de desarrollo",
    content: `Sé que tu proyecto tiene necesidades específicas, y no todas las herramientas pueden ser un ajuste perfecto para él, es por eso que voy a tomar un enfoque pragmático y elegir la tecnología que mejor se adapte a sus necesidades para que pueda escalar mientras se ahorra dinero, tiempo y esfuerzo. Así que puedes estar seguro de que no utilizaré la tecnología por la tecnología ni elegiré los marcos de trabajo o herramientas menos populares.`,
    action: {
      text: "Acerca de mi enfoque",
      link: "#",
    },
  },
  {
    title: "Construyamos algo increible",
    content: `Mi ética de trabajo gira en torno al tiempo de desarrollo porque sé lo importante que es para ti y para mí disponer de tiempo y dinero suficientes para invertir en nuestra salud, familia y objetivos, al mismo tiempo que avanzamos y nos adaptamos rápidamente en un mundo tan cambiante. Tengo el sueño de ayudar a construir un planeta mejor para vivir, y veo el software como una herramienta para lograrlo a través de pequeñas acciones. Creo que como persona debo cuidar que mi trabajo no haga daño, sino que ayude a otras personas, así que si tu proyecto promueve la diversidad, la sostenibilidad, o en general va a tener un impacto positivo, entonces me encantaría trabajar contigo.`,
    action: {
      text: "Acerca de mi enfoque",
      link: "#",
    },
  },
];

export interface Project {
  readonly photo: string;
  readonly name: string;
  readonly repositoryLink: string;
  readonly description: string;
  readonly stackUsed: string[];
  readonly demoLink: string;
}

export const projects: Project[] = [
  {
    photo: "/gjpLanging.png",
    name: "GJP Landing page",
    repositoryLink: "#",
    demoLink: "https://gjp.vercel.app/",
    stackUsed: ["Nextjs", "tailwindcss", "react","typescript","Git","EsLint","VSCode"],
    description:
      "This is the landind page of the company GJP Servicios, a wireless internet provider located in the parish Nueva Cua in Venezuela. The page is made in next with typescript.",
  },
  {
    photo: "/merncalendar.jpeg",
    name: "Mern Calendar",
    repositoryLink: "https://github.com/anderfrankdev/MERN-Calendar",
    demoLink: "https://ander-mern-calendar.netlify.app/",
    stackUsed: ["Reactjs", "tailwindcss", "react-router-dom","Redux","Docker","GraphQL"],
    description:
      "This is a web application that allows users to create, edit, delete and view events on a calendar. It is built with the MERN stack, which consists of MongoDB, Express.js, React.js and Node.js.",
  }
];

interface knowledge {
  name: string;
  tools: { name: string; image: string }[];
}

export const knowledges: knowledge[] = [
  {
    name: "Backend frameworks",
    tools: [{ name: "Expressjs", image: `/ExpressjsIcon.svg` }],
  },
  {
    name: "Databases",
    tools: [{ name: "MongoDB", image: `/MongoDBIcon.svg` }],
  },
  {
    name: "Tools",
    tools: [
      { name: "Typescript", image: `/TypescriptIcon.svg` },
      { name: "Javascript", image: `/JavascriptIcon.svg` },
      { name: "Git", image: `/GitIcon.svg` },
      { name: "Nodejs", image: `/NodejsIcon.svg` },
      { name: "Eslint", image: `/EslintIcon.svg` },
      { name: "Vite", image: `/ViteIcon.svg` },
      { name: "Prettier", image: `/PrettierIcon.svg` },
      { name: "Docker", image: `/DockerIcon.svg` },
    ],
  },
  {
    name: "Front-end frameworks",
    tools: [
      { name: "React", image: `/ReactIcon.svg` },
      { name: "Qwik", image: `/QwikIcon.svg` },
      { name: "Preact", image: `/PreactIcon.svg` },
      { name: "Nextjs", image: `/NextjsIcon.svg` },
    ],
  },
  {
    name: "CSS frameworks",
    tools: [{ name: "Tailwind", image: `/TailwindIcon.svg` }],
  },
  {
    name: "Components UI libraries",
    tools: [{ name: "Flowbite", image: `/FlowbiteIcon.svg` }],
  },
  {
    name: "Libraries",
    tools: [
      { name: "Testing library", image: `/Testing libraryIcon.svg` },
      { name: "Vitest", image: `/VitestIcon.svg` },
      { name: "Jest", image: `/JestIcon.svg` },
      { name: "React router", image: `/ReactRouterIcon.svg` },
      { name: "Axios", image: `/AxiosIcon.svg` },
      { name: "Redux", image: `/ReduxIcon.svg` },
      { name: "GraphQL", image: `/GraphQLIcon.svg` },
      { name: "Apollo", image: `/ApolloIcon.svg` },
      { name: "Firebase", image: `/FirebaseIcon.svg` },
    ],
  },
];
