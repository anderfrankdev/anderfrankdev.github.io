import { component$, useContext, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { LanContext, ThemeContext } from "../layout";
import "./styles.css"
import { workSlides, workSlidesES } from "~/data/ui";
import { Slide } from "~/components/slide/Slide";

export default component$(() => {
  const theme_context = useContext(ThemeContext);
  const lan = useContext(LanContext);

  useVisibleTask$(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      theme_context.value = "dark";
    }
  });

  return (
    <div id="" class={""}>
        <Slide
          title={lan.value==="en"?workSlides[0].title:workSlidesES[0].title}
          content={lan.value==="en"?workSlides[0].content:workSlidesES[0].content}
          action={""}
          revert={false}
          image={""}
          fullscreen={true}
        />
        <Slide
          title={lan.value==="en"?workSlides[1].title:workSlidesES[1].title}
          content={lan.value==="en"?workSlides[1].content:workSlidesES[1].content}
          action={""}
          revert={false}
          image={"CompuImg"}
        />
        <Slide
          title={lan.value==="en"?workSlides[2].title:workSlidesES[2].title}
          content={lan.value==="en"?workSlides[2].content:workSlidesES[2].content}
          action={""}
          revert={false}
        />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Ander Frank Carrasco: Fullstack web developer",
  meta: [
    {
      name: "description",
      content:
        "Hi, my name is Ander Frank Carrasco also known as anderfrankdev on social media and I'm a passionate fullstack web developer from Caracas Venezuela.",
    },
  ],
};
