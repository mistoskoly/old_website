import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: lightyellow;
  position: fixed;
  top: 0;
  height: 3em;
  width: 100%;

  a {
    text-decoration: none;
  }
`;

const Navigation = styled.nav`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Navigation>
        <Link to="/">Místo školy:</Link>
        <Link to="/odejdi">Odejdi ze školy</Link>
        <Link to="/zij">Co dělat místo školy</Link>
        <Link to="/spoj-se">Spoj se</Link>
        <Link to="/zmen">Systémová změna</Link>
      </Navigation>
    </StyledHeader>
  );
}
