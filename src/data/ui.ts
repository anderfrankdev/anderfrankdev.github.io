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
        or in the server with an API or a server side rendered app.`,
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
];
