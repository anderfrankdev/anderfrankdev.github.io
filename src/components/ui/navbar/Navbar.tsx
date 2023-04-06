import { component$, useOnWindow, $ } from '@builder.io/qwik';
import styles from "./navbar.module.css"
import { closeNav } from './closeNav.event';
import { openNav } from './openNav.event';

export const Navbar = component$(() => {
  useOnWindow(
    'resize',
    $((event:any) => {
      const nav = document.getElementById("nav")
      const navLinks = document.getElementById("nav-links") 

      if(window.matchMedia("(min-width:600px)").matches){
        
        if(nav!.style.display!='none') return
        nav!.style.display="flex"
        navLinks!.style.display="flex"

      }
      if(!window.matchMedia("(min-width:600px)").matches){
        if(!nav!.style.display) return
        nav!.style.display="none"
        navLinks!.style.display="none"
      }
    })
  );

  
  return (
    <>  
    <header class={
         styles.header
      +" animate__animated"
    } id="nav" style={"--animate-duration: .7s;"}>
      <div class={styles.logo}>
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
      <nav style={{
        flex:"auto"
      }}>
        <ul class={
          styles.nav_links
          + " animate__animated"
          + " animate__fadeInDown"
        } id="nav-links">
          <li class={""}>Blog</li>
          <li class={""}>About</li>
          <li class={""}>Work</li>
          <li class={""}>Contact</li>
        </ul>
      </nav>
      <div 
        class={
          styles.mobile_btn
          +" animate__animated"
          +" animate__fadeIn"
        } 
          style={{
            color:"white",
            "font-size":"3rem"
          }} onClick$={closeNav}>
        X
      </div> 
    </header>
    <div class={styles.mobile_btn} onClick$={openNav}>
      <img width={42} height={42} src="/list.svg" alt="menu button"/>
    </div>
    </>
  );
});