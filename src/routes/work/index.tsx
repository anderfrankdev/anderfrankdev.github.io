import { component$, useContext, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { LanContext, ThemeContext } from "../layout";
import styles from "./work.in.css?inline";
import { knowledges, projects, workSlides, workSlidesES } from "~/data/workUi";
import { createProjectCard } from "~/components/work/Project";
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
          <section>
            <h2 class={`text-5xl my-8 py-4`}>{
              lan.value==="en"
              ? workSlides[1].title
              : workSlidesES[1].title
            }</h2>
            <p class={`font-normal text-lg`}>{
              lan.value==="en"
              ? workSlides[1].content
              : workSlidesES[1].content
            }</p>
          </section>
          <section class={"mt-20"}>

            <h2 class={"text-3xl sm:text-5xl my-8 font-bold"}>{
              lan.value==="en"? "📚 Knowledges":"📚 Conocimientos"
            }</h2>
            {...knowledges.map((knowledge)=>{

              return (
                <div key={knowledge.name}>
                  <h3 class={"text-2xl font-normal my-4"}>{knowledge.name}</h3>
                  <ul class="flex mb-8 mt-8 px-0 justify-start flex-wrap gap-8">
                    {knowledge.tools.map(tool=>
                      <li key={tool.name} class={"dark:bg-red-900 dark:hover:bg-black hover:bg-red-800 flex rounded-xl mx-4 pl-4 pr-6 items-center py-2 text-sm bg-black relative"}><span class={"text-white"}>{tool.name}</span>&nbsp; &nbsp; &nbsp; &nbsp; <span class={"absolute right-[-1rem] rounded-full p-3 bg-white"}><img width={24} height={24} class="" src={tool.image} /></span> </li>
                    )}
                  </ul>
                </div>
              )
            })}
          </section>
          <hr class={"w-1/2 m-auto mb-8 mt-20"} />
          <section class={"mt-20 mb-16"}>
            <h2 class={`text-5xl my-8 py-4`}>{
              lan.value==="en"
              ? workSlides[2].title
              : workSlidesES[2].title
            }</h2>
            <p class={`font-normal text-lg`}>{
              lan.value==="en"
              ? workSlides[2].content
              : workSlidesES[2].content
            }</p>
          </section>
        </article>
        <ContactForm/>
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
