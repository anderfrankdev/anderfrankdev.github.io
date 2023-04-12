import { component$, useContext, useVisibleTask$ } from "@builder.io/qwik";
import { LanContext } from "~/routes/layout";
import styles from "./LastSlide.module.css"
export const LastSlide = component$<any>(() => {
  const lan = useContext(LanContext);

  useVisibleTask$(async ({ track }) => {
    track(lan);
    
  });

  return (
    <section class={styles.container}>
      <div class={styles.section} data-first>
        <div>
          <h2 class={styles.title}>
            I'm building stuff
          </h2>
          <p class={styles.content}>
            New open source projects, web apps, server apps, and soon mobile applications.
          </p>
          <div class={styles.button}>
            See my work 
            <svg width="72" height="22" viewBox="0 0 72 22" xmlns="http://www.w3.org/2000/svg" class="bow-arrow"><path fill="none" stroke-width="2" stroke-miterlimit="0" d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"></path></svg>
          </div>
        </div>
        
      </div>
      <div class={styles.section}>
        <div>
          <h2 class={styles.title}>
            I am writing new things
          </h2>
          <p class={styles.content}>
            About: the reactjs ecosystem, new javascript frameworks, tech news, and general programming.
          </p>
          <div class={styles.button}>
            See my blog
            <svg width="72" height="22" viewBox="0 0 72 22" xmlns="http://www.w3.org/2000/svg" class="bow-arrow"><path fill="none" stroke-width="2" stroke-miterlimit="0" d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"></path></svg>
          </div>
        </div>
        
      </div>
    </section>
  );
});
