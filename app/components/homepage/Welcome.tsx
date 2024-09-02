"use client";

import { styled } from "styled-components";
import ChromaticText from "../shared/ChomaticText";
import NoSSR from "../shared/NoSSR";

const MyBody = styled.p`
  font-size: 1rem;
  text-align: center;
  color: var(--text-secondary);
`;

const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const name = "Noah Paige";

export default function Welcome() {
  return (
    <WelcomeContainer>
      <NoSSR>
        <ChromaticText
          text={name}
          myFontSizes={{ default: "6rem", md: "4.5rem", sm: "3rem" }}
          scale={1.075}
          offset={{ initial: 3, hovered: 5 }}
          weight={700}
          blur={{ initial: 1, hovered: 2 }}
        />
      </NoSSR>
      <MyBody>Welcome!</MyBody>
    </WelcomeContainer>
  );
}
