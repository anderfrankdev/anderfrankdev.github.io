import { component$, useContext } from "@builder.io/qwik";
import "./building.css";
import { ThemeContext } from "~/routes/layout";
import { Dark } from "./dark";
import { Light } from "./light";
export const Building = component$(() => {
  const theme = useContext(ThemeContext);

  return theme.value != "light" ? <Dark /> : <Light />;
});
