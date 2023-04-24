import { component$, useContext, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { LanContext, ThemeContext } from "../layout";
import styles from "./work.in.css?inline";
import { projects, workSlides, workSlidesES } from "~/data/workUi";
import { createProjectCard } from "~/components/work/Project";

export default component$(() => {
  const theme = useContext(ThemeContext);
  const lan = useContext(LanContext);

  useVisibleTask$(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      theme.value = "dark";
    }

  });

  return (
    <div id="" class={`
      mt-32 min-h-screen
      w-screen font-bold
    `}>
        <article 
          class={`
            px-4 sm:px-32
          `}  
        >
          <section class={"my-8"}>
            <h1 class={"text-6xl my-8 py-4"}>About my work</h1>
            <p class={"font-normal text-lg"}>{
              lan.value==="en"
              ? workSlides[0].content
              : workSlidesES[0].content
            }</p> 
          </section>
          <hr class={"w-1/2 m-auto mb-16"} />
          <section>
            <h2 
              class={`
                text-5xl text-center
                py-4
              `}
            >
              {
                lan.value==="en"
                ?"Highlighted projects"
                :"Mis mejores projectos"
              }
            </h2>
            <p class={"font-light text-center"}>{
              lan.value==="en"
              ?"Take a look at my best projects at the moment!"
              :"Dale un vistazo a mis mejores projectos."
            }</p>
            <div class="flex flex-wrap mt-16 justify-center">
              {projects.map(createProjectCard)}          
            </div>
          </section>
        </article>
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
  styles:[
    {
      style:styles
    }
  ]
};
