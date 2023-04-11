import { useSignal, useStore, useVisibleTask$ } from "@builder.io/qwik";
import { useContext } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import { ThemeContext } from "../../../routes/layout";
import { TimelineMax, Linear } from "gsap";
import "./NodejsLogo.css";
export const NodejsLogo = component$(() => {
  const theme = useContext(ThemeContext);
  const htmlString = useSignal<any>(null);
  const colors = useStore({
    background: "#fff",
    color: "#006400",
  });
  useVisibleTask$(({ track }) => {
    track(theme);
    if (theme.value === "dark") {
      colors.background = "#213547";
      colors.color = "#699F63";
    }
    if (theme.value === "medium") {
      colors.background = "#004fc2";
      colors.color = "#fff";
    }
    if (theme.value === "light") {
      colors.background = "#fff";
      colors.color = "#007700";
    }
    const nodejsAnim = new TimelineMax();

    const letters = ["#sNodejs", "#jNodejs"];

    nodejsAnim.staggerFromTo(
      ".stagger",
      0.5,
      { autoAlpha: 0 },
      { autoAlpha: 1 },
      0.2
    );
    nodejsAnim.to(letters, 0.6, { strokeDashoffset: 0, ease: Linear.easeNone });
    nodejsAnim.fromTo(
      letters,
      0.5,
      { fill: colors.background },
      { fill: colors.color }
    );
    nodejsAnim.fromTo("#rNodejs", 0.2, { autoAlpha: 0 }, { autoAlpha: 1 });
  });
  return (
    <div class={"building"}>
      <svg
        id="nodejs"
        x="0px"
        y="0px"
        width="442.4px"
        height="270.9px"
        viewBox="0 0 442.4 270.9"
        data-theme={theme.value}
      >
        <path
          id="sNodejs"
          stroke="#699F63"
          stroke-width="1"
          fill="none"
          d="M231,239.2c-17.5,0-21.1-8-21.1-14.8c0-0.6,0.5-1.2,1.2-1.2h5.2c0.6,0,1.1,0.4,1.1,1
  c0.8,5.3,3.1,7.9,13.7,7.9c8.4,0,12-1.9,12-6.4c0-2.6-1-4.5-14.1-5.8c-10.9-1.1-17.7-3.5-17.7-12.2c0-8.1,6.8-12.9,18.2-12.9
  c12.8,0,19.1,4.4,19.9,14c0,0.3-0.1,0.6-0.3,0.9c-0.2,0.2-0.5,0.4-0.8,0.4H243c-0.5,0-1-0.4-1.1-0.9c-1.2-5.5-4.3-7.3-12.5-7.3
  c-9.2,0-10.3,3.2-10.3,5.6c0,2.9,1.3,3.8,13.7,5.4c12.3,1.6,18.1,3.9,18.1,12.5C250.9,234.2,243.6,239.2,231,239.2z"
        />
        <path
          id="jNodejs"
          stroke="#699F63"
          stroke-width="1"
          fill="none"
          d="M218.6,270.9c-1.5,0-2.9-0.4-4.2-1.1l-13.3-7.9c-2-1.1-1-1.5-0.4-1.7c2.7-0.9,3.2-1.1,6-2.7
  c0.3-0.2,0.7-0.1,1,0.1l10.2,6.1c0.4,0.2,0.9,0.2,1.2,0l39.9-23.1c0.4-0.2,0.6-0.6,0.6-1.1v-46.1c0-0.5-0.2-0.9-0.6-1.1l-39.9-23
  c-0.4-0.2-0.9-0.2-1.2,0l-39.9,23c-0.4,0.2-0.6,0.7-0.6,1.1v46.1c0,0.4,0.2,0.9,0.6,1.1l10.9,6.3c5.9,3,9.6-0.5,9.6-4v-45.5
  c0-0.6,0.5-1.2,1.2-1.2h5.1c0.6,0,1.2,0.5,1.2,1.2v45.5c0,7.9-4.3,12.5-11.8,12.5c-2.3,0-4.1,0-9.2-2.5l-10.5-6
  c-2.6-1.5-4.2-4.3-4.2-7.3v-46.1c0-3,1.6-5.8,4.2-7.3l39.9-23.1c2.5-1.4,5.9-1.4,8.4,0l39.9,23.1c2.6,1.5,4.2,4.3,4.2,7.3v46.1
  c0,3-1.6,5.8-4.2,7.3l-39.9,23.1C221.6,270.5,220.1,270.9,218.6,270.9z"
        />
        <path
          id="rNodejs"
          fill="#699F63"
          d="M288.6,190.8c0,4.2-3.5,7.7-7.7,7.7c-4.2,0-7.7-3.4-7.7-7.7c0-4.4,3.6-7.7,7.7-7.7
  C285,183.1,288.6,186.5,288.6,190.8z M274.4,190.8c0,3.6,2.9,6.5,6.4,6.5c3.6,0,6.5-3,6.5-6.5c0-3.6-2.9-6.4-6.5-6.4
  C277.4,184.4,274.4,187.2,274.4,190.8z M278,186.5h3c1,0,3,0,3,2.3c0,1.6-1,1.9-1.6,2.1c1.2,0.1,1.3,0.9,1.4,2
  c0.1,0.7,0.2,1.9,0.4,2.3h-1.8c0-0.4-0.3-2.6-0.3-2.7c-0.1-0.5-0.3-0.7-0.9-0.7h-1.5v3.5H278V186.5z M279.6,190.3h1.3
  c1.1,0,1.3-0.8,1.3-1.2c0-1.2-0.8-1.2-1.3-1.2h-1.4V190.3z"
        />
        <path
          id="n"
          class="st1 stagger"
          d="M94.9,90.6c0-1.8-1-3.5-2.6-4.4L50,61.7c-0.7-0.4-1.5-0.6-2.3-0.7c-0.1,0-0.4,0-0.4,0
  c-0.8,0-1.6,0.3-2.3,0.7L2.6,86.1C1,87,0,88.7,0,90.6l0.1,65.6c0,0.9,0.5,1.8,1.3,2.2c0.8,0.5,1.8,0.5,2.5,0L29.1,144
  c1.6-0.9,2.6-2.6,2.6-4.4v-30.7c0-1.8,1-3.5,2.6-4.4l10.7-6.2c0.8-0.5,1.7-0.7,2.6-0.7c0.9,0,1.8,0.2,2.5,0.7l10.7,6.2
  c1.6,0.9,2.6,2.6,2.6,4.4v30.7c0,1.8,1,3.5,2.6,4.4L91,158.4c0.8,0.5,1.8,0.5,2.6,0c0.8-0.4,1.3-1.3,1.3-2.2L94.9,90.6z"
        />
        <path
          id="d"
          class="st1 stagger"
          d="M298.7,0.3c-0.8-0.4-1.8-0.4-2.5,0c-0.8,0.5-1.3,1.3-1.3,2.2v65c0,0.6-0.3,1.2-0.9,1.6
  c-0.6,0.3-1.2,0.3-1.8,0L281.6,63c-1.6-0.9-3.5-0.9-5.1,0l-42.4,24.5c-1.6,0.9-2.6,2.6-2.6,4.4v48.9c0,1.8,1,3.5,2.6,4.4l42.4,24.5
  c1.6,0.9,3.5,0.9,5.1,0l42.4-24.5c1.6-0.9,2.6-2.6,2.6-4.4V18.9c0-1.9-1-3.6-2.6-4.5L298.7,0.3z M294.8,124.7c0,0.5-0.2,0.9-0.6,1.1
  l-14.5,8.4c-0.4,0.2-0.9,0.2-1.3,0l-14.5-8.4c-0.4-0.2-0.6-0.7-0.6-1.1v-16.8c0-0.5,0.2-0.9,0.6-1.1l14.5-8.4c0.4-0.2,0.9-0.2,1.3,0
  l14.5,8.4c0.4,0.2,0.6,0.7,0.6,1.1V124.7z"
        />
        <g class="stagger">
          <path
            id="e"
            class="st1"
            d="M439.8,107.5c1.6-0.9,2.5-2.6,2.5-4.4V91.2c0-1.8-1-3.5-2.5-4.4l-42.1-24.4c-1.6-0.9-3.5-0.9-5.1,0
  l-42.4,24.5c-1.6,0.9-2.6,2.6-2.6,4.4v48.9c0,1.8,1,3.5,2.6,4.4l42.1,24c1.6,0.9,3.5,0.9,5,0l25.5-14.2c0.8-0.4,1.3-1.3,1.3-2.2
  c0-0.9-0.5-1.8-1.3-2.2l-42.6-24.5c-0.8-0.5-1.3-1.3-1.3-2.2V108c0-0.9,0.5-1.8,1.3-2.2l13.3-7.6c0.8-0.5,1.8-0.5,2.6,0l13.3,7.6
  c0.8,0.5,1.3,1.3,1.3,2.2V120c0,0.9,0.5,1.8,1.3,2.2c0.8,0.5,1.8,0.5,2.6,0L439.8,107.5z"
          />
          <path
            id="eDot"
            class="st2"
            d="M394.5,105.2c0.3-0.2,0.7-0.2,1,0l8.1,4.7c0.3,0.2,0.5,0.5,0.5,0.9v9.4c0,0.4-0.2,0.7-0.5,0.9
  l-8.1,4.7c-0.3,0.2-0.7,0.2-1,0l-8.1-4.7c-0.3-0.2-0.5-0.5-0.5-0.9v-9.4c0-0.4,0.2-0.7,0.5-0.9L394.5,105.2z"
          />
        </g>
        <g id="o" class="stagger">
          <defs>
            <path
              id="XMLID_1_"
              d="M165.8,62.6c-1.6-0.9-3.5-0.9-5.1,0l-42.1,24.3c-1.6,0.9-2.5,2.6-2.5,4.4V140c0,1.8,1,3.5,2.5,4.4
      l42.1,24.3c1.6,0.9,3.5,0.9,5.1,0l42.1-24.3c1.6-0.9,2.5-2.6,2.5-4.4V91.3c0-1.8-1-3.5-2.5-4.4L165.8,62.6z"
            />
          </defs>
          <linearGradient
            id="XMLID_6_"
            gradientUnits="userSpaceOnUse"
            x1="180.3959"
            y1="80.6976"
            x2="142.331"
            y2="158.35"
          >
            <stop offset="0" style="stop-color:#41873F" />
            <stop offset="0.3288" style="stop-color:#418B3D" />
            <stop offset="0.6352" style="stop-color:#419637" />
            <stop offset="0.9319" style="stop-color:#3FA92D" />
            <stop offset="1" style="stop-color:#3FAE2A" />
          </linearGradient>
          <use
            xlink:href="#XMLID_1_"
            style="overflow:visible;fill-rule:evenodd;clip-rule:evenodd;fill:url(#XMLID_6_);"
          />
          <clipPath id="XMLID_7_">
            <use xlink:href="#XMLID_1_" style="overflow:visible;" />
          </clipPath>
          <g class="st3">
            <path
              class="st4"
              d="M160.6,62.6l-42.2,24.3c-1.6,0.9-2.7,2.6-2.7,4.4V140c0,1.2,0.5,2.3,1.3,3.2l47.4-81.2
      C163.2,61.7,161.8,61.9,160.6,62.6z"
            />
            <path
              class="st4"
              d="M164.7,169.2c0.4-0.1,0.8-0.3,1.2-0.5l42.2-24.3c1.6-0.9,2.6-2.6,2.6-4.4V91.3c0-1.3-0.6-2.6-1.5-3.5
      L164.7,169.2z"
            />
            <linearGradient
              id="SVGID_1_"
              gradientUnits="userSpaceOnUse"
              x1="156.8518"
              y1="121.3365"
              x2="263.6591"
              y2="42.4216"
            >
              <stop offset="0.1376" style="stop-color:#41873F" />
              <stop offset="0.4032" style="stop-color:#54A044" />
              <stop offset="0.7136" style="stop-color:#66B848" />
              <stop offset="0.9081" style="stop-color:#6CC04A" />
            </linearGradient>
            <path
              class="st5"
              d="M208,86.9l-42.3-24.3c-0.4-0.2-0.9-0.4-1.3-0.5L117,143.2c0.4,0.5,0.9,0.9,1.4,1.2l42.3,24.3
      c1.2,0.7,2.6,0.9,3.9,0.5l44.5-81.4C208.8,87.4,208.4,87.1,208,86.9z"
            />
          </g>
          <g class="st3">
            <path
              class="st4"
              d="M210.7,140V91.3c0-1.8-1.1-3.5-2.7-4.4l-42.3-24.3c-0.5-0.3-1-0.5-1.6-0.6l46.3,79.1
      C210.6,140.8,210.7,140.4,210.7,140z"
            />
            <path
              class="st4"
              d="M118.4,86.9c-1.6,0.9-2.7,2.6-2.7,4.4V140c0,1.8,1.2,3.5,2.7,4.4l42.3,24.3c1,0.6,2.1,0.8,3.3,0.6l-45.3-82.6
      L118.4,86.9z"
            />
            <linearGradient
              id="SVGID_2_"
              gradientUnits="userSpaceOnUse"
              x1="114.5565"
              y1="53.8174"
              x2="211.9735"
              y2="53.8174"
            >
              <stop offset="9.191646e-02" style="stop-color:#6CC04A" />
              <stop offset="0.2864" style="stop-color:#66B848" />
              <stop offset="0.5968" style="stop-color:#54A044" />
              <stop offset="0.8624" style="stop-color:#41873F" />
            </linearGradient>
            <polygon class="st6" points="159.3,53.7 158.7,54 159.5,54     " />
            <linearGradient
              id="SVGID_3_"
              gradientUnits="userSpaceOnUse"
              x1="114.5565"
              y1="115.6346"
              x2="211.9735"
              y2="115.6346"
            >
              <stop offset="9.191646e-02" style="stop-color:#6CC04A" />
              <stop offset="0.2864" style="stop-color:#66B848" />
              <stop offset="0.5968" style="stop-color:#54A044" />
              <stop offset="0.8624" style="stop-color:#41873F" />
            </linearGradient>
            <path
              class="st7"
              d="M208,144.4c1.2-0.7,2.1-1.9,2.5-3.2L164.2,62c-1.2-0.2-2.5-0.1-3.6,0.6l-42,24.2l45.3,82.6
      c0.6-0.1,1.3-0.3,1.9-0.6L208,144.4z"
            />
            <linearGradient
              id="SVGID_4_"
              gradientUnits="userSpaceOnUse"
              x1="114.5565"
              y1="143.4452"
              x2="211.9735"
              y2="143.4452"
            >
              <stop offset="9.191646e-02" style="stop-color:#6CC04A" />
              <stop offset="0.2864" style="stop-color:#66B848" />
              <stop offset="0.5968" style="stop-color:#54A044" />
              <stop offset="0.8624" style="stop-color:#41873F" />
            </linearGradient>
            <polygon
              class="st8"
              points="212,143.6 211.7,143.1 211.7,143.8    "
            />
            <linearGradient
              id="SVGID_5_"
              gradientUnits="userSpaceOnUse"
              x1="114.5565"
              y1="156.0148"
              x2="211.9735"
              y2="156.0148"
            >
              <stop offset="9.191646e-02" style="stop-color:#6CC04A" />
              <stop offset="0.2864" style="stop-color:#66B848" />
              <stop offset="0.5968" style="stop-color:#54A044" />
              <stop offset="0.8624" style="stop-color:#41873F" />
            </linearGradient>
            <path
              class="st9"
              d="M208,144.4l-42.2,24.3c-0.6,0.3-1.2,0.5-1.9,0.6l0.8,1.5l46.8-27.1v-0.6l-1.2-2
      C210.2,142.5,209.3,143.7,208,144.4z"
            />
            <linearGradient
              id="SVGID_6_"
              gradientUnits="userSpaceOnUse"
              x1="226.166"
              y1="78.3954"
              x2="166.0853"
              y2="200.9598"
            >
              <stop offset="0" style="stop-color:#41873F" />
              <stop offset="0.3288" style="stop-color:#418B3D" />
              <stop offset="0.6352" style="stop-color:#419637" />
              <stop offset="0.9319" style="stop-color:#3FA92D" />
              <stop offset="1" style="stop-color:#3FAE2A" />
            </linearGradient>
            <path
              class="st10"
              d="M208,144.4l-42.2,24.3c-0.6,0.3-1.2,0.5-1.9,0.6l0.8,1.5l46.8-27.1v-0.6l-1.2-2
      C210.2,142.5,209.3,143.7,208,144.4z"
            />
          </g>
        </g>
      </svg>
      <div dangerouslySetInnerHTML={htmlString.value}></div>
    </div>
  );
});
