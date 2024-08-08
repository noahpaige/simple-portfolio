"use client";

import styled from "styled-components";

const MyHeader = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  color: var(--text-primary);
`;

const MyBody = styled.p`
  font-size: 1rem;
  text-align: center;
  color: var(--text-secondary);
`;

export default function Home() {
  return (
    <main>
      <div>
        <MyHeader>hey, it's noah's website.</MyHeader>
        <MyBody>work in progress</MyBody>
      </div>
    </main>
  );
}
