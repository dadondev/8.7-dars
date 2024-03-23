import Link from "next/link";
import styled from "styled-components";
import laptop from "../general/utils/laptop";

interface ListInt {
  className?: string;
}

const list = ["home", "about", "features", "Contact"];

const ListLinksContainer = styled.ul`
  list-style: none;
  transition: 500ms all;
  align-items: center;
  display: none;
  gap: 50px;
  ${laptop} {
    display: flex;
  }
`;
const ListItem = styled.li`
  & > a {
    transition: 500ms all;
    color: ${(p) => p.theme.colors.black};
    font-family: "DM Sans";
    font-size: 1.6rem;
    text-transform: capitalize;
  }
  &:hover a {
    opacity: 0.7;
  }
`;

const ListLinks: React.FC<ListInt> = ({ className }) => {
  return (
    <ListLinksContainer className={className}>
      {list.map((e, i) => (
        <ListItem key={i}>
          <Link key={i} href={"/" + e}>
            {e}
          </Link>
        </ListItem>
      ))}
    </ListLinksContainer>
  );
};

export default ListLinks;
