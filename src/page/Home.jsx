import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Home() {
  return (
    <StyledNav>
      <StyledLink to="/add">Go to Add page</StyledLink>
      <StyledLink to="/list">Go to List page</StyledLink>
    </StyledNav>
  );
}

const StyledNav = styled("nav")`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const StyledLink = styled(Link)`
  width: 150px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: #1f7b67;
  color: white;
  text-decoration: none;
  font-size: 20px;
  &:hover {
    background-color: #25947c;
  }
`;
