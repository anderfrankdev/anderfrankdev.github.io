import { component$ } from "@builder.io/qwik";
import styles from "./slide.module.css";
import { type UiData } from "~/data/ui";
export const SlideMessage = component$(
  ({ title, content, action }: UiData["slide"]) => {
    return (
      <div class={styles.invitation} id="invitation">
        <h2>{title || ""}</h2>
        <p>{content || ""}</p>
        <div class={styles.button} data-button>
          <a href={action.link}>{action.text}</a>
        </div>
      </div>
    );
  }
);
