import {
  component$,
  $,
  useContext,
  useSignal,
  useVisibleTask$,
} from "@builder.io/qwik";
import styles from "./ThemeBtn.module.css";
import { LanContext } from "~/routes/layout";

export const LanBtn = component$(() => {
  const lan = useContext(LanContext);
  useVisibleTask$(({ track }) => {
    track(lan);
    document.querySelectorAll(".flag").forEach((flag:any)=>{
      if(flag.id.includes(lan.value)){
        return flag.style.display="initial"
      }
      flag.style.display="none"
    })
    document.getElementById(lan.value)!.dataset.selectedLan = "true";
    console.log(document.getElementById(lan.value)!.dataset.selected)
  });
  const container = useSignal<any>(null);
  const onSetLan = $((event: any) => {
    lan.value=event.target.id
    container.value && container.value.removeAttribute("open");
    container.value
      .querySelector("[data-selected-lan]")!
      .removeAttribute("data-selected-lan");
    event.target.dataset.selectedLan = "true";
  });

  return (
    <details ref={container}  class={styles.container}>
      <summary>
        <span id="en-flag" class="flag">🇺🇸</span>
        <span id="es-flag" style="display:none;" class="flag">🇪🇸</span>
      </summary>
      <div class={styles.options} data-select_theme>
        <div onClick$={onSetLan} id="es">
          ES 🇪🇸
        </div>
        <div onClick$={onSetLan} id="en">
          EN 🇺🇸
        </div>
      </div>
    </details>
  );
});
