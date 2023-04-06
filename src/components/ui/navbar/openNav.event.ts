import { $ } from "@builder.io/qwik";

export const openNav = $(() => {
  const nav = document.getElementById("nav");
  nav!.style.display = "flex";
  const navLinks = document.getElementById("nav-links");
  navLinks!.style.display = "flex";
});
