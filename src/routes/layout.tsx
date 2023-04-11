import { component$, type Signal, Slot, useSignal } from "@builder.io/qwik";
import { Navbar } from "~/components/ui/navbar/Navbar";
import "animate.css";
import "../global.css";
import { useContextProvider, createContextId } from "@builder.io/qwik";
import themeStyles from "~/assets/themes.module.css";

export const ThemeContext = createContextId<Signal<string>>("theme-context");
export const LanContext = createContextId<Signal<string>>("lan-context");

export default component$(() => {
  const theme = useSignal("light");
  const language = useSignal("en");
  useContextProvider(ThemeContext, theme);
  useContextProvider(LanContext, language);

  return (
    <div class={`page ${themeStyles[theme.value]}`}>
      <Navbar />
      <Slot />
    </div>
  );
});
