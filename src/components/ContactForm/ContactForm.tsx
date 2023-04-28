import {
  component$,
  $,
  useContext,
  useVisibleTask$,
  useStore,
} from "@builder.io/qwik";
import styles from "./contactform.module.css";
import { LanContext } from "~/routes/layout";

const eAddr = "anderfrankdev@gmail.com";
export const ContactForm = component$<any>(() => {
  const lan = useContext(LanContext);
  const elements = useStore<any>({ elements: [] });
  useVisibleTask$(() => {
    elements.elements = [
      ...document
        .querySelector(`.${styles.container}`)!
        .querySelectorAll<any>("input:not([type=submit]), textarea"),
    ];
  });

  const onSubmit = $(async (e: any) => {
    e.preventDefault();
    const data = {};
    //@ts-ignore
    elements.elements.forEach((e: any) => {
      //@ts-ignore
      data[e.name] = e.value;
    });
    const res = await fetch(`https://formsubmit.co/ajax/${eAddr}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(res);
  });

  return (
    <section class={styles.container}>
      <img src="" alt="" />
      <h2 class={"my-[30px] font-bold text-[36px]"}>
        {lan.value === "en" ? "Get in touch" : "Contactame"}
      </h2>
      <div>
        <div>
          <h3 class={"font-bold text-2xl sm:mb-6"}>
            {lan.value === "en" ? "Don't be shy" : "Con confianza"}
          </h3>
          <p class={"sm:mb-6 text-base font-normal"}>
            {lan.value === "en"
              ? "Feel free to get in touch with me."
              : "Puedes sentirte libre de ponerte en contacto conmigo."}
          </p>
          <div
            class={
              "flex mt-4  mb-4 sm:mb-0 sm:mt-0 sm:justify-start justify-end sm:mt-8"
            }
          >
            <a
              class={""}
              target="_blank"
              href="https://www.linkedin.com/in/anderfrankdev"
            >
              <img src="/linkedin.svg" width={32} height={32} alt="" />
            </a>
            <a
              class={""}
              href="https://twitter.com/anderfrankdev"
              target="_blank"
            >
              <img src="/twitter.svg" width={32} height={32} alt="" />
            </a>
          </div>
        </div>

        <form
          class={"text-xs text-black font-normal"}
          onSubmit$={onSubmit}
          preventdefault:submit
        >
          <div>
            <input
              class={"focus:outline-none mb-2"}
              required={true}
              placeholder={lan.value === "en" ? "Your name" : "Tu nombre"}
              type="text"
              name="name"
            />
            <input
              class={"focus:outline-none mb-2"}
              required={true}
              placeholder={lan.value === "en" ? "Your email" : "Tu email"}
              type="email"
              name="email"
            />
          </div>
          <input
            class={"focus:outline-none mb-0"}
            type="text"
            name="subject"
            placeholder={lan.value === "en" ? "Your subject" : "Tu motivo"}
          />
          <textarea
            class={"focus:outline-none mt-0 mb-2"}
            required={true}
            name="message"
            id=""
            placeholder={lan.value === "en" ? "Your message" : "Tu mensaje"}
            rows={7}
          ></textarea>
          <input
            class={
              "dark:text-white dark:border-white focus:outline-none mb-0 mt-0"
            }
            type="submit"
            value={lan.value === "en" ? "SEND MESSAGE" : "ENVIAR"}
          />
        </form>
      </div>
    </section>
  );
});
