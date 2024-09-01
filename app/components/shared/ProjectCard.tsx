"use client";

import { ReactNode } from "react";
import styled from "styled-components";

const Section = styled.div`
  width: 100%;
  height: 100%;
  scroll-snap-align: center;
`;

interface ProjectCardProps {
  title: string;
  tags: string[];
  image: string;
  content: string;
}

export default function ProjectCard({
  title,
  tags,
  image,
  content,
}: ProjectCardProps) {
  return <Section></Section>;
}
