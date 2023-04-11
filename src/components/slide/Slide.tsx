import { component$ } from "@builder.io/qwik";
import styles from "./slide.module.css";
import { Building } from "../ui/building/Building";
import { SlideMessage } from "./SlideMessage";
import { ReactLogo } from "../ui/ReactLogo/ReactLogo";
import { NodejsLogo } from "../ui/NodejsLogo/NodejsLogo";

const images: any = {
  Building: <Building />,
  ReactLogo: <ReactLogo />,
  NodeLogo: <NodejsLogo />,
};

export const Slide = component$((data: any) => {
  const fullscreen = !images[data.image]?true:false
  return (
    <section class={styles.container} data-revert={data.revert ? "true" : ""}>
      <SlideMessage {...{ ...data, fullscreen }} />
      {images[data.image]}
    </section>
  );
});
