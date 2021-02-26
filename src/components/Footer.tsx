import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const FooterStyled = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 1rem;
  z-index: 100;
  background: white;
  box-shadow: 0px 3px 7px gray;
`;

export const Footer = () => {
  return (
    <FooterStyled>
      Created with <FontAwesomeIcon icon={faHeart} /> by Tynka
    </FooterStyled>
  );
};
