import { component$ } from '@builder.io/qwik';
import styles from "./navbar.module.css"

export const Navbar = component$(() => {
  return (
    <header class={styles.header}>
      <div class={styles.logo
        +" animate__animated animate__fadeInDown"}>
        <img
          class={
            styles.logo_img
            }
          src="/logo.png" 
          width={60} 
          height={60} 
          alt="logo"
          id="logo"/>
      </div> 
      <nav>
        <ul class={styles.nav_links}>
          <li class={"animate__animated animate__fadeInDown"}>Blog</li>
          <li class={"animate__animated animate__fadeInDown"}>About</li>
          <li class={"animate__animated animate__fadeInDown"}>Work</li>
          <li class={"animate__animated animate__fadeInDown"}>Contact</li>
        </ul>
      </nav>  
    </header>
    
  );
});