import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import styles from "./slide.module.css";
import { type UiData } from "~/data/ui";
export const SlideMessage = component$(
  ({ title, content, action }: UiData["slide"]) => {
    const text = useSignal<any>(null);
    useVisibleTask$(() => {
      text.value.style.transform = "scale(1)";
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
