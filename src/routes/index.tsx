import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Introduction } from "~/components/introduction/Introduction";
import { Invitation } from "~/components/invitation/Invitation";

export default component$(() => {
  return (
    <>
      <div class="info-container">
        <Introduction />
        <Invitation />
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
