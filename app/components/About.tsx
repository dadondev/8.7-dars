import styled from "styled-components";
import Container from "../general/components/Container";
import laptop from "../general/utils/laptop";

const StyledContainer = styled(Container)`
  display: flex;
  gap: 40px;
  flex-direction: column-reverse;
  padding-inline: 24px;

  margin-bottom: 40px;
  ${laptop} {
    flex-direction: row;
    & > img {
      max-width: 531px;
    }
  }
`;

const Content = styled.div``;
const Title = styled.h1`
  font-size: 2.4rem;
  color: ${(p) => p.theme.colors.darkGreen};
  margin-bottom: 12px;

  ${laptop} {
    font-size: 3.2rem;
    margin-bottom: 20px;
  }
`;
const Paragraph = styled.p`
  font-size: 1.2rem;
  color: ${(p) => p.theme.colors.blackGreen};
  margin-bottom: 30px;
  ${laptop} {
    margin-bottom: 40px;
    font-size: 2rem;
  }
`;

const MiniCardsContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(40px);
  gap: 20px;
  ${laptop} {
    gap: 30px;
  }
`;

const MiniCard = styled.article`
  display: grid;
  gap: 16px;
  grid-template-columns: auto 1fr;

  & > img {
    width: 28px;
  }
  ${laptop} {
    & > img {
      width: 50px;
    }
  }
`;
// const;
const Article = styled.article``;

const SubTitle = styled.h3`
  font-size: 1.4rem;
  color: ${(p) => p.theme.colors.darkGreen};
  ${laptop} {
    font-size: 2rem;
  }
`;

const Text = styled.p`
  font-size: 1rem;
  color: ${(p) => p.theme.colors.black};
  ${laptop} {
    font-size: 1.8rem;
    line-height: 2.7rem;
  }
`;

const cardInfo = [
  {
    title: "Best Quality",
    text: "All of our furniture uses the best materials and choicess",
  },
  {
    title: "100% Secure",
    text: "All of our furniture uses the best materials and choices",
  },
  {
    title: "Free Shipping",
    text: "All of our furniture uses the best materials and choices",
  },
];

const About = () => {
  return (
    <StyledContainer>
      <img src="/about.png" alt="about" />
      <Content>
        <Title>About Us</Title>
        <Paragraph>
          All of our furniture uses the best materials and choices for our
          customers.All of our furniture uses the best materials
        </Paragraph>
        <MiniCardsContainer>
          {cardInfo.map((e, i) => (
            <MiniCard>
              <img src={`/icon-${i + 1}.svg`} alt="securty" />
              <Article>
                <SubTitle>{e.title}</SubTitle>
                <Text>{e.text}</Text>
              </Article>
            </MiniCard>
          ))}
        </MiniCardsContainer>
      </Content>
    </StyledContainer>
  );
};

export default About;
