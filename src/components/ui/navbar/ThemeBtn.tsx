import {
  component$,
  $,
  useContext,
  useSignal,
  useVisibleTask$,
} from "@builder.io/qwik";
import styles from "./ThemeBtn.module.css";
import { LanContext, ThemeContext } from "~/routes/layout";

export const ThemeBtn = component$(() => {
  const theme = useContext(ThemeContext);
  const lan = useContext(LanContext);

  useVisibleTask$(({ track }) => {
    track(theme);

    if(theme.value==="light"){
      document
        .documentElement
        .classList.remove("dark")
    }
    if(theme.value==="medium"){
      document
        .documentElement
        .classList.add("dark") 
    }
    if(theme.value==="dark"){
      document
        .documentElement
        .classList.add("dark") 
    }
    
    document
      .querySelector<any>("[data-selected]")
      ?.removeAttribute("data-selected");
    document.getElementById(theme.value)!.dataset.selected = "true";
  });
  const container = useSignal<any>(null);
  const onSetTheme = $((event: any) => {
    theme.value = event.target.id.toLowerCase();
    container.value && container.value.removeAttribute("open");
    document
      .querySelector<any>("[data-selected]")!
      .removeAttribute("data-selected");
    event.target.dataset.selected = "true";
  });

  return (
    <details ref={container} class={styles.container}>
      <summary>
        {lan.value==="en"? "Theme":"Tema"}
      </summary>
      <div class={styles.options} data-select_theme>
        <div onClick$={onSetTheme} id="light">
          {lan.value==="en"? "Light":"Claro"}
        </div>
        <div onClick$={onSetTheme} id="medium">
          {lan.value==="en"? "Medium":"Medio"}

        </div>
        <div onClick$={onSetTheme} id="dark">
          {lan.value==="en"? "Dark":"Oscuro"}
        </div>
      </div>
    </details>
  );
});
