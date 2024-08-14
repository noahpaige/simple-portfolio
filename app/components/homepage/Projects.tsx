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

export default function Projects() {
  return (
    <div>
      <MyHeader>Projects</MyHeader>
      <MyBody>some text</MyBody>
    </div>
  );
}
