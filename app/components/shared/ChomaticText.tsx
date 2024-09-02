"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { styled } from "styled-components";
import { media } from "@/app/sharedStyles";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CharContainer = styled(motion.div)<{
  fontdefault: string;
  fontsm: string;
  fontmd: string;
  weight?: number;
}>`
  position: relative;
  font-size: ${(props) => props.fontdefault};
  font-weight: ${(props) => props.weight || 400};
  cursor: default;

  @media screen and ${media.lessThan.md} {
    font-size: ${(props) => props.fontmd};
  }
  @media screen and ${media.lessThan.sm} {
    font-size: ${(props) => props.fontsm};
  }
`;

const Char1 = styled(motion.div)`
  position: relative;
  text-align: center;
  color: var(--text-primary);
  z-index: 3;
  pointer-events: none;
`;

const Char2 = styled(motion.div)`
  position: absolute;
  text-align: center;
  color: rgba(from var(--color-abberation-1) r g b / 0.7);
  z-index: 2;
`;

const Char3 = styled(motion.div)`
  position: absolute;
  text-align: center;
  color: rgba(from var(--color-abberation-2) r g b / 0.7);
  z-index: 1;
`;
const CharContainerInner = styled.div`
  position: absolute;
  display: inline-block;
  top: 0;
  left: 0;
`;

interface ChromaticTextProps {
  text: string;
  myFontSizes: {
    default: string;
    md: string;
    sm: string;
  };
  weight: number;
  scale: number;
  offset: {
    initial: number;
    hovered: number;
  };
  blur: {
    initial: number;
    hovered: number;
  };
}

export default function ChromaticText({
  text,
  myFontSizes,
  weight,
  scale,
  offset,
  blur,
}: ChromaticTextProps) {
  const [isHovered, setIsHovered] = useState(
    new Array(text.length).fill(false)
  );

  const setHovered = (index: number, val: boolean) => {
    setIsHovered((prev) => {
      const myCopy: boolean[] = [...prev];
      myCopy[index] = val;
      return [...myCopy];
    });
  };

  const chars = text
    .replaceAll(" ", " ")
    .split("")
    .map((char) => ({ char: char }));

  return (
    <Container>
      {chars.map((item, index) => (
        <CharContainer
          key={index}
          fontdefault={myFontSizes.default}
          fontmd={myFontSizes.md}
          fontsm={myFontSizes.sm}
          weight={weight}
          onHoverStart={() => setHovered(index, true)}
          onHoverEnd={() => setHovered(index, false)}
        >
          <Char1
            variants={{
              hover: { scale: scale },
              idle: { scale: 1 },
            }}
            initial="idle"
            animate={isHovered[index] ? "hover" : "idle"}
            transition={{
              delay: isHovered[index] ? 0 : 0.1,
              type: "spring",
            }}
          >
            {item.char}
          </Char1>
          <CharContainerInner>
            <Char2
              variants={{
                hover: {
                  x: offset.hovered,
                  y: offset.hovered,
                  scale: (scale - 1) * 2 + 1,
                  filter: `blur(${blur.hovered}px)`,
                },
                idle: {
                  x: offset.initial,
                  y: offset.initial,
                  scale: 1,
                  filter: `blur(${blur.initial}px)`,
                },
              }}
              initial="idle"
              animate={isHovered[index] ? "hover" : "idle"}
              transition={{
                delay: isHovered[index] ? 0 : 0.1,
                type: "spring",
              }}
            >
              {item.char}
            </Char2>
            <Char3
              variants={{
                hover: {
                  x: -offset.hovered,
                  y: -offset.hovered,
                  scale: (scale - 1) * 2 + 1,
                  filter: `blur(${blur.hovered}px)`,
                },
                idle: {
                  x: -offset.initial,
                  y: -offset.initial,
                  scale: 1,
                  filter: `blur(${blur.initial}px)`,
                },
              }}
              initial="idle"
              animate={isHovered[index] ? "hover" : "idle"}
              transition={{
                delay: isHovered[index] ? 0 : 0.2,
                type: "spring",
              }}
            >
              {item.char}
            </Char3>
          </CharContainerInner>
        </CharContainer>
      ))}
    </Container>
  );
}
