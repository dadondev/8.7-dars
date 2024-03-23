import styled from "styled-components";
import ListLinks from "./ListLinks";
import laptop from "../general/utils/laptop";
import React from "react";

interface MobNavInt {
  close: boolean;
}

const MobileSection = styled.div<MobNavInt>`
  transform: translateX(${(props) => (props.close ? "100%" : "0")});
  transition: 500ms all;
  left: 0;
  top: 0;
  position: fixed;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.7;
  gap: 20px;
  text-align: center;
  padding-top: 30dvh;
  background-color: ${(p) => p.theme.colors.black};
  width: 100%;
  height: 100dvh;
  ${laptop} {
    display: none;
  }
`;

const StyledList = styled(ListLinks)`
  display: flex;
  width: 100%;
  align-items: center;

  flex-direction: column;
  padding: 0;
  ${laptop} {
    display: none;
  }
  text-align: center;
  & > li > a {
    color: ${(p) => p.theme.colors.white};
  }
`;

const MobileNav: React.FC<MobNavInt> = ({ close = false }) => {
  return (
    <MobileSection close={close}>
      <StyledList />
    </MobileSection>
  );
};

export default MobileNav;
