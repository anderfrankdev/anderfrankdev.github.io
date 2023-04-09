import {
  component$,
  $,
  useContext,
  useSignal,
  useVisibleTask$,
} from "@builder.io/qwik";
import styles from "./ThemeBtn.module.css";
import { ThemeContext } from "~/routes/layout";

export const ThemeBtn = component$(() => {
  const theme = useContext(ThemeContext);
  const container = useSignal<any>(null);
  const onSetTheme = $((event: any) => {
    theme.value = event.target.id.toLowerCase();
    container.value && container.value.removeAttribute("open");
    document
      .querySelector<any>("[data-selected]")!
      .removeAttribute("data-selected");
    event.target.dataset.selected = "true";
  });
  useVisibleTask$(() => {
    document.getElementById(theme.value)!.dataset.selected = "true";
  });
  return (
    <details ref={container} class={styles.container}>
      <summary>Theme</summary>
      <div class={styles.options} data-select_theme>
        <div onClick$={onSetTheme} id="light">
          Light
        </div>
        <div onClick$={onSetTheme} id="medium">
          Medium
        </div>
        <div onClick$={onSetTheme} id="dark">
          Dark
        </div>
      </div>
    </details>
  );
});
