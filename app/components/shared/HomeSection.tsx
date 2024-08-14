"use client";

import { ReactNode } from "react";
import styled from "styled-components";

const Section = styled.div`
  width: 100%;
  height: 100%;
  scroll-snap-align: center;
`;

interface HomeSectionProps {
  children?: ReactNode;
}

export default function HomeSection({ children }: HomeSectionProps) {
  return <Section>{children}</Section>;
}
