import { component$, useContext,useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { LanContext, ThemeContext } from "../layout";
import css from "./about.css?inline";
import { knowledges } from "~/data/workUi";

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
      class={"w-screen min-h-screen pt-14 px-24"}
    >
    	<h1 class={"text-6xl font-bold my-8"}>Acerca de mi</h1>
    	<p class={"text-xl my-4"}>Soy un desarrollador apasionado por resolver problemas y ayudar a otras personas a lograr sus objetivos. Actualmente, estoy cursando estudios en la Universidad Central de Venezuela en la Licenciatura en Ciencias Estadísticas y en la Universidad Nacional Abierta en la Licenciatura en Matemáticas.</p>

		<p class={"text-xl my-4"}>Desde que comencé a programar a los 20 años, he estado trabajando en proyectos personales de código abierto que me han permitido desarrollar mis habilidades en programación y aprender nuevas tecnologías. Me apasiona encontrar soluciones creativas y eficientes a los problemas, y siempre estoy buscando formas de utilizar la tecnología para mejorar la vida de las personas y proteger nuestro planeta.</p>

		<p class={"text-xl my-4"}>Mis intereses son variados y van desde la matemática y la física, hasta el ajedrez y el fútbol. Me encanta la naturaleza y la ecología, y siempre estoy buscando formas de utilizar la tecnología para ayudar a proteger nuestro planeta.</p>

		<p class={"text-xl my-4"}>En mi tiempo libre, disfruto pasar tiempo con mi familia, y también me gusta salir a caminar y explorar la naturaleza. Como desarrollador, me enfoco en aprender continuamente y mejorar mis habilidades, y estoy emocionado por las oportunidades que el futuro pueda traer.</p>
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
