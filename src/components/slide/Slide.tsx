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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 5aaafda (UI added)
  CompuImg: (
    <div class={"building"}>
      <img src="/compu.png" style={{
        width: "100%",
        height: "100%",
      }} alt=""/>
    </div>
  )
<<<<<<< HEAD
=======
>>>>>>> 02beaf8 (UI responsive added)
>>>>>>> 5aaafda (UI added)
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
