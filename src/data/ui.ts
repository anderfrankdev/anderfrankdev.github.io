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
        or in the server with an API.`,
    action: {
      text: "About my approach",
      link: "#",
    },
  },
  {
    title: "Client side development",
    content: `You may need a web developer to design a web application or a website
        for your business, or maybe you already have your own app and just need
        another player for your team, in both cases I will be excited to work
        with you to get your goals done. From single-page apps to static sites,
        or in the server with an API.`,
    action: {
      text: "About my approach",
      link: "#",
    },
  },
];
