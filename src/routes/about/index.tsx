import { component$, useContext,useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { LanContext, ThemeContext } from "../layout";
import css from "./about.css?inline";
import { knowledges } from "~/data/workUi";
import { introduccionES, introductionEn } from "~/data/about/aboutData";
export default component$(() => {
  const theme = useContext(ThemeContext);
  const lan = useContext(LanContext);

  useVisibleTask$(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      theme.value = "dark";
    }
  });

  return (
    <article
      id=""
      class={"w-screen flex min-h-screen pt-14 px-24 items-center"}
    >
      <div class={""}>
      	<h1 class={"text-6xl font-bold my-8"}>{
          lan.value==="es" ?  "Acerca de mi":"About me"
        }</h1>
        <div >
          {
            lan.value==="es" 
              ? introduccionES.map((p,i)=><p dangerouslySetInnerHTML={p} class={"text-xl sm:mr-8 my-8"} key={i}> </p>)
              : introductionEn.map((p,i)=><p dangerouslySetInnerHTML={p} class={"text-xl sm:mr-8 my-8"} key={i}> </p>)
          }
        </div>
      </div>
      <img src="/about_page.jpg" alt="" class={"w-[350px] h-[460px]"}/>
    </article>
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
