"use client";

import { useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Welcome from "./components/homepage/Welcome";
import About from "./components/homepage/About";
import Projects from "./components/homepage/Projects";
import HomeSection from "./components/shared/HomeSection";
import BottomNav from "./components/shared/BottomNav";

import { useGradientBackground } from "./hooks/useGradientBackground";
import Contact from "./components/homepage/Contact";

const sections = [
  {
    Comp: Welcome,
    colors: {
      a: "#2496d0",
      b: "#011226",
      aStop: -100,
      bStop: 75,
      deg: 45,
    },
  },
  {
    Comp: About,
    colors: {
      a: "#d43451",
      b: "#011226",
      aStop: -100,
      bStop: 75,
      deg: 135,
    },
  },
  {
    Comp: Projects,
    colors: {
      a: "#2496d0",
      b: "#011226",
      aStop: -100,
      bStop: 75,
      deg: 225,
    },
  },
  {
    Comp: Contact,
    colors: {
      a: "#d43451",
      b: "#011226",
      aStop: -100,
      bStop: 75,
      deg: 315,
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
  const bgColor = useGradientBackground(sections, snapContainer);
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
      <BottomNav options={sections.map((section) => section.Comp.name)} />
    </main>
  );
}
