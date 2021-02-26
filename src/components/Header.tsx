import React from "react";
import styled from "styled-components";

const HeaderStyled = styled.div`
  margin: 0 0 1rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  height: 10%;
  font-size: 17px;
  box-shadow: 0px -3px 7px gray;
`;

export const Header = () => {
  return <HeaderStyled>Frontend Assignment App</HeaderStyled>;
};
