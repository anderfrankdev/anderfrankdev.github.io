import { component$, useContext, useVisibleTask$ } from "@builder.io/qwik";
import { LanContext, ThemeContext } from "~/routes/layout";
import styles from "./LastSlide.module.css"
export const LastSlide = component$<any>(() => {
  const lan = useContext(LanContext);
  const theme = useContext(ThemeContext);

  useVisibleTask$(async ({ track }) => {
    track(lan);
    
  });

  return (
    <section class={styles.container} data-dark={theme.value==="dark"?"true":"false"}>
      <div class={styles.section} data-first>
        <div>
          <h2 class={styles.title}>
            {lan.value==="en"?"I'm building stuff":"Estoy construyendo cosas"}
          </h2>
          <p class={styles.content}>
            {lan.value==="en"
              ?"Open source projects, web apps, server apps, and soon mobile applications."
              :"Proyectos de código abierto, aplicaciones web, aplicaciones de servidor y, próximamente, aplicaciones móviles."
            }
          </p>
<<<<<<< HEAD
          <div class={styles.button}>
            {lan.value==="en"?"See my work":"Ver mi trabajo"}
            <svg width="72" height="22" viewBox="0 0 72 22" xmlns="http://www.w3.org/2000/svg" class="bow-arrow"><path fill="none" stroke-width="2" stroke-miterlimit="0" d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"></path></svg>
=======
          <div class={styles.button +" flex justify-center items-center"}>
            {lan.value==="en"?"See my work":"Ver mi trabajo"}
            <svg width="72" height="22" viewBox="0 0 72 22" xmlns="http://www.w3.org/2000/svg" class="bow-arrow hidden lg:block"><path fill="none" stroke-width="2" stroke-miterlimit="0" d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"></path></svg>
>>>>>>> 02beaf8 (UI responsive added)
          </div>
        </div>
        
      </div>
      <div class={styles.section} >
        <div>
          <h2 class={styles.title}>
            {lan.value==="en"?"I am writing new things":"Estoy escribiendo en mi blog"}
          </h2>
          <p class={styles.content}>
            {lan.value==="en"
              ?"About: the reactjs ecosystem, new javascript frameworks, tech news, and general programming."
              :"Sobre: el ecosistema de reactjs, nuevos frameworks javascript, noticias tecnológicas y programación en general."
            }
          </p>
<<<<<<< HEAD
          <div class={styles.button}>
=======
          <div class={styles.button +" sm:flex justify-center items-center"}>
>>>>>>> 02beaf8 (UI responsive added)
            <a href="https://medium.com/@anderfrankdev" target="_blank">
            {
              lan.value==="en"
              ?"See my blog"
              :"Ver mi blog"
            }
            </a>
<<<<<<< HEAD
            <svg width="72" height="22" viewBox="0 0 72 22" xmlns="http://www.w3.org/2000/svg" class="bow-arrow"><path fill="none" stroke-width="2" stroke-miterlimit="0" d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"></path></svg>
=======
            <svg width="72" height="22" viewBox="0 0 72 22" xmlns="http://www.w3.org/2000/svg" class="bow-arrow hidden lg:block"><path fill="none" stroke-width="2" stroke-miterlimit="0" d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"></path></svg>
>>>>>>> 02beaf8 (UI responsive added)
          </div>
        </div>
        
      </div>
    </section>
  );
});
