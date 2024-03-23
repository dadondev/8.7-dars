import styled from "styled-components";
import laptop from "../utils/laptop";
import React from "react";
import desktop from "../utils/desktop";

const StyledContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  ${laptop} {
    max-width: 990px;
  }
  ${desktop} {
    max-width: 1110px;
  }
`;

interface ContainerInt {
  children: React.ReactNode;
  className?: string;
}
const Container: React.FC<ContainerInt> = ({ children, className }) => {
  return <StyledContainer className={className}>{children}</StyledContainer>;
};

export default Container;
