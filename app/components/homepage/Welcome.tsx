"use client";

import styled from "styled-components";

const MyHeader = styled.h1`
  font-size: 4.5rem;
  text-align: center;
  color: var(--text-primary);
`;

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
  display: flex;
  height: 100%;
`;

export default function Welcome() {
  return (
    <WelcomeContainer>
      <MyHeader>Noah Paige</MyHeader>
      <MyBody>Welcome!</MyBody>
    </WelcomeContainer>
  );
}
