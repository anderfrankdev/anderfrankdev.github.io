import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import styles from "./index.module.css"

export default component$(() => {
  return (
    <section class={styles.section}>
      <div class={styles.intro}>
        <div class={styles.img}>
          <img src="/anderfrankdev.jpg" alt=""/>
        </div>
        <div class={
          styles.presentation
          +" animate__animated animate__fadeInDown"
        }>
          <span > Hi, my name <span class={styles.name}>Ander.</span></span> 
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
      content: 'This is my future portfolio',
    },
  ],
};
