import styled from "styled-components";
import laptop from "../general/utils/laptop";
import MobileNav from "./MobileNav";

const Container = styled.div``;

const LaptopSection = styled.div`
  display: none;
  align-items: center;
  gap: 30px;
  ${laptop} {
    display: flex;
  }
`;

const IconBtns = () => {
  return (
    <Container>
      <LaptopSection>
        <button>
          <img src="/search-icon.svg" alt="search-icon" />
        </button>
        <button>
          <img src="/lg-menu.svg" alt="search-icon" />
        </button>
      </LaptopSection>
    </Container>
  );
};

export default IconBtns;
