import { component$, useOnWindow, $, useContext } from "@builder.io/qwik";
import styles from "./navbar.module.css";
import { closeNav } from "./closeNav.event";
import { openNav } from "./openNav.event";
import { ThemeBtn } from "./ThemeBtn";
import { LanContext, ThemeContext } from "~/routes/layout";
import { LanBtn } from "./LanBtn";

export const Navbar = component$(() => {
  const theme = useContext(ThemeContext);
  const lan = useContext(LanContext);

  useOnWindow(
    "resize",
    $(() => {
      const nav = document.getElementById("nav");
      const navLinks = document.getElementById("nav-links");

      if (window.matchMedia("(min-width:600px)").matches) {
        if (nav!.style.display != "none") return;
        nav!.style.display = "flex";
        navLinks!.style.display = "flex";
      }
      if (!window.matchMedia("(min-width:600px)").matches) {
        if (!nav!.style.display) return;
        nav!.style.display = "none";
        navLinks!.style.display = "none";
      }
    })
  );

  return (
    <>
      <header
        data-nav
        class={styles.header + " animate__animated"}
        id="nav"
        style={"--animate-duration: .7s;"}
      >
        <div class={styles.logo}>
          <img
            class={styles.logo_img}
            src={`/logo_${theme.value}.png`}
            alt="logo"
            id="logo"
          />
        </div>
        <nav
          style={{
            flex: "auto",
          }}
        >
          <ul
            class={
              styles.nav_links + " animate__animated" + " animate__fadeInDown"
            }
            id="nav-links"
          >
            <li class={styles.theme_btn} data-lan-btn>
              <LanBtn />
            </li>
            <li class={styles.theme_btn}>
              <ThemeBtn />
            </li>
            <li class={""}>
              <a target="_blank" href="https://medium.com/@anderfrankdev">
                Blog
              </a> 
            </li>
            <li class={""}>
              {lan.value==="en"? "About":"Sobre mi"}
            </li>
            <li class={""}>
              {lan.value==="en"? "Work":"Mi trabajo"}
            </li>
          </ul>
        </nav>
        <div
          class={styles.mobile_btn + " animate__animated" + " animate__fadeIn"}
          style={{
            "font-size": "3rem",
          }}
          onClick$={closeNav}
        >
          X
        </div>
      </header>
      <div class={styles.mobile_btn} data-nav-btn onClick$={openNav}>
        <img width={42} height={42} src="/list.svg" alt="menu button" />
      </div>
    </>
  );
});
