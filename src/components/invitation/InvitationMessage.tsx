import { component$, useVisibleTask$ } from "@builder.io/qwik";
import styles from "./invitation.module.css";

export const InvitationMessage = component$(() => {

  useVisibleTask$(() => {
    const element = document.getElementById("invitation")!;

    element.style.color = "#fff";
  });

  return (
    <div class={styles.invitation} id="invitation">
      <h2>Let's build something together</h2>
      <p>
        You may need a web developer to design a web application or a website
        for your business, or maybe You already have your own app and just need
        another player for your team, in both cases I will be excited to work
        with you to get your goals done, from single-page apps to static sites,
        or in the server with an API.
      </p>
    </div>
  );
});
