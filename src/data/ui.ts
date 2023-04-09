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
      text: "About my approach",
      link: "#",
    },
  },
];
