import styled from "styled-components";
import Container from "../general/components/Container";
import laptop from "../general/utils/laptop";

const StyledContainer = styled(Container)`
  padding: 49px 24px 0;
  background-color: ${(p) => p.theme.colors.green};

  margin-bottom: 60px;
  min-height: calc(100dvh - 116px);

  ${laptop} {
    padding: 0;
    display: grid;
    grid-template-columns: 350px 1fr;
    background-color: transparent;
    margin-bottom: 140px;
    min-height: 560px;
  }
  /* height: 100%; */
`;
const Content = styled.div`
  font-family: "montserrat";
  height: 100%;
  position: relative;
  & > img {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
  ${laptop} {
    top: 0;
    padding: 100px 10px 0 100px;
    background-color: ${(p) => p.theme.colors.green};
    & > img {
      display: none;
    }
  }
  @media (width>=685px) {
    bottom: -25px;
  }
  @media (width>=693px) {
    bottom: -46px;
  }
`;

const Title = styled.h1`
  color: ${(p) => p.theme.colors.white};
  font-size: 3.2rem;
  margin-bottom: 10px;
  line-height: 4.2rem;
  ${laptop} {
    line-height: normal;
    font-size: 5.6rem;
  }
`;

const Paragraph = styled.p`
  font-family: "dm sans";
  color: ${(p) => p.theme.colors.white};
  max-width: 60%;
  margin-bottom: 30px;
  font-size: 1.4rem;
  ${laptop} {
    font-size: 2rem;
  }
`;
const Btn = styled.button`
  padding: 10px 32px;
  font-size: 1.4rem;
  background-color: ${(p) => p.theme.colors.white};
  color: ${(p) => p.theme.colors.green};
  margin-bottom: 40px;
  ${laptop} {
    padding-block: 15px;
    font-size: 2rem;
    padding-inline: 25px;
  }
`;

const Img = styled.img`
  display: none;
  ${laptop} {
    min-height: 100%;
    display: block;
  }
`;

const Main = () => {
  return (
    <StyledContainer>
      <Img src="/fur.png" alt="hero" />
      <Content>
        <Title>We Help You Make Modern Furniture</Title>
        <Paragraph>
          All of our furniture uses the best materials and choices for our
          customers.All of our furniture uses the best materials{" "}
        </Paragraph>
        <Btn>Explore More</Btn>
        <img src="/hero-content.svg" alt="hero-content" />
      </Content>
    </StyledContainer>
  );
};

export default Main;
