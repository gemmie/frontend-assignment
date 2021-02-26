import React, { FC } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";

const Sort = styled.div`
  font-size: 17px;
  text-decoration: underline;
  text-align: right;
  cursor: pointer;
  padding: 0 1rem;
  white-space: nowrap;

  @media (max-width: 800px) {
    flex: 1 0 0;
    flex-basis: auto;
    order: 2;
  }
`;

interface Props {
  onClickHandler: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Sorter: FC<Props> = ({ onClickHandler }) => {
  return (
    <Sort onClick={onClickHandler}>
      Sort by date <FontAwesomeIcon icon={faSort} />
    </Sort>
  );
};

export default Sorter;
