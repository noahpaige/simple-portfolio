"use client";

import { styled } from "styled-components";
import { SectionContainer, MyCard, H1 } from "../../sharedStyles";
import { projectData } from "../../project-data";
import Markdown from "../shared/Markdown";
import { H3 } from "../../sharedStyles";

const ProjectsSection = styled(MyCard)`
  width: 100%;
  max-width: 800px;
  margin-left: 2rem;
  margin-right: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProjectsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px;
  grid-gap: 1rem;
`;

const ProjectCard = styled(MyCard)`
  background-size: cover;
  background-position: center;
`;

const ProjectCardHeader = styled(H3)`
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
`;

export default function Projects() {
  return (
    <SectionContainer>
      <ProjectsSection>
        <H1>Projects</H1>
        <ProjectsContainer>
          {projectData.map((project, i) => {
            return (
              <ProjectCard
                key={i}
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <ProjectCardHeader>{project.title}</ProjectCardHeader>
              </ProjectCard>
            );
          })}
        </ProjectsContainer>
      </ProjectsSection>
    </SectionContainer>
  );
}
