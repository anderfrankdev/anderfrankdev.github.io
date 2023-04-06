import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import styles from "./navbar.module.css"

export const Navbar = component$(() => {
  const navLinks =  useSignal<any>(null)
  const navLogo =  useSignal<any>(null)
  
  useVisibleTask$(()=>{
    navLinks.value!.classList.toggle("animate__animated")
    navLinks.value!.classList.toggle("animate__fadeInDown")
    navLogo.value!.classList.toggle("animate__fadeInDown")
    navLogo.value!.classList.toggle("animate__animated")
  })
  return (
    <>  
    <header class={styles.header}>
      <div class={styles.logo} ref={navLogo}>
        <img
          class={
            styles.logo_img
            }
          src="/logo.png" 
          
           
          alt="logo"
          id="logo"/>
          <img
          class={
            styles.logo_img+" "+ styles.logo_img_dark
            }
          src="/logo_dark.png" 
          
           
          alt="logo"
          id="logo-dark"/>
      </div>
      <nav>
        <ul class={styles.nav_links} ref={navLinks}>
          <li class={""}>Blog</li>
          <li class={""}>About</li>
          <li class={""}>Work</li>
          <li class={""}>Contact</li>
        </ul>
      </nav>  
    </header>
    <div class={styles.mobile_btn}>
      <img width={42} height={42} src="/list.svg" alt="menu button"/>
    </div>
    </>
  );
});