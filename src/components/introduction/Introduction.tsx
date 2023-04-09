import { component$, useVisibleTask$ } from "@builder.io/qwik";
import styles from "./introduction.module.css";
import { FunnyText } from "../ui/FunnyText/FunnyText";

export const Introduction = component$<any>(() => {
  useVisibleTask$(async () => {
    const nameLatters = document.querySelectorAll(".shake");
    setTimeout(() => {
      nameLatters.forEach((l, i) => {
        setTimeout(() => {
          l.classList.toggle("animate_shake");

          setTimeout(() => {
            l.classList.toggle("animate_shake");
          }, 400);
        }, i * 400 + 1000);
      });
    }, 500);
  });

  return (
    <section class={styles.section}>
      <div class={styles.intro} id="intro">
        <div class={"animate__animated animate__fadeInDown " + styles.img}>
          <img src="/anderfrankdev_light.jpg" alt="" />
        </div>
        <div
          class={"animate__animated animate__fadeInDown " + styles.presentation}
        >
          <span>
            {" "}
            Hi, my name is&nbsp;
            <span class={styles.name}>
              <FunnyText content="Ander" letterClass="shake" />
            </span>
          </span>
          <p class={styles.description}>
            I'm a <b>passionate fullstack web developer</b> from Caracas
            Venezuela.
          </p>
        </div>
      </div>
      <div class={`${styles.air} ${styles.air1}`} data-wave></div>
      <div class={`${styles.air} ${styles.air2}`} data-wave></div>
      <div class={`${styles.air} ${styles.air3}`} data-wave></div>
      <div class={`${styles.air} ${styles.air4}`} data-wave></div>
    </section>
  );
});
