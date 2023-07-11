import { component$, useContext, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { LanContext, ThemeContext } from "../layout";
import css from "./about.css?inline";
import { interestingFactsEs, introduccionES, introductionEn } from "~/data/about/aboutData";
import {interestingFacts} from "~/data/about/aboutData";
import { AboutCards } from "~/components/aboutCards/aboutCards";
import { ContactForm } from "~/components/ContactForm/ContactForm";

export default component$(() => {
  const theme = useContext(ThemeContext);
  const lan = useContext(LanContext);

  useVisibleTask$(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      theme.value = "dark";
    }
  });

  return (
    <>
    <article
      id=""
      class={"w-screen flex min-h-screen pt-14 px-24 items-center"}
    >
      <div class={""}>
        <h1 class={"text-6xl font-bold my-8"}>
          {lan.value === "es" ? "Acerca de mi" : "About me"}
        </h1>
        <div>
          {lan.value === "es"
            ? introduccionES.map((p, i) => (
                <p
                  dangerouslySetInnerHTML={p}
                  class={"text-xl sm:mr-8 my-8"}
                  key={i}
                >
                  {" "}
                </p>
              ))
            : introductionEn.map((p, i) => (
                <p
                  dangerouslySetInnerHTML={p}
                  class={"text-xl sm:mr-8 my-8"}
                  key={i}
                >
                  {" "}
                </p>
              ))}
        </div>
      </div> 
      <img src="/1688932051522.jpg" alt="" class={"w-[350px] h-[460px]"} />
    </article>
    <hr class="w-1/2 m-auto mb-8 mt-8" />
    <section class="">
      <h2 class={"text-4xl text-center my-8"}>Interesting facts</h2>
      <AboutCards cardsInfo={lan.value==="en"?interestingFacts:interestingFactsEs} />
    </section>
    <ContactForm />
    </>
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
  styles: [
    {
      style: css,
    },
  ],
};
