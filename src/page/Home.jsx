import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Home() {
  return (
    <StyledNav>
      <StyledLink to="/add">Go to Add page</StyledLink>
      <StyledLink to="/list">Go to List page</StyledLink>
    </StyledNav>
  );
}

const StyledNav = styled('nav')`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const StyledLink = styled(Link)`
  width: 150px;
  height: 100px;
  text-decoration: none;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 700;
  padding: 8px 40px;
  background-color: transparent;
  border: 1px solid #03e9f4;
  color: #03e9f4;
  letter-spacing: 1px;
  font-size: 20px;
  border-radius: 8px;
  transition: 0.5s;

  &:hover {
    background-color: #01a9b2;
    color: #fff;
    border-radius: 5px;
    box-shadow:
      0 0 5px #01a9b2,
      0 0 25px #01a9b2;
  }

  &:disabled {
    background-color: #d5d1d2;
    border: 1px solid transparent;
    color: #343434;
    box-shadow: none;
  }
`;
