import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function NavigationBlock({ routePath, routeTitle }) {
  return (
    <StyledNavContainer>
      <StyledNavLink to="/">Home page</StyledNavLink>
      <StyledNavLink to={routePath}>{routeTitle}</StyledNavLink>
    </StyledNavContainer>
  );
}

const StyledNavContainer = styled('div')`
  display: flex;
  width: 100%;
  justify-content: space-around;
  position: fixed;
  bottom: 20px;
  left: 0;
`;

const StyledNavLink = styled(Link)`
  align-self: center;
  padding: 8px 10px;
  background-color: transparent;
  border: 1px solid #03e9f4;
  color: #03e9f4;
  letter-spacing: 1px;
  font-size: 20px;
  border-radius: 8px;
  transition: 0.5s;
  text-decoration: none;

  &:hover {
    background-color: #01a9b2;
    color: #fff;
    border-radius: 5px;
    box-shadow:
      0 0 5px #01a9b2,
      0 0 25px #01a9b2;
  }
`;
