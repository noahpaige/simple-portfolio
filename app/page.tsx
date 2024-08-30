"use client";

import { useRef } from "react";
import styled from "styled-components";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";

import Welcome from "./components/homepage/Welcome";
import About from "./components/homepage/About";
import Projects from "./components/homepage/Projects";
import HomeSection from "./components/shared/HomeSection";

import { useLerpHex } from "./hooks/useLerpHex";
import { useLerp } from "./hooks/useLerp";

const sections = [
  {
    Comp: Welcome,
    colors: {
      a: "#759577",
      b: "#011226",
      aStop: -100,
      bStop: 75,
      deg: 135,
    },
  },
  {
    Comp: About,
    colors: {
      a: "#759577",
      b: "#011226",
      aStop: -100,
      bStop: 75,
      deg: 45,
    },
  },
  {
    Comp: Projects,
    colors: {
      a: "#759577",
      b: "#011226",
      aStop: -100,
      bStop: 75,
      deg: 135,
    },
  },
];

const SnapContainer = styled(motion.div)`
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  scroll-snap-stop: always;
  padding: 0;
  margin: 0;
  height: 100vh;
  scroll-behavior: smooth;
  background: var(--bg-color);
`;

export default function Home() {
  const snapContainer = useRef(null);
  const { scrollY } = useScroll({ container: snapContainer });
  let prev = scrollY.get();
  const colorA = useMotionValue(sections[0].colors.a);
  const colorB = useMotionValue(sections[0].colors.b);
  const aStop = useMotionValue(sections[0].colors.aStop);
  const bStop = useMotionValue(sections[0].colors.bStop);
  const deg = useMotionValue(sections[0].colors.deg);
  const bgColor = useMotionTemplate`linear-gradient(${deg}deg, ${colorA} ${aStop}%, ${colorB} ${bStop}%)`;

  useMotionValueEvent(scrollY, "change", (latest) => {
    const height = (snapContainer?.current as unknown as HTMLDivElement)
      .offsetHeight;
    const direction = prev < latest ? 1 : -1;
    const prevPage = Math.max(
      0,
      Math.min(
        sections.length - 1,
        direction === 1 ? Math.floor(prev / height) : Math.ceil(prev / height)
      )
    );
    const i =
      direction === 1
        ? (prev % height) / height
        : (height - (prev % height)) / height;
    const nextPage = Math.max(
      0,
      Math.min(
        sections.length - 1,
        direction === 1 ? Math.ceil(prev / height) : Math.floor(prev / height)
      )
    );

    console.log(
      `prev: ${prev}\nlatest: ${latest}\ndirection: ${direction}\nprevPage: ${prevPage}\ni: ${i}\nnextPage: ${nextPage}`
    );

    colorA.set(
      useLerpHex(sections[prevPage].colors.a, sections[nextPage].colors.a, i)
    );
    colorB.set(
      useLerpHex(sections[prevPage].colors.b, sections[nextPage].colors.b, i)
    );

    aStop.set(
      useLerp(
        sections[prevPage].colors.aStop,
        sections[nextPage].colors.aStop,
        i
      )
    );
    bStop.set(
      useLerp(
        sections[prevPage].colors.bStop,
        sections[nextPage].colors.bStop,
        i
      )
    );

    deg.set(
      useLerp(sections[prevPage].colors.deg, sections[nextPage].colors.deg, i)
    );

    prev = latest;
  });
  return (
    <main>
      <SnapContainer ref={snapContainer} style={{ background: bgColor }}>
        {sections.map((section, i) => {
          const { Comp } = section;
          return (
            <HomeSection key={i}>
              <Comp />
            </HomeSection>
          );
        })}
      </SnapContainer>
    </main>
  );
}
