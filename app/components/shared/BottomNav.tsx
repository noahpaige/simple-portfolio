import { useState } from "react";
import styled from "styled-components";

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
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 1rem;
  backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
  padding: 1rem;
`;

const MyComponent: React.FC<Props> = ({ options }) => {
  const [state, setState] = useState({}); // Initialize state here

  return (
    <NavOuter>
      <NavInner>
        {options.map((option) => (
          <div key={option}>{option}</div>
        ))}
      </NavInner>
    </NavOuter>
  );
};

export default MyComponent;
