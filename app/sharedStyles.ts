import styled from "styled-components";

export const SectionContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MyCard = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  padding: 1rem;
  backdrop-filter: blur(20px);
`;

export const H1 = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: var(--text-primary);
`;

export const H2 = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  color: var(--text-primary);
`;

export const H3 = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  text-align: center;
  color: var(--text-secondary);
`;
