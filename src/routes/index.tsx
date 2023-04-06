import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import styles from "./index.module.css"
import { FunnyText } from '~/components/ui/FunnyText/FunnyText';

export default component$(() => {
  const presentation =  useSignal<any>(null)
  const profilePic =  useSignal<any>(null)
  
  useVisibleTask$(()=>{
    presentation.value!.classList.toggle("animate__animated")
    presentation.value!.classList.toggle("animate__fadeInDown")
    profilePic.value!.classList.toggle("animate__animated")
    profilePic.value!.classList.toggle("animate__fadeInDown")
  })

  return (
    <section class={styles.section}>
      <div class={styles.intro}>
        <div class={styles.img} ref={profilePic}>
          <img src="/anderfrankdev.jpg" alt=""/>
        </div>
        <div class={
          styles.presentation
        } ref={presentation}>
          <span> Hi, my name is&nbsp;
            <span class={styles.name}>
              <FunnyText content='Ander'/>
            </span>
          </span>
          <p class={styles.description}>I'm a <b>passionate fullstack web developer</b> from Caracas Venezuela.</p>
        </div>
      </div>
      <div class={`${styles.air} ${styles.air1}`}></div>
      <div class={`${styles.air} ${styles.air2}`}></div>
      <div class={`${styles.air} ${styles.air3}`}></div>
      <div class={`${styles.air} ${styles.air4}`}></div>
    </section>
  );
});

export const head: DocumentHead = {
  title: 'Ander Frank Carrasco: Fullstack web developer',
  meta: [
    {
      name: 'description',
      content: "Hello there!, my name is Ander Frank Carrasco also known as anderfrankdev in social media and I'm a fullstack web developer with a passion for crafting beautiful, functional, and user-friendly websites. My goal is to create web experiences that not only look great but also provide a seamless user experience.",
    },
  ],
};
