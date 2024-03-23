"use client";
import Link from "next/link";
import styled from "styled-components";
import IconBtns from "./IconBtns";
import ListLinks from "./ListLinks";
import MobileNav from "./MobileNav";
import { useState } from "react";
import laptop from "../general/utils/laptop";

const Nav = styled.nav`
  max-width: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > a {
    color: ${(p) => p.theme.colors.darkGreen};
    font-size: 2.4rem;
    font-family: "Montserrat";
    font-weight: 700;
  }
`;

const Btn = styled.button`
  transition: 500ms all;
  width: 30px;
  height: 30px;
  position: relative;
  z-index: 10001;
  background-color: #ecf4ff;
  border-radius: 5px;
  padding: 4px;
  ${laptop} {
    display: none;
  }
`;

const Navbar = () => {
  const [close, setClose] = useState<boolean>(true);
  return (
    <Nav>
      <Link href={"/"}>DudeShape</Link>

      <ListLinks />

      <IconBtns />
      <Btn onClick={() => setClose(!close)}>
        <img src={close ? "/menu.svg" : "/lg-menu.svg"} />
      </Btn>
      <MobileNav close={close} />
    </Nav>
  );
};

export default Navbar;
