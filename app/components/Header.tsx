import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import Container from "../general/components/Container";
import laptop from "../general/utils/laptop";

const StyledContainer = styled(Container)`
  padding: 40px 24px;

  ${laptop} {
    padding: 44px 0 26px;
  }
`;

const Header = () => {
  return (
    <StyledContainer>
      <Navbar />
    </StyledContainer>
  );
};

export default Header;
