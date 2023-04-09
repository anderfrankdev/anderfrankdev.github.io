import { component$ } from "@builder.io/qwik";
import styles from "./slide.module.css";
import { Building } from "../ui/building/Building";
import { SlideMessage } from "./SlideMessage";

const images: any = {
  Building: <Building />,
};

export const Slide = component$((data: any) => {
  return (
    <section class={styles.container} data-revert={data.revert ? "true" : ""}>
      <SlideMessage {...{ ...data }} />
      {images[data.image]}
    </section>
  );
});
