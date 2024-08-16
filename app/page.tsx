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
      deg: 135,
    },
    gradient: "linear-gradient(135deg, #759577 -100%, #011226 75%)",
  },
  {
    Comp: About,
    colors: {
      a: "#011226",
      b: "#553322",
      deg: 45,
    },
    gradient: "linear-gradient(135deg, #757795 -100%, #012612 75%)",
  },
  {
    Comp: Projects,
    colors: {
      a: "#553322",
      b: "#991226",
      deg: 225,
    },
    gradient: "linear-gradient(135deg, #229577 -100%, #991226 75%)",
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
  let colorA = useMotionValue(sections[0].colors.a);
  let colorB = useMotionValue(sections[0].colors.b);
  let deg = useMotionValue(sections[0].colors.deg);
  const bgColor = useMotionTemplate`linear-gradient(${deg}deg, ${colorA} -100%, ${colorB} 75%)`;

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
