"use client";

import styled from "styled-components";
import Welcome from "./components/homepage/Welcome";
import About from "./components/homepage/About";
import Projects from "./components/homepage/Projects";
import HomeSection from "./components/shared/HomeSection";

const sections = [Welcome, About, Projects];

const SnapContainer = styled.div`
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  scroll-snap-stop: always;
  padding: 0;
  margin: 0;
  height: 100vh;
  scroll-behavior: smooth;
  background: var(--bg-color);
  background: linear-gradient(
    135deg,
    rgb(117, 149, 119) -30%,
    rgb(1, 18, 38) 78%
  );
`;

export default function Home() {
  return (
    <main>
      <SnapContainer>
        {sections.map((Section, i) => {
          return (
            <HomeSection key={i}>
              <Section />
            </HomeSection>
          );
        })}
      </SnapContainer>
    </main>
  );
}
