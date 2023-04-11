import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import styles from "./slide.module.css";
import { type UiData } from "~/data/ui";
export const SlideMessage = component$(
  ({ title, content, action }: UiData["slide"]) => {
    const text = useSignal<any>(null);
    useVisibleTask$(({ cleanup }) => {
      text.value.style.transform = "scale(1)";
      const cb = (entries: any) => {
        entries.forEach((entry: any) => {
          if (entry.isIntersecting) {
            text.value.style.transform = "scale(1)";
          } else {
            text.value.style.transform = "scale(0.8)";
          }
        });
      };
      const observer = new IntersectionObserver(cb, {
        root: document.querySelector("#info_container"),
        threshold: 0.5,
      });
      if (text.value) {
        observer.observe(text.value);
      }

      cleanup(() => {
        observer.disconnect();
      });
    });

    return (
      <div class={styles.invitation} ref={text} id="">
        <h2>{title || ""}</h2>
        <p>{content || ""}</p>
        {action.text && action.link && (
          <div class={styles.button} data-button>
            <a href={action.link}>{action.text}</a>
          </div>
        )}
      </div>
    );
  }
);
