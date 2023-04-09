import { component$, useContext, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Introduction } from "~/components/introduction/Introduction";
import { Slide } from "~/components/slide/Slide";
import { NavGuide } from "~/components/nav-guide/NavGuide";
import styles from "./index.module.css";
import { slides } from "~/data/ui";
import { ThemeContext } from "./layout";

export default component$(() => {
  const theme_context = useContext(ThemeContext);

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
          title={slides[0].title}
          content={slides[0].content}
          action={slides[0].action}
          image={"Building"}
          revert={false}
        />
        <Slide
          title={slides[1].title}
          content={slides[1].content}
          action={slides[1].action}
          revert={true}
          image={"ReactLogo"}
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
