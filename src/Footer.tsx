import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: lightyellow;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 2em;
  margin-top: -2em;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <span>
        květen 2020
        {' '}
        &middot;
        {' '}
        <a href="https://github.com/mistoskoly/mistoskoly.cz">git</a>
      </span>
    </StyledFooter>);
}
