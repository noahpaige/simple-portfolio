"use client";

import React from "react";
import styled from "styled-components";
import Markdown from "../shared/Markdown";
import { SectionContainer, MyCard, H1 } from "../../sharedStyles";

const TLDRCard = styled(MyCard)`
  width: 100%;
  max-width: 800px;
  margin-left: 2rem;
  margin-right: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TLDRList = styled.div`
  font-size: 1.5rem;
  color: var(--text-secondary);
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
`;

const TLDRItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;

  & a {
    color: var(--text-primary);
  }
  & a:hover {
    transiton: all 1s linear;
    color: var(--color-primary);
  }

  #dashes {
    height: 1px;
    flex-grow: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: clip;
    padding-right: 1ch;
    position: relative;
    margin-top: auto;
    margin-bottom: auto;
    border-bottom: 1px dashed var(--color-primary);
  }
`;

const content = [
  {
    markdown: `testing out [links](https://mxstbr.com/) in this markdown`,
    emoji: "🏄‍♂️",
  },
  {
    markdown: `bloop [links](https://mxstbr.com/) `,
    emoji: "🏄‍♂️",
  },
];

export default function About() {
  return (
    <SectionContainer>
      <TLDRCard>
        <H1>TL;DR</H1>
        <TLDRList>
          {content.map((item, i) => {
            return (
              <TLDRItem key={i}>
                <Markdown content={item.markdown} />
                <p id="dashes" />
                <p>{item.emoji}</p>
              </TLDRItem>
            );
          })}
        </TLDRList>
      </TLDRCard>
    </SectionContainer>
  );
}
