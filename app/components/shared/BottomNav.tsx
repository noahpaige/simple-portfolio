"use client";

import { styled } from "styled-components";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { media } from "@/app/sharedStyles";

interface Props {
  options: string[];
}

const NavOuter = styled.div`
  position: fixed;
  bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const NavInner = styled.div`
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 1rem;
  backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
  padding: 1rem;

  @media screen and ${media.lessThan.md} {
    gap: 0.75rem;
    padding: 0.75rem;
  }

  @media screen and ${media.lessThan.sm} {
    gap: 0.5rem;
    padding: 0.5rem;
  }
`;

const NavButton = styled(motion.button)`
  padding: 1rem 1rem;
  border: none;
  font-size: 1rem;
  font-weight: 100;
  border-radius: 0.5rem;
  cursor: pointer;
  background: transparent;
  color: var(--text-secondary);

  @media screen and ${media.lessThan.md} {
    font-size: 0.75rem;
  }

  @media screen and ${media.lessThan.sm} {
  }
`;
export default function BottomNav({ options }: Props) {
  const searchParams = useSearchParams();

  const handleClick = (option: string) => {
    console.log("clicked", option);
    const params = new URLSearchParams(searchParams.toString());
    params.set("section", option);
    window.history.pushState(null, "", `?${params.toString()}`);
  };

  return (
    <NavOuter>
      <NavInner>
        {options.map((option) => (
          <NavButton
            whileTap={{ scale: 0.95 }}
            whileHover={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              transition: { duration: 0.2 },
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 15,
              ease: "easeInOut",
            }}
            onClick={() => handleClick(option)}
            key={option}
          >
            {option}
          </NavButton>
        ))}
      </NavInner>
    </NavOuter>
  );
}
