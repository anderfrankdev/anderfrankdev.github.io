import { component$, useContext, useVisibleTask$ } from "@builder.io/qwik";
import styles from "./introduction.module.css";
import { FunnyText } from "../ui/FunnyText/FunnyText";
import { LanContext, ThemeContext } from "~/routes/layout";

export const Introduction = component$<any>(() => {
  const theme = useContext(ThemeContext);
  const lan = useContext(LanContext);

  useVisibleTask$(async ({ track }) => {
    track(theme);
    const nameLatters = document.querySelectorAll<any>(".shake");
    const nameLattersClass =
      theme.value != "light" ? "animate_shake" : "animate_shake_light";

    if (theme.value === "light") {
      nameLatters.forEach((l) => {
        l.dataset.theme = "light";
      });
    } else {
      nameLatters.forEach((l) => {
        l.removeAttribute("data-theme");
      });
    }
    setTimeout(() => {
      nameLatters.forEach((l, i) => {
        setTimeout(() => {
          l.classList.toggle(nameLattersClass);
          setTimeout(() => {
            l.classList.toggle(nameLattersClass);
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
            {lan.value==="en"
              ? "Hi, my name is"
              : "Hola, me llamo"}&nbsp;
            <span class={styles.name+" mt-0"}>
              <FunnyText content="Ander" letterClass="shake" />
            </span>
          </span>
          <p class={styles.description +" mt-8"}>
            {
              lan.value==="en"
              ? "I'm a"
              : "Soy un"
            } 

            <b class="font-bold">
              {
                lan.value==="en"
                ? " passionate fullstack web developer "
                : " apasionado desarrollador web fullstack "
              }
            </b>
            {
              lan.value==="en"
              ? "from Caracas Venezuela."
              : "residenciado en Caracas Venezuela."
            }
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
