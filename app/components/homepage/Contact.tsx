"use client";

import styled from "styled-components";
import ChromaticText from "../shared/ChomaticText";

const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 100%;
`;

const Button = styled.button`
  margin: 10px;
  padding: 1rem;
  border: none;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(20px);
  color: #fff;
  cursor: pointer;
`;

const items = [
  {
    text: "Email",
    link: "mailto:noahlandonpaige@gmail.com",
    icon: "todo",
  },
  {
    text: "Github",
    link: "mailto:noahlandonpaige@gmail.com",
    icon: "todo",
  },
  {
    text: "Resume",
    link: "mailto:noahlandonpaige@gmail.com",
    icon: "todo",
  },
  {
    text: "Spotify",
    link: "mailto:noahlandonpaige@gmail.com",
    icon: "todo",
  },
];

export default function Contact() {
  return (
    <WelcomeContainer>
      {items.map((item, index) => (
        <Button key={index} onClick={() => window.open(item.link, "_blank")}>
          <ChromaticText
            text={item.text}
            fontSize={"3rem"}
            weight={700}
            scale={1.2}
            offset={{ initial: 2, hovered: 3 }}
            blur={{ initial: 1, hovered: 2 }}
          />
        </Button>
      ))}
    </WelcomeContainer>
  );
}
