import styled from "styled-components";
import Container from "../general/components/Container";
import laptop from "../general/utils/laptop";

const Slider = styled(Container)`
  padding-inline: 24px;
`;
const Content = styled.div`
  display: grid;
  margin-bottom: 40px;

  ${laptop} {
    grid-template-columns: 1fr auto;
    align-items: end;
    gap: 90px;
  }
`;
const Title = styled.h1`
  font-size: 2.4rem;
  ${(p) => p.theme.colors.black}
  margin-bottom: 10px;
  ${laptop} {
    font-size: 3.6rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.4rem;
  color: ${(p) => p.theme.colors.pColor};
  ${laptop} {
    font-size: 2rem;
  }
`;

const Switchers = styled.div`
  margin-left: auto;
  display: flex;
  height: 40px;
  gap: 16px;
`;

const Switcher = styled.button`
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 100%;
  background-color: ${(p) => p.theme.colors.white};
`;
// this hex for desabled -->> #D1CECE

const SliderCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SliderCard = styled.div`
  max-width: 380px;
  display: grid;
  grid-template-rows: 1fr 135px;
  background-color: ${(p) => p.theme.colors.white};
`;

const SliderCardContent = styled.div``;

const SlideArticle = styled.article``;

const BtnsContainer = styled.div``;
const Btn = styled.button``;

const SliderContainer = () => {
  return (
    <Slider>
      <Content>
        <article>
          <Title>Our Popular Furniture</Title>
          <Paragraph>
            All of our furniture uses the best materials and cssssshoices for
            our customers.All of our furniture uses the best materials and
            choices for our customers.
          </Paragraph>
        </article>

        <Switchers>
          <Switcher>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <g clip-path="url(#clip0_2275_171)">
                <path
                  d="M3.55458 9.18621L10.6748 16.3063C10.8395 16.4711 11.0593 16.5619 11.2937 16.5619C11.5281 16.5619 11.7479 16.4711 11.9126 16.3063L12.437 15.7821C12.7782 15.4405 12.7782 14.8853 12.437 14.5442L6.45797 8.56521L12.4436 2.57957C12.6083 2.41475 12.6992 2.19505 12.6992 1.96077C12.6992 1.72624 12.6083 1.50653 12.4436 1.34159L11.9193 0.817497C11.7544 0.652686 11.5347 0.561891 11.3003 0.561891C11.0659 0.561891 10.8461 0.652686 10.6814 0.817497L3.55458 7.94407C3.38951 8.10941 3.29884 8.33015 3.29936 8.56482C3.29884 8.80039 3.38951 9.02101 3.55458 9.18621Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_2275_171">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="matrix(-1 0 0 -1 16 16.5619)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Switcher>
          <Switcher>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <g clip-path="url(#clip0_2275_164)">
                <path
                  d="M12.4454 7.93757L5.32522 0.817497C5.16054 0.652686 4.9407 0.56189 4.7063 0.56189C4.47189 0.56189 4.25206 0.652686 4.08738 0.817497L3.56302 1.34172C3.22182 1.68331 3.22182 2.23849 3.56302 2.57956L9.54203 8.55857L3.55639 14.5442C3.39171 14.709 3.30078 14.9287 3.30078 15.163C3.30078 15.3975 3.39171 15.6172 3.55639 15.7822L4.08074 16.3063C4.24555 16.4711 4.46526 16.5619 4.69966 16.5619C4.93407 16.5619 5.1539 16.4711 5.31859 16.3063L12.4454 9.17971C12.6105 9.01437 12.7012 8.79363 12.7006 8.55896C12.7012 8.32339 12.6105 8.10277 12.4454 7.93757Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_2275_164">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(0 0.56189)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Switcher>
        </Switchers>
      </Content>
      <SliderCardsContainer>
        <SliderCard>
          <img src="/slide-1.png" alt="slide" />
          <SliderCardContent>
            <SlideArticle>
              <Title>White Swan Chair </Title>
              <BtnsContainer>
                <Btn>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_2275_106)">
                      <path
                        d="M5.9414 9.87822C5.79903 9.87822 5.66178 9.82664 5.55482 9.73295C5.15084 9.37971 4.76136 9.04776 4.41773 8.75494L4.41598 8.75342C3.40852 7.89488 2.53854 7.15346 1.93323 6.4231C1.25658 5.6066 0.941406 4.83245 0.941406 3.98673C0.941406 3.16505 1.22316 2.40699 1.73471 1.85211C2.25236 1.29066 2.96266 0.981445 3.73498 0.981445C4.31222 0.981445 4.84086 1.16394 5.30617 1.52382C5.54101 1.70547 5.75387 1.92779 5.9414 2.18712C6.129 1.92779 6.34179 1.70547 6.57669 1.52382C7.04201 1.16394 7.57065 0.981445 8.14789 0.981445C8.92014 0.981445 9.63051 1.29066 10.1482 1.85211C10.6597 2.40699 10.9414 3.16505 10.9414 3.98673C10.9414 4.83245 10.6263 5.6066 9.94964 6.42302C9.34433 7.15346 8.47443 7.89481 7.46712 8.75327C7.12288 9.04654 6.73279 9.37903 6.3279 9.73311C6.22101 9.82664 6.08368 9.87822 5.9414 9.87822ZM3.73498 1.56723C3.12822 1.56723 2.57081 1.80939 2.16531 2.24914C1.75378 2.69554 1.52711 3.3126 1.52711 3.98673C1.52711 4.69802 1.79147 5.33416 2.3842 6.04934C2.95709 6.74064 3.80921 7.4668 4.79585 8.30763L4.79768 8.30916C5.1426 8.60312 5.53361 8.93637 5.94056 9.2922C6.34995 8.93568 6.74157 8.6019 7.08718 8.30748C8.07373 7.46665 8.92578 6.74064 9.49867 6.04934C10.0913 5.33416 10.3557 4.69802 10.3557 3.98673C10.3557 3.3126 10.129 2.69554 9.71748 2.24914C9.31206 1.80939 8.75458 1.56723 8.14789 1.56723C7.7034 1.56723 7.29531 1.70853 6.93497 1.98715C6.61385 2.23556 6.39016 2.54959 6.25901 2.76931C6.19156 2.88231 6.07285 2.94975 5.9414 2.94975C5.80994 2.94975 5.69123 2.88231 5.62379 2.76931C5.49271 2.54959 5.26902 2.23556 4.94782 1.98715C4.58749 1.70853 4.17939 1.56723 3.73498 1.56723Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2275_106">
                        <rect
                          width="10"
                          height="9.99998"
                          fill="currentColor"
                          transform="translate(0.941406 0.43457)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Btn>
                <Btn>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_2275_111)">
                      <path
                        d="M8.87109 6.91895C8.29227 6.91895 7.77795 7.20023 7.45746 7.63322L4.69828 6.22316C4.74457 6.0659 4.76953 5.89959 4.76953 5.72754C4.76953 5.49451 4.72385 5.27199 4.64113 5.0683L7.53293 3.33084C7.85559 3.70955 8.33574 3.9502 8.87109 3.9502C9.84035 3.9502 10.6289 3.16164 10.6289 2.19238C10.6289 1.22312 9.84035 0.43457 8.87109 0.43457C7.90184 0.43457 7.11328 1.22312 7.11328 2.19238C7.11328 2.41641 7.15549 2.63072 7.23223 2.82793L4.3332 4.56973C4.01078 4.20219 3.53791 3.96973 3.01172 3.96973C2.04246 3.96973 1.25391 4.75828 1.25391 5.72754C1.25391 6.6968 2.04246 7.48535 3.01172 7.48535C3.60004 7.48535 4.12172 7.19481 4.44096 6.74969L7.19213 8.15564C7.1409 8.32037 7.11328 8.49539 7.11328 8.67676C7.11328 9.64602 7.90184 10.4346 8.87109 10.4346C9.84035 10.4346 10.6289 9.64602 10.6289 8.67676C10.6289 7.7075 9.84035 6.91895 8.87109 6.91895ZM8.87109 1.02051C9.51727 1.02051 10.043 1.54621 10.043 2.19238C10.043 2.83855 9.51727 3.36426 8.87109 3.36426C8.22492 3.36426 7.69922 2.83855 7.69922 2.19238C7.69922 1.54621 8.22492 1.02051 8.87109 1.02051ZM3.01172 6.89941C2.36555 6.89941 1.83984 6.37371 1.83984 5.72754C1.83984 5.08137 2.36555 4.55566 3.01172 4.55566C3.65789 4.55566 4.18359 5.08137 4.18359 5.72754C4.18359 6.37371 3.65789 6.89941 3.01172 6.89941ZM8.87109 9.84863C8.22492 9.84863 7.69922 9.32293 7.69922 8.67676C7.69922 8.03059 8.22492 7.50488 8.87109 7.50488C9.51727 7.50488 10.043 8.03059 10.043 8.67676C10.043 9.32293 9.51727 9.84863 8.87109 9.84863Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2275_111">
                        <rect
                          width="10"
                          height="10"
                          fill="white"
                          transform="translate(0.941406 0.43457)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Btn>
              </BtnsContainer>
            </SlideArticle>
          </SliderCardContent>
        </SliderCard>
      </SliderCardsContainer>
    </Slider>
  );
};

export default SliderContainer;
