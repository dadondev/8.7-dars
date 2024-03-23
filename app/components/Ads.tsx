import styled from "styled-components";
import Container from "../general/components/Container";
import laptop from "../general/utils/laptop";

const ContainerAds = styled.div`
  margin-bottom: 98px;

  ${laptop} {
    margin-bottom: 140px;
  }
`;
const Title = styled.span`
  display: block;
  text-align: center;
  color: ${(p) => p.theme.colors.green};
  font-family: "DM Sans";
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 24px;
`;
const AdsContainer = styled(Container)`
  scrollbar-width: thin;
  padding-inline: 15px;
  overflow-x: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  & > img {
    width: 70px;
    height: 40px;
  }
  ${laptop} {
    & > img {
      height: auto;
    }
  }
`;
const Ads = () => {
  return (
    <ContainerAds>
      <Title>Trusted by 20,000+ companies</Title>
      <AdsContainer>
        {[1, 2, 4, 56, 6, 7].map((e, i) => (
          <img src={"/ad-" + (i + 1) + ".svg"} key={e} alt="ads" />
        ))}
      </AdsContainer>
    </ContainerAds>
  );
};

export default Ads;
