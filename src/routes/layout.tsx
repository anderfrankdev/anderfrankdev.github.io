import { component$, type Signal, Slot, useSignal } from "@builder.io/qwik";
import { Navbar } from "~/components/ui/navbar/Navbar";
import "animate.css";
import "../global.css";
import { useContextProvider, createContextId } from "@builder.io/qwik";
import themeStyles from "~/assets/themes.module.css";

export const ThemeContext = createContextId<Signal<string>>("theme-context");

export default component$(() => {
  const theme = useSignal("medium");
  useContextProvider(ThemeContext, theme);

  return (
    <div class={`page ${themeStyles[theme.value]}`}>
      <Navbar />
      <Slot />
    </div>
  );
});
