import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Section = styled.div`
  min-height: 100vh;
  padding: 4em 1em 3em;
`;

export default function Live({ children }: { children: ReactNode }) {
  return (
    <Section>{children}</Section>
  );
}
