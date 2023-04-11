import { component$, useContext, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Introduction } from "~/components/introduction/Introduction";
import { Slide } from "~/components/slide/Slide";
import { NavGuide } from "~/components/nav-guide/NavGuide";
import styles from "./index.module.css";
import { slides,slidesES } from "~/data/ui";
import { LanContext, ThemeContext } from "./layout";

export default component$(() => {
  const theme_context = useContext(ThemeContext);
  const lan = useContext(LanContext);

  useVisibleTask$(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      theme_context.value = "dark";
    }
  });

  return (
    <>
      <div id="info_container" class={styles.info_container}>
        <NavGuide />
        <Introduction />

        <Slide
          title={lan.value==="en"?slides[0].title:slidesES[0].title}
          content={lan.value==="en"?slides[0].content:slidesES[0].content}
          action={lan.value==="en"?slides[0].action:slidesES[0].action}
          image={"Building"}
          revert={false}
        />
        <Slide
          title={lan.value==="en"?slides[1].title:slidesES[1].title}
          content={lan.value==="en"?slides[1].content:slidesES[1].content}
          action={lan.value==="en"?slides[1].action:slidesES[1].action}
          revert={true}
          image={"ReactLogo"}
        />
        <Slide
          title={lan.value==="en"?slides[2].title:slidesES[2].title}
          content={lan.value==="en"?slides[2].content:slidesES[2].content}
          action={lan.value==="en"?slides[2].action:slidesES[2].action}
          revert={false}
          image={"NodeLogo"}
        />
        <Slide
          title={lan.value==="en"?slides[3].title:slidesES[3].title}
          content={lan.value==="en"?slides[3].content:slidesES[3].content}
          action={lan.value==="en"?slides[3].action:slidesES[3].action}
          revert={true}
          image={""}
        />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Ander Frank Carrasco: Fullstack web developer",
  meta: [
    {
      name: "description",
      content:
        "Hello there!, my name is Ander Frank Carrasco also known as anderfrankdev in social media. I'm a fullstack web developer with a passion for crafting beautiful, functional, and user-friendly websites. My goal is to create web experiences that not only look great but also provide a seamless user experience.",
    },
  ],
};
