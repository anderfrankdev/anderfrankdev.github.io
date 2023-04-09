import { component$, useVisibleTask$ } from "@builder.io/qwik";
import styles from "./NavGuide.module.css";
export const NavGuide = component$(() => {
  useVisibleTask$(({ cleanup }): any => {
    const elements = [...document.querySelectorAll("#info_container>section")];
    const points: any = document.querySelectorAll("." + styles.point);

    const cb = (entries: any) => {
      entries.forEach((entry: any) => {
        const index = elements.findIndex((e) => e === entry.target);
        if (entry.isIntersecting) {
          return (points[index].dataset.isVisible = "true");
        } else {
          return (points[index].dataset.isVisible = "");
        }
      });
    };
    const observer = new IntersectionObserver(cb, {
      root: document.querySelector("#info_container"),
      threshold: 0.5,
    });

    elements.forEach((el: any) => observer.observe(el));
    points.forEach((el: any, i: any) => {
      el.addEventListener("click", () =>
        elements[i] ? elements[i].scrollIntoView() : null
      );
    });

    cleanup(() => {
      observer.disconnect();
      points.forEach((el: any, i: any) => {
        el.removeEventListener("click", () =>
          elements[i] ? elements[i].scrollIntoView() : null
        );
      });
    });
  });

  return (
    <div id="nav-guide" data-nav_guide class={styles.container}>
      <div class={styles.point} id="0"></div>
      <div class={styles.point} id="1"></div>
      <div class={styles.point} id="2"></div>
    </div>
  );
});
